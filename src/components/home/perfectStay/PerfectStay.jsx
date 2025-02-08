import { useState, useRef, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./PerfectStay.css";
import BlurText from "../../reactbitsComponents/BlurText";

const hotels = [
    {
        name: "Casa Malca - Lujo Frente al Mar",
        location: "Tulum, México",
        price: "MXN 45,200",
        image: "/src/assets/images/perfectStay/1.webp",
    },
    {
        name: "Gran Hotel Ciudad de México",
        location: "Ciudad de México, México",
        price: "MXN 12,500",
        image: "/src/assets/images/perfectStay/2.webp",
    },
    {
        name: "Hard Rock Hotel Cancún - Todo Incluido",
        location: "Cancún, México",
        price: "MXN 38,900",
        image: "/src/assets/images/perfectStay/3.webp",
    },
    {
        name: "Rosewood San Miguel de Allende",
        location: "San Miguel de Allende, México",
        price: "MXN 29,850",
        image: "/src/assets/images/perfectStay/4.webp",
    },
];


const PerfectStay = () => {
    const { t } = useTranslation();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));
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

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const toggleFavorite = (index) => {
        const updatedFavorites = [...favorites];
        updatedFavorites[index] = !updatedFavorites[index];
        setFavorites(updatedFavorites);
    };

    return (
        <div className="perfect-stay-container" ref={ref}>
            <BlurText
                text={t('perfectStay.title')}
                delay={100}
                animateBy='words'
                direction='top'
                className="perfect-stay-container-title"
            />
            <p>{t('perfectStay.subtitle')}</p>
            <div className={`hotel-grid ${inView ? 'in-view' : ''}`}>
                {hotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                        <button
                            className="wishlist-btn"
                            onClick={() => toggleFavorite(index)}
                        >
                            {favorites[index] ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
                        </button>
                        <div className="hotel-info">
                            <h3>{hotel.name}</h3>
                            <p className="hotel-location">{hotel.location}</p>
                            <p className="hotel-price"><strong>{hotel.price}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerfectStay;
