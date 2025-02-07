import { useState, useRef, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./PerfectStay.css";

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
        image: "/src/assets/images/perfectStay/2.jpg",
    },
    {
        name: "Hard Rock Hotel Cancún - Todo Incluido",
        location: "Cancún, México",
        price: "MXN 38,900",
        image: "/src/assets/images/perfectStay/3.jpg",
    },
    {
        name: "Rosewood San Miguel de Allende",
        location: "San Miguel de Allende, México",
        price: "MXN 29,850",
        image: "/src/assets/images/perfectStay/4.jpg",
    },
];


const PerfectStay = () => {
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
            <h2>Looking for the Perfect Stay?</h2>
            <p>Hotels booked after similar searches</p>
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
                            <p className="hotel-price">From <strong>{hotel.price}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerfectStay;
