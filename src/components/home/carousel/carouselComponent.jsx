import { useState, useEffect, useCallback } from "react";
import "./carousel.css";

import usaImage1 from "../../../assets/images/carousel/img1.webp";
import usaImage2 from "../../../assets/images/carousel/img2.webp";
import usaImage3 from "../../../assets/images/carousel/img3.webp";
import usaImage4 from "../../../assets/images/carousel/img4.webp";
import usaImage5 from "../../../assets/images/carousel/img5.webp";
import usaImage6 from "../../../assets/images/carousel/img6.webp";
import usaImage7 from "../../../assets/BannerBrasil.jpg";

const images = [usaImage1, usaImage2, usaImage3, usaImage4, usaImage5, usaImage6, usaImage7];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleNext = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    }, [isTransitioning]);

    const handlePrev = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setTimeout(() => setIsTransitioning(false), 300);
        }
    }, [isTransitioning]);

    // Función para manejar la navegación con teclado
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowLeft') {
            handlePrev();
        } else if (e.key === 'ArrowRight') {
            handleNext();
        }
    }, [handleNext, handlePrev]);

    // Funciones para manejar eventos táctiles
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) {
            // Deslizamiento a la izquierda, ir a la siguiente imagen
            handleNext();
        } else if (touchStart - touchEnd < -100) {
            // Deslizamiento a la derecha, ir a la imagen anterior
            handlePrev();
        }
    };

    useEffect(() => {
        // Auto-rotación del carrusel
        const interval = setInterval(handleNext, 5000);

        // Añadir evento para navegación con teclado
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleNext, handleKeyDown]);

    // Calcular índices para precargar imágenes adyacentes
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <div
            className="carouselComponent-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            tabIndex="0"
            role="region"
            aria-label="Carrusel de imágenes"
        >
            <div className="carouselComponent-carousel-slide">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`carouselComponent-carousel-image ${isTransitioning ? 'carouselComponent-carousel-image-transitioning' : ''}`}
                />

                {/* Precargar imágenes adyacentes */}
                <div className="carouselComponent-carousel-preload">
                    <img src={images[prevIndex]} alt="" aria-hidden="true" />
                    <img src={images[nextIndex]} alt="" aria-hidden="true" />
                </div>
            </div>

            {/* Indicadores de posición */}
            <div className="carouselComponent-carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carouselComponent-carousel-indicator ${index === currentIndex ? 'carouselComponent-carousel-indicator-active' : ''}`}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrentIndex(index);
                            setTimeout(() => setIsTransitioning(false), 300);
                        }}
                        aria-label={`Ir a la imagen ${index + 1}`}
                        aria-current={index === currentIndex ? "true" : "false"}
                    />
                ))}
            </div>

            <button
                className="carouselComponent-carousel-arrow carouselComponent-carousel-arrow-left"
                onClick={handlePrev}
                aria-label="Imagen anterior"
            >
                ‹
            </button>
            <button
                className="carouselComponent-carousel-arrow carouselComponent-carousel-arrow-right"
                onClick={handleNext}
                aria-label="Imagen siguiente"
            >
                ›
            </button>
        </div>
    );
};

export default CarouselComponent;