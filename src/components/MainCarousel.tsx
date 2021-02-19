import Carousel from "react-material-ui-carousel";
import MainImage from '../assets/images/homepage-main.jpg';

const MainCarousel = () => {
    return (
      <Carousel>
        <img src={MainImage} alt="Electric Medics Main" />
      </Carousel>
    );
};

export default MainCarousel;