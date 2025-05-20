// WhatsAppButton.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './WhatsAppIcon.css';

const WhatsAppButton = ({
    phoneNumber = '5217716075321',
    message = 'Hola, me gustaría obtener más información.',
    showAfterMs = 2000
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Control initial appearance with slight delay for better UX
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, showAfterMs);

        return () => clearTimeout(timer);
    }, [showAfterMs]);

    // Prepare WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Handle expanding the button to show quick actions
    const handleExpandToggle = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
        setTooltipVisible(false);
    };

    // Handle direct click on WhatsApp button (when expanded is false)
    const handleDirectClick = () => {
        if (!expanded) {
            // Track analytics event if needed
            console.log('WhatsApp button clicked');
        }
    };

    if (!isVisible) return null;

    return (
        <div className={`whatsapp-container ${expanded ? 'expanded' : ''} ${isMobile ? 'mobile' : ''}`}>
            {/* Expanded view with message preview */}
            {expanded && (
                <div className="whatsapp-expanded-container">
                    <div className="whatsapp-header">
                        <span className="whatsapp-title">Enviar mensaje</span>
                        <button
                            className="whatsapp-close-btn"
                            onClick={handleExpandToggle}
                            aria-label="Cerrar panel de WhatsApp"
                        >
                            <IoClose />
                        </button>
                    </div>

                    <div className="whatsapp-message-preview">
                        <div className="whatsapp-avatar">
                            <FaWhatsapp />
                        </div>
                        <div className="whatsapp-message-content">
                            <div className="whatsapp-preset-message">
                                {message}
                            </div>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-send-button"
                                aria-label="Enviar mensaje por WhatsApp"
                                onClick={handleDirectClick}
                            >
                                Enviar mensaje <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Main floating button */}
            <button
                className={`whatsapp-floating-button ${expanded ? 'active' : ''}`}
                aria-label="Contactar por WhatsApp"
                onClick={handleExpandToggle}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
                onFocus={() => setTooltipVisible(true)}
                onBlur={() => setTooltipVisible(false)}
            >
                <div className="whatsapp-button-inner">
                    {expanded ? <IoClose className="whatsapp-icon" /> : <FaWhatsapp className="whatsapp-icon" />}

                    <div className="whatsapp-pulse"></div>
                </div>

                {/* Tooltip that appears on hover when not expanded */}
                {tooltipVisible && !expanded && (
                    <div className="whatsapp-tooltip">
                        ¿Necesitas ayuda? ¡Contáctanos por WhatsApp!
                    </div>
                )}
            </button>
        </div>
    );
};
WhatsAppButton.propTypes = {
    phoneNumber: PropTypes.string,
    message: PropTypes.string,
    showAfterMs: PropTypes.number,
};

export default WhatsAppButton;