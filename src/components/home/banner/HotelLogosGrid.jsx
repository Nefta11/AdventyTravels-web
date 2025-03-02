import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./HotelLogosGrid.css";

const hotelLogos = [
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/marriot.webp", alt: "Marriott International" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/fietaAme.webp", alt: "Fiesta Americana" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/kristal.webp", alt: "Krystal Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/oasis.webp", alt: "Oasis Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/RIU_Hotels.webp", alt: "RIU Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/palaceResorts.webp", alt: "Palace Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/hilton.webp", alt: "Hilton Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/hotels/ihg.webp", alt: "IHG Hotels & Resorts" },
];

// Duplicamos el array para que el efecto sea continuo
const logosDuplicated = [...hotelLogos, ...hotelLogos];

const HotelLogosGrid = () => {
    const [isPaused, setIsPaused] = useState(false);
    const { t } = useTranslation();

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => setIsPaused(false);

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">{t('hotelLogosGrid.title')}</h2>
            <div 
                className={`carousel-track ${isPaused ? "paused" : ""}`} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {logosDuplicated.map((logo, index) => (
                    <div key={index} className="hotel-logo-item">
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
            <div className="separator-line"></div>
        </div>
    );
};

export default HotelLogosGrid;
