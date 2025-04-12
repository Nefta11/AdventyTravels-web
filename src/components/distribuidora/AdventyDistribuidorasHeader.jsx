import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdventyDistribuidorasHeader.css';

const CAROUSEL_IMAGES = [
    'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1599231091889-c1fd76b87226?auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1650113794972-56031832c0db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=60'
];

// Logo URL
const LOGO_URL = "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/LOGOTIPO_OFICIAL.webp";

const AdventyDistribuidorasHeader = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    // Handle carousel rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Navigation handlers
    const handleBeDistributor = () => {
        navigate('/distributor-signup');
    };

    const handleVerifyDistributor = () => {
        navigate('/verify-distributor');
    };

    return (
        <div className="adventy-header-container">
            <div className="adventy-header-overlay"></div>

            <div className="adventy-carousel">
                {CAROUSEL_IMAGES.map((image, index) => (
                    <div
                        key={index}
                        className={`adventy-carousel-slide ${index === activeIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
            </div>

            <div className="adventy-content">
                <img src={LOGO_URL} alt="Adventy Logo" className="adventy-logo" />
                <h1 className="adventy-title">Convierte tu pasión por viajar en tu nuevo ingreso</h1>
                <p className="adventy-subtitle">
                    Sé parte de ADVENTY DISTRIBUIDORAS. Únete a nuestro programa y accede a
                    capacitación, herramientas digitales y la oportunidad de emprender en el sector turístico
                </p>

                <div className="adventy-buttons">
                    <button
                        className="adventy-button adventy-button-primary"
                        onClick={handleBeDistributor}
                    >
                        QUIERO SER DISTRIBUIDORA
                    </button>
                    <button
                        className="adventy-button adventy-button-secondary"
                        onClick={handleVerifyDistributor}
                    >
                        VERIFICAR DISTRIBUIDORA
                    </button>
                </div>
            </div>

            <div className="adventy-curved-bottom"></div>
        </div>
    );
};

export default AdventyDistribuidorasHeader;