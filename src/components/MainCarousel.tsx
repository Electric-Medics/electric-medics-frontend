import React from "react";
import SimpleImageSlider from "../components/Carousel/ImageSlider";
import test1 from "../assets/images/homepage-main.jpg";
import test2 from "../assets/images/homepage-1.jpg";
import test3 from "../assets/images/homepage-2.jpg";
import test4 from "../assets/images/hompage-3.jpg";


const IMAGES = [
  { url: test1 },
  { url: test2 },
  { url: test3 },
  { url: test4 }
];

const MainCarousel = () => {
  return (
    <SimpleImageSlider
      style={{ margin: "0 auto" }}
      width={1900}
      height={500}
      images={IMAGES}
      showBullets={true}
      showNavs={true}
      useGPURender={true}
    />
  );
}

export default MainCarousel;