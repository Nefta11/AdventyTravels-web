import { useState, useEffect } from 'react';
import './AdventyWomenCampaign.css';
import { FaGraduationCap, FaLaptop, FaGift, FaClock, FaUsers } from 'react-icons/fa';

const AdventyWomenCampaign = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [screenSize, setScreenSize] = useState('large');

    useEffect(() => {
        // Animation on component mount
        setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('campaign-animate-in');
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.campaign-benefit-card').forEach(card => {
            observer.observe(card);
        });

        // Screen size detection for responsive layout
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setScreenSize('small');
            } else if (window.innerWidth <= 992) {
                setScreenSize('medium');
            } else {
                setScreenSize('large');
            }
        };

        // Initial check and event listener
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const benefits = [
        {
            icon: <FaGraduationCap />,
            title: "Capacitación completa y constante",
            description: "Aprende todo sobre turismo, ventas, manejo de clientes y plataformas digitales."
        },
        {
            icon: <FaLaptop />,
            title: "Herramientas y plataforma digital",
            description: "Accede a nuestra plataforma para vender viajes nacionales e internacionales, paquetes de temporada y productos de nuestra tienda en línea."
        },
        {
            icon: <FaGift />,
            title: "Kit de bienvenida",
            description: "Material promocional y herramientas para comenzar con fuerza."
        },
        {
            icon: <FaClock />,
            title: "Libertad y flexibilidad",
            description: "Maneja tu tiempo, trabaja desde donde quieras y construye tu propio camino."
        },
        {
            icon: <FaUsers />,
            title: "Comunidad de mujeres que inspiran",
            description: "Conéctate con otras distribuidoras, aprende y crece en una red que te impulsa."
        }
    ];

    // Función para obtener clase adicional para el grid basado en el número de beneficios
    const getGridClassForCentering = () => {
        const benefitsCount = benefits.length;

        if (screenSize === 'large') {
            // Para pantallas grandes (3 columnas)
            return benefitsCount % 3 === 1 ? 'center-last-one' :
                benefitsCount % 3 === 2 ? 'center-last-two' : '';
        } else if (screenSize === 'medium') {
            // Para pantallas medianas (2 columnas)
            return benefitsCount % 2 === 1 ? 'center-last-one' : '';
        }

        return '';
    };

    return (
        <div className={`campaign-container ${isVisible ? 'campaign-visible' : ''}`}>
            <div className="campaign-overlay"></div>
            <div className="campaign-background-decoration"></div>

            <div className="campaign-content">
                <div className="campaign-header">
                    <div className="campaign-logo-wrapper">
                        <div className="campaign-logo">A</div>
                    </div>
                    <h2 className="campaign-title">CAMPAÑA: MUJERES LIBRES CON ADVENTY</h2>
                    <p className="campaign-intro">
                        ¿Eres una mujer soñadora, valiente y con hambre de libertad?
                    </p>
                    <p className="campaign-description">
                        Ha llegado tu momento. En ADVENTY queremos ayudarte a transformar tu vida a través del turismo,
                        con una oportunidad real de crecimiento, desarrollo y libertad financiera.
                    </p>
                    <div className="campaign-divider"></div>
                </div>

                <h3 className="campaign-benefits-title">¿Qué obtienes como Distribuidora ADVENTY?</h3>

                <div className={`campaign-benefits-grid ${getGridClassForCentering()}`}>
                    {benefits.map((benefit, index) => (
                        <div
                            className="campaign-benefit-card"
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="campaign-benefit-icon">
                                {benefit.icon}
                            </div>
                            <h4 className="campaign-benefit-title">{benefit.title}</h4>
                            <p className="campaign-benefit-description">
                                {benefit.description}
                            </p>
                            <div className="campaign-benefit-indicator"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdventyWomenCampaign;