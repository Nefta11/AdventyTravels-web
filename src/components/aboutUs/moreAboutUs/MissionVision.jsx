import { useEffect, useState, useRef } from "react";
import "./MissionVision.css";
import { useTranslation } from 'react-i18next';
import { FaQuoteLeft, FaQuoteRight, FaCompass, FaEye } from 'react-icons/fa';

const MissionVision = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Imágenes para el carrusel
    const images = [
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        // Cambiar imagen automáticamente cada 5 segundos
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            clearInterval(intervalId);
            observer.disconnect();
        };
    }, [images.length]);

    return (
        <section className="mv-mission-vision" ref={sectionRef}>
            <div className={`mv-mission-vision-container ${isVisible ? 'mv-visible' : ''}`}>
                <div className="mv-image-container">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`mv-mission-vision-image ${index === currentImage ? 'mv-active' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                    <div className="mv-image-indicators">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`mv-indicator ${index === currentImage ? 'mv-active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                                aria-label={`Ver imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="mv-mission-vision-text">
                    <div className="mv-section-content mv-mission-section">
                        <div className="mv-section-header">
                            <FaCompass className="mv-icon" />
                            <h2 className="mv-mission-title">{t('missionVision.missionTitle')}</h2>
                        </div>
                        <div className="mv-quote-container">
                            <FaQuoteLeft className="mv-quote-icon mv-quote-left" />
                            <p>{t('missionVision.missionText')}</p>
                            <FaQuoteRight className="mv-quote-icon mv-quote-right" />
                        </div>
                    </div>

                    <div className="mv-divider"></div>

                    <div className="mv-section-content mv-vision-section">
                        <div className="mv-section-header">
                            <FaEye className="mv-icon" />
                            <h2 className="mv-vision-title">{t('missionVision.visionTitle')}</h2>
                        </div>
                        <div className="mv-quote-container">
                            <FaQuoteLeft className="mv-quote-icon mv-quote-left" />
                            <p>{t('missionVision.visionText')}</p>
                            <FaQuoteRight className="mv-quote-icon mv-quote-right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;