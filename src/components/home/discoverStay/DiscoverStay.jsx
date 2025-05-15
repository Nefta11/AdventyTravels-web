// DiscoverStay.jsx
import './DiscoverStay.css';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaHotel, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

const DiscoverStay = () => {
    const { t } = useTranslation();
    const [inView, setInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const cities = [
        { name: 'Ciudad de México', country: 'México', image: 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/cdmxH.webp' },
        { name: 'Playa del Carmen', country: 'México', image: 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/playaDelcarmenH.webp' },
        { name: 'San Miguel de Allende', country: 'México', image: 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/sanMiguelH.webp' },
        { name: "Cancun", country: "México", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/cancunH.webp" },
    ];

    const handleCardClick = () => {
        window.location.href = 'https://booking.adventytravels.com/';
    };

    return (
        <div className="discover-stay-container" ref={ref}>
            <h2 className='discover-stay-title'>
                <FaHotel className="title-icon" />
                {t('discoverStay.title')}
            </h2>
            <div className={`city-grid ${inView ? 'in-view' : ''}`}>
                {cities.map((city, index) => (
                    <div
                        key={index}
                        className="city-card"
                        onClick={handleCardClick}
                        tabIndex={0}
                        role="button"
                        aria-label={`Ver alojamientos en ${city.name}, ${city.country}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="city-image-container">
                            <img src={city.image} alt={city.name} className="city-image" />
                            <div className="image-overlay"></div>
                            <div className="explore-button">
                                <FaExternalLinkAlt />
                            </div>
                        </div>
                        <div className="city-info">
                            <h3>{city.name}</h3>
                            <p className="city-country">
                                <FaMapMarkerAlt className="location-icon" />
                                {city.country}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverStay;