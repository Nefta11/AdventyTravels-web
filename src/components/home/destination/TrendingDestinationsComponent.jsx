// TrendingDestinations.jsx
import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState } from 'react';
import { FaPlane, FaMapMarkerAlt } from 'react-icons/fa';
import "./TrendingDestinations.css";

const destinations = [
    { name: "Cancún", image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/destinations/cancun.webp" },
    { name: "Ciudad de Mexico", image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/destinations/cdmx.webp" },
    { name: "Playa del Carmen", image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/destinations/playaDelCarmen.webp" },
    { name: "San Miguel de Allende", image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/destinations/SanMiguel.webp" },
    { name: "Mérida", image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/destinations/merida.webp" },
    { name: "Tulum", image: "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/destinations/tulum.webp" },
];


const TrendingDestinations = () => {
    const { t } = useTranslation();
    const [inView, setInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Desconectar el observer después de la primera intersección
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleCardClick = () => {
        window.location.href = 'https://booking.adventytravels.com/';
    };

    return (
        <div className="trending-container" ref={ref}>
            <h2 className="trending-container-title">{t('trendingDestinations')}</h2>
            <p>{t('peopleSearching')}</p>
            <div className={`trending-grid ${inView ? 'in-view' : ''}`}>
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="destination-card"
                        onClick={handleCardClick}
                        tabIndex={0}
                        role="button"
                        aria-label={`Ver destino ${destination.name}`}
                    >
                        <div
                            className="card-background"
                            style={{ backgroundImage: `url(${destination.image})` }}
                        ></div>
                        <div className="card-overlay"></div>
                        <div className="destination-info">
                            <span className="destination-name">
                                <FaMapMarkerAlt className="location-icon" /> {destination.name}
                            </span>
                        </div>
                        <div className="card-explore">
                            <FaPlane className="explore-icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingDestinations;