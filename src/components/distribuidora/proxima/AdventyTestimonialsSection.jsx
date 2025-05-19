import { useState, useEffect } from 'react';
import './AdventyTestimonialsSection.css';
import { FaVideo } from 'react-icons/fa';

const AdventyTestimonialsSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, []);

    return (
        <div className={`testimonial-section ${isVisible ? 'testimonial-visible' : ''}`}>
            <div className="testimonial-container">
                <div className="testimonial-header">
                    <h2 className="testimonial-title">Ellas ya están cambiando su vida con Embajadoras ADVENTY</h2>
                    <div className="testimonial-subtitle-container">
                        <span className="testimonial-subtitle">Historias de éxito que te inspirarán</span>
                        <div className="testimonial-divider"></div>
                    </div>
                </div>

                <div className="testimonial-videos-container">
                    <div className="testimonial-coming-soon">
                        <div className="testimonial-coming-soon-icon">
                            <FaVideo />
                        </div>
                        <h3 className="testimonial-coming-soon-title">PRÓXIMAMENTE</h3>
                        <p className="testimonial-coming-soon-text">
                            Estamos preparando increíbles testimonios de nuestras distribuidoras.
                            ¡Muy pronto podrás conocer sus historias de éxito!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventyTestimonialsSection;