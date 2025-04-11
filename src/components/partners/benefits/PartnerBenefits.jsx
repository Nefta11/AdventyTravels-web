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

// Datos estáticos para las tarjetas de beneficios
const BENEFITS_DATA = [
    {
        id: 1,
        icon: <FaBookReader />,
        title: 'Aprende fácil y a tus tiempos',
        description: 'Te capacitamos desde cero para que te conviertas en un pro en reservaciones de nuestra tienda en línea.'
    },
    {
        id: 2,
        icon: <FaGift />,
        title: 'Vende lo mejor',
        description: 'Acceso a un usuario Partner en nuestra tienda en línea con increíbles precios en hoteles, actividades, traslados, etc. exclusivos sólo para ti.'
    },
    {
        id: 3,
        icon: <FaLock />,
        title: 'Libertad total',
        description: 'Trabaja vendiendo o compartiendo a tu ritmo y desde donde quieras. ¡Sólo necesitas un dispositivo móvil con acceso a internet!'
    },
    {
        id: 4,
        icon: <FaHandshake />,
        title: 'Gana en cada viaje',
        description: 'Cuanto más ideas de viajes vendes y compartes, más rewards y beneficios. ¡Así de fácil!'
    },
    {
        id: 5,
        icon: <FaHeadset />,
        title: 'Soporte y atención personalizada',
        description: 'Te damos apoyo constante para resolver dudas con tus capacitaciones y reservaciones.'
    },
    {
        id: 6,
        icon: <FaUserFriends />,
        title: 'Código Partner Corporativo',
        description: 'Compártelo con tu comunidad, amigos o conocidos y ofréceles un 15% de descuento en nuestra tienda en línea más un 5% acumulable en rewards, todo esto mientras tú también acumulas el 5% en rewards para ti.'
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