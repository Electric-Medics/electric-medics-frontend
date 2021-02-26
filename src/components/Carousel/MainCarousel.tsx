import React, { useCallback, useState } from "react";
import SimpleImageSlider from "./ImageSlider";
import test from "../../assets/images/homepage-main.jpg";
import test1 from "../../assets/images/test1.jpg";
import test2 from "../../assets/images/test2.jpg";

const IMAGES = [
  { url: test },
  { url: test1 },
  { url: test2 },
];

type SliderOptions = {
  useGPURender: boolean;
  showNavs: boolean;
  showBullets: boolean;
  navStyle: 1 | 2;
  duration: number;
  bgColor: string;
};

const MainCarousel = () => {
    const [sliderOptions] = useState<SliderOptions>({
      useGPURender: true,
      showNavs: true,
      showBullets: true,
      navStyle: 1,
      duration: 0.5,
      bgColor: "#000",
    });

  return (
    <SimpleImageSlider
      style={{ margin: "0", padding: "0" }}
      width={1900}
      height={500}
      images={IMAGES}
      showBullets={sliderOptions.showBullets}
      showNavs={sliderOptions.showNavs}
      useGPURender={sliderOptions.useGPURender}
      navStyle={sliderOptions.navStyle}
      slideDuration={sliderOptions.duration}
    />
  );
}

export default MainCarousel;