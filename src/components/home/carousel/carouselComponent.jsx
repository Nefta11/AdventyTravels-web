import { useState, useEffect } from "react";
import "./carousel.css";

import usaImage1 from "../../../assets/images/carousel/img1.webp";
import usaImage2 from "../../../assets/images/carousel/img2.webp";
import usaImage3 from "../../../assets/images/carousel/img3.webp";
import usaImage4 from "../../../assets/images/carousel/img4.webp";
import usaImage5 from "../../../assets/images/carousel/img5.webp";
import usaImage6 from "../../../assets/images/carousel/img6.webp";
import usaImage7 from "../../../assets/images/carousel/img7.webp";


const images = [usaImage1, usaImage2, usaImage3, usaImage4, usaImage5, usaImage6, usaImage7];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 50000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-slide">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carousel-image"
                />
            </div>
            <button className="carousel-arrow left" onClick={handlePrev}>
                ‹
            </button>
            <button className="carousel-arrow right" onClick={handleNext}>
                ›
            </button>
        </div>
    );
};

export default CarouselComponent;
