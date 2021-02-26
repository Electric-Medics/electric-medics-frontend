import React, { useCallback, useEffect, useMemo, useState } from "react";
import ImagePreLoader from "../Carousel/ImageSliderPreloader";
import styles from "./ImageSliderStyle";
import ImageSliderNavigation, {
  ImageSliderNavDirection,
  ImageSliderNavStyle,
} from "./ImageSliderNavigation";
import ImageSliderBullets from "./ImageSliderBullets";

export type SimpleImageSliderProps = {
  width: number | string;
  height: number | string;
  images: Array<{ url: string }>;
  style?: React.CSSProperties;
  showNavs: boolean;
  showBullets: boolean;
  slideDuration?: number;
  bgColor?: string;
  useGPURender?: boolean;
  navStyle?: ImageSliderNavStyle;
  onClick?: (idx: number, event: React.SyntheticEvent) => void;
  onClickNav?: (toRight: boolean) => void;
  onClickBullets?: (idx: number) => void;
  onStartSlide?: (idx: number, length: number) => void;
  onCompleteSlide?: (idx: number, length: number) => void;
};

const SimpleImageSlider: React.FC<SimpleImageSliderProps> = ({
  width,
  height,
  images,
  showNavs,
  showBullets,
  style = undefined,
  slideDuration = 0.5,
  bgColor = "#000",
  useGPURender = true,
  navStyle = ImageSliderNavStyle.NORMAL,
  onClick = undefined,
  onClickNav = undefined,
  onClickBullets = undefined,
  onStartSlide = undefined,
  onCompleteSlide = undefined,
}: SimpleImageSliderProps) => {
  const rootStyle: React.CSSProperties = useMemo(
    () => styles.getRootContainer(width, height, bgColor),
    [width, height, bgColor]
  );
  const [slideIdx, setSlideIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState(
    ImageSliderNavDirection.RIGHT
  );
  const [isSliding, setIsSliding] = useState(false);
  const [currentSliderStyle, setCurrentSlideStyle] = useState(
    styles.getImageSlide(images[0].url, slideDuration, 0, useGPURender)
  );
  const [nextSliderStyle, setNextSliderStyle] = useState(
    styles.getImageSlide(images[1]?.url, slideDuration, 1, useGPURender)
  );

  const handleClick = useCallback(
    (event: React.SyntheticEvent) => {
      onClick?.(slideIdx, event);
    },
    [slideIdx]
  );

  const handleClickNav = useCallback(
    (direction: ImageSliderNavDirection) => () => {
      if (isSliding) {
        return;
      }

      onClickNav?.(true);
      slide(
        direction === ImageSliderNavDirection.RIGHT
          ? slideIdx + 1
          : slideIdx - 1
      );
    },
    [slideIdx, isSliding]
  );

  const handleClickBullets = useCallback(
    (idx: number) => {
      if (idx === slideIdx || isSliding) {
        return;
      }

      onClickBullets?.(idx);
      slide(idx);
    },
    [slideIdx, isSliding]
  );

  const slide = (idx: number) => {
    const toNext: boolean = idx > slideIdx;
    const currentUrl: string = images[slideIdx].url;
    const nextUrl: string = images[idx].url;
    const nextReadyX: 1 | -1 = toNext ? 1 : -1;

    setSlideIdx(idx);
    setSlideDirection(
      idx > slideIdx
        ? ImageSliderNavDirection.RIGHT
        : ImageSliderNavDirection.LEFT
    );
    setCurrentSlideStyle(styles.getImageSlide(currentUrl, 0, 0, useGPURender));
    setNextSliderStyle(
      styles.getImageSlide(nextUrl, 0, nextReadyX, useGPURender)
    );
    setIsSliding(true);

    onStartSlide?.(idx + 1, images.length);
    idx + 2 < images.length && ImagePreLoader.load(images[idx + 2].url);
  };

  // const autoPlay = (idx: number) => {
  //   setTimeout(() => {
  //     if (isSliding) {
  //       console.log("BREAKS");
  //       return;
  //     } else if (slideIdx + 1 === 3) {
  //       slide(slideIdx - 2);
  //     } else {
  //       slide(slideIdx + 1);
  //     }
  //   }, 5000)
  // }

  useEffect(() => {
    if (isSliding) {
      setTimeout(() => {
        const toRight: boolean =
          slideDirection === ImageSliderNavDirection.RIGHT;
        const currentUrl: string =
          images[toRight ? slideIdx - 1 : slideIdx + 1].url;
        const nextUrl: string = images[slideIdx].url;
        const currentOffsetX: 1 | -1 = toRight ? -1 : 1;

        setCurrentSlideStyle(
          styles.getImageSlide(
            currentUrl,
            slideDuration,
            currentOffsetX,
            useGPURender
          )
        );
        setNextSliderStyle(
          styles.getImageSlide(nextUrl, slideDuration, 0, useGPURender)
        );
      }, 50);
    }
    // setIsSliding(false);
  }, [slideIdx, isSliding]);

  const handleSlideEnd = useCallback(() => {
    setCurrentSlideStyle(
      styles.getImageSlide(images[slideIdx].url, 0, 0, useGPURender)
    );
    setIsSliding(false);
    onCompleteSlide?.(slideIdx + 1, images.length);
  }, [slideIdx]);

  return (
    <div style={{ ...rootStyle, ...style }}>
      <div style={styles.getSubContainer(width, height)}>
        {/* Render Slider */}
        <div style={styles.ImageSlider} onClick={handleClick}>
          <div style={currentSliderStyle} onTransitionEnd={handleSlideEnd} />
          {images.length > 1 && <div style={nextSliderStyle} />}
        </div>

        {/* Render Navigation */}
        {showNavs && images.length > 0 && slideIdx > 0 && (
          <ImageSliderNavigation
            direction={ImageSliderNavDirection.LEFT}
            navStyle={navStyle}
            onClickNav={handleClickNav}
          />
        )}
        {showNavs && images.length > 0 && slideIdx < images.length - 1 && (
          <ImageSliderNavigation
            direction={ImageSliderNavDirection.RIGHT}
            navStyle={navStyle}
            onClickNav={handleClickNav}
          />
        )}

        {/* Render Bullets */}
        {showBullets && images.length > 0 && (
          <ImageSliderBullets
            length={images.length}
            currentIdx={slideIdx}
            onClickBullets={handleClickBullets}
          />
        )}
        {/* {autoPlay(slideIdx)} */}
      </div>
    </div>
  );
};


export default SimpleImageSlider;
