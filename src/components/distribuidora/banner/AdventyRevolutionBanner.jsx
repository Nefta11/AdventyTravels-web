import { useState, useEffect } from 'react';
import './AdventyRevolutionBanner.css';

const AdventyRevolutionBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, []);

    return (
        <div className={`banner-container ${isVisible ? 'banner-visible' : ''}`}>
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <h2 className="banner-title">ÚNETE A LA REVOLUCIÓN ADVENTY</h2>
                <p className="banner-subtitle">Transforma tu vida, sé dueña de tu tiempo y de tus sueños.</p>
                <p className="banner-cta">¡Conviértete en Distribuidora ADVENTY hoy!</p>
                <button className="banner-button">QUIERO SER PARTE</button>
            </div>
        </div>
    );
};

export default AdventyRevolutionBanner;