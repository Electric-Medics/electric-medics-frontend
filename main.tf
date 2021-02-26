provider "aws"{
    region = var.region
}
resource "aws_s3_bucket" "frontend" {
  bucket = var.s3_bucket
  acl    = "public-read"
  policy = file("s3-policy.json")
  website {
      index_document = "index.html"
      error_document = "error.html"
  }
}

resource "aws_s3_bucket" "artifacts" {
  bucket = var.s3_bucket_artifacts
  acl    = "public-read"
}

resource "aws_codebuild_source_credential" "frontend" {
  auth_type   = "PERSONAL_ACCESS_TOKEN"
  server_type = "GITHUB"
  token = var.github_token
}


resource "aws_codebuild_project" "frontend" {
  name          = var.aws_codebuild_name
  description   = "tf_frontend_codebuild_project"
  build_timeout = "5"
  service_role  = aws_iam_role.frontend.arn

  artifacts {
    type = "NO_ARTIFACTS"
  }

  cache {
    type     = "S3"
    location = aws_s3_bucket.artifacts.bucket
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/standard:1.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
  }

  logs_config {
    cloudwatch_logs {
      group_name  = var.cloudwatch_group_name
      stream_name = var.cloudwatch_stream_name
    }

    s3_logs {
      status   = "ENABLED"
      location = "${aws_s3_bucket.artifacts.id}/build-log"
    }
  }

  source {
    type            = "GITHUB"
    location        = var.github_url
    git_clone_depth = 1
    git_submodules_config {
      fetch_submodules = true
    }
    auth {
        type     = "OAUTH"
        resource = aws_codebuild_source_credential.frontend.arn
    }
  }

  source_version = var.github_branch
}

resource "aws_codepipeline" "codepipeline" {
  name     = "tf-frontend-pipeline"
  role_arn = aws_iam_role.codepipeline_role.arn

  artifact_store {
    location = aws_s3_bucket.artifacts.bucket
    type     = "S3"
    # encryption_key {
    #   id   = data.aws_kms_alias.s3kmskey.arn
    #   type = "KMS"
    # }
  }

  stage {
    name = "Source"

    action {
      name             = "Source"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        Owner = var.github_user
        Repo = var.github_repo
        Branch     = var.github_branch
        OAuthToken = var.github_token
      }
    }
  }

  stage {
    name = "Build"

    action {
      name             = "Build"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      input_artifacts  = ["source_output"]
      output_artifacts = ["build_output"]
      version          = "1"

      configuration = {
        ProjectName = var.aws_codebuild_name
      }
    }
  }

  stage {
    name = "Deploy"

    action {
      name            = "Deploy"
      category        = "Deploy"
      owner           = "AWS"
      provider        = "S3"
      input_artifacts = ["build_output"]
      version         = "1"
      
      configuration = {
        BucketName = aws_s3_bucket.frontend.bucket
        Extract    = "true"
      }
    }
  }
}
