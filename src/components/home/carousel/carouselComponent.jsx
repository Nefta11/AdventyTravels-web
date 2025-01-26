import React, { useEffect, useState } from "react";
import "./carousel.css";
import usaImage1 from "../../../assets/images/usa.webp";
import usaImage2 from "../../../assets/images/usa.webp";
import usaImage3 from "../../../assets/images/usa.webp";
import usaImage4 from "../../../assets/images/usa.webp";
import usaImage5 from "../../../assets/images/usa.webp";

const images = [usaImage1, usaImage2, usaImage3, usaImage4, usaImage5]; // Añade tus imágenes aquí

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default React.memo(CarouselComponent);
