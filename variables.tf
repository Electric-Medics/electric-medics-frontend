variable "region" {
    type = string
    description = "The region to launch the infrastructure"
    default = "us-west-1"
}

variable "s3_bucket" {
    type = string
    description = "Enter the unique name for s3 bucket. If you don't give unique name, terraform fails creating infrastructure."
    default = "electric-medics-deployment-1"
}

variable "s3_bucket_artifacts" {
    type = string
    description = "Enter the unique name for s3 bucket to store build artifacts"
    default = "electric-medics-artifacts-1"
}

variable "aws_codebuild_name" {
    type = string
    description = "Enter the name for codebuild project"
    default = "electric-frontend-codebuild"
}

variable "github_token" {
    type = string
    description = "Enter the github token to access the github from AWS"
}

variable "cloudwatch_group_name" {
    type = string
    description = "The name of the cloudwatch group to group logs"
    default = "electric-frontend-codepipeline-logs"
}

variable "cloudwatch_stream_name" {
    type = string
    description = "The name of the cloudwatch stream"
    default = "electric-frontend-codepipeline-stream"
}

variable "github_branch" {
    type = string
    description = "the name of the github branch to get the code from"
    default = "main"
}

variable "github_url" {
    type = string
    description = "the source url of the github project"
    default = "https://github.com/Electric-Medics/electric-medics-frontend.git"
}

variable "github_user" {
    type = string
    description = "the user name of the github account"
    default = "Tbloom9787"
}

variable "github_repo" {
    type = string
    description = "the repository name of the github project"
    default = "electric-medics-frontend"
}