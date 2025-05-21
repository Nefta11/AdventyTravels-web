// AdventyPayButton.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlane } from 'react-icons/fa';
import { BsCreditCard2Front } from 'react-icons/bs';
import { MdOutlineArrowForward } from 'react-icons/md';
import './AdventyPayButton.css';

const AdventyPayButton = ({
    targetUrl = '/AdventyPay',
    showAfterMs = 1500
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showBadge, setShowBadge] = useState(true);

    // Controlar la aparición inicial del botón
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, showAfterMs);

        return () => clearTimeout(timer);
    }, [showAfterMs]);

    // Ocultar badge después de interacción
    const handleInteraction = () => {
        setShowBadge(false);
    };

    if (!isVisible) return null;

    return (
        <div className="adventy-pay-container">
            {/* Badge que dice "CONOCE ADVENTY PAY" */}
            {showBadge && (
                <div className="adventy-pay-badge">
                    CONOCE ADVENTY PAY
                    <span className="badge-arrow">▼</span>
                </div>
            )}

            {/* Botón principal */}
            <a
                href={targetUrl}
                className="adventy-pay-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
                onClick={handleInteraction}
                aria-label="Conoce Adventy Pay"
            >
                <div className="adventy-pay-icon-container">
                    <BsCreditCard2Front className="adventy-pay-icon" />
                    <FaPlane className="adventy-pay-lightning" />
                </div>
            </a>

            {/* Tooltip expandido al hacer hover */}
            {isHovered && (
                <div className="adventy-pay-tooltip">
                    <div className="tooltip-content">
                        <div className="tooltip-header">
                            <span className="tooltip-logo">
                                <BsCreditCard2Front />
                            </span>
                            <span className="tooltip-title">Adventy Pay</span>
                        </div>
                        <p className="tooltip-description">
                            Paga tus viajes de forma <span className="highlight">flexible</span>, <span className="highlight">segura</span> y <span className="highlight">sin cubrir el total</span> al momento.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
AdventyPayButton.propTypes = {
    targetUrl: PropTypes.string,
    showAfterMs: PropTypes.number
};


export default AdventyPayButton;