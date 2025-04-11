import { useEffect, useState } from 'react';
import {
    FaBookReader,
    FaGift,
    FaLock,
    FaHandshake,
    FaHeadset,
    FaUserFriends
} from 'react-icons/fa';
import './PartnerBenefits.css';
const BENEFITS_DATA = [
    {
        "id": 1,
        "icon": <FaBookReader />,
        "title": "Aprende fácil y a tus tiempos",
        "description": "Capacitación desde cero para dominar las reservaciones en nuestra tienda en línea y convertirte en un experto."
    },
    {
        "id": 2,
        "icon": <FaGift />,
        "title": "Vende lo mejor",
        "description": "Acceso exclusivo a precios increíbles en hoteles, actividades y más, diseñados solo para ti."
    },
    {
        "id": 3,
        "icon": <FaLock />,
        "title": "Libertad total",
        "description": "Trabaja a tu ritmo desde cualquier lugar con solo un dispositivo e internet. ¡Tú decides cómo!"
    },
    {
        "id": 4,
        "icon": <FaHandshake />,
        "title": "Gana en cada viaje",
        "description": "Obtén más rewards y beneficios al vender o compartir ideas de viaje con tus clientes."
    },
    {
        "id": 5,
        "icon": <FaHeadset />,
        "title": "Soporte personalizado",
        "description": "Asistencia constante para resolver dudas sobre capacitaciones, reservaciones y más."
    },
    {
        "id": 6,
        "icon": <FaUserFriends />,
        "title": "Código Partner Corporativo",
        "description": "Comparte descuentos y acumula rewards para ti y tu comunidad, maximizando tus beneficios."
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
    }, []); // Quitar visibleItems de las dependencias para evitar bucle infinito

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