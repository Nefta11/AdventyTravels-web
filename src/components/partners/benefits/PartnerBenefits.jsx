import { useEffect, useState } from 'react';
import {
    FaBookReader,
    FaTags,
    FaGlobe,
    FaDollarSign,
    FaLifeRing,
    FaUsers
} from 'react-icons/fa';
import './PartnerBenefits.css';
const BENEFITS_DATA = [
    {
        "id": 1,
        "icon": <FaBookReader />,
        "title": "Aprende a tu ritmo",
        "description": "Formación desde lo básico para que domines las reservas en nuestra plataforma y te conviertas en un profesional."
    },
    {
        "id": 2,
        "icon": <FaTags />,
        "title": "Ofrece lo mejor",
        "description": "Accede a tarifas exclusivas en hoteles, actividades y más, diseñadas especialmente para ti."
    },
    {
        "id": 3,
        "icon": <FaGlobe />,
        "title": "Trabaja con libertad",
        "description": "Realiza tus actividades desde cualquier lugar con solo un dispositivo e internet. ¡Tú decides cómo trabajar!"
    },
    {
        "id": 4,
        "icon": <FaDollarSign />,
        "title": "Gana con cada reserva",
        "description": "Recibe recompensas y beneficios adicionales al vender o compartir experiencias de viaje con tus clientes."
    },
    {
        "id": 5,
        "icon": <FaLifeRing />,
        "title": "Asistencia personalizada",
        "description": "Soporte continuo para resolver tus dudas sobre formación, reservas y más."
    },
    {
        "id": 6,
        "icon": <FaUsers />,
        "title": "Código Partner exclusivo",
        "description": "Comparte descuentos y acumula recompensas para ti y tu comunidad, maximizando tus ganancias."
    }
];

const PartnerBenefits = () => {
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const benefitCards = document.querySelectorAll('.benefits-card');

            benefitCards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isInView = rect.top <= window.innerHeight * 0.8;

                setVisibleItems(prev => {
                    if (isInView && !prev.includes(index)) {
                        return [...prev, index];
                    }
                    return prev;
                });
            });
        };

        // Inicializar todas las tarjetas como visibles inicialmente
        const initVisibility = () => {
            const initialVisible = Array.from({ length: BENEFITS_DATA.length }, (_, i) => i);
            setVisibleItems(initialVisible);

            // También configurar el evento de desplazamiento para animaciones futuras
            window.addEventListener('scroll', handleScroll);
        };

        // Usar setTimeout para asegurar que los elementos DOM existan
        setTimeout(initVisibility, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="benefits-root benefits-partner-section">
            <div className="benefits-container">
                <h2 className="benefits-heading">
                    Beneficios <span>Adventy Partner</span>
                </h2>

                <div className="benefits-grid">
                    {BENEFITS_DATA.map((benefit, index) => (
                        <div
                            key={benefit.id}
                            className={`benefits-card ${visibleItems.includes(index) ? 'visible' : ''}`}
                        >
                            <div className="benefits-icon">
                                {benefit.icon}
                            </div>
                            <h3 className="benefits-card-title">{benefit.title}</h3>
                            <p className="benefits-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerBenefits;