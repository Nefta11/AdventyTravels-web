import { useState, useEffect } from 'react';
import './AdventyWomenCampaign.css';
import { FaGraduationCap, FaLaptop, FaGift, FaClock, FaUsers, FaChartLine } from 'react-icons/fa';

const AdventyWomenCampaign = () => {
    const [isVisible, setIsVisible] = useState(false);

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
        }, { threshold: 0.1 }); // Reduced threshold for earlier animation trigger

        document.querySelectorAll('.campaign-benefit-card').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const benefits = [
        {
            icon: <FaGraduationCap />,
            title: "Capacitación completa",
            description: "Aprende todo sobre turismo, ventas y manejo de plataformas digitales."
        },
        {
            icon: <FaLaptop />,
            title: "Herramientas digitales",
            description: "Accede a nuestra plataforma para vender viajes y productos exclusivos."
        },
        {
            icon: <FaGift />,
            title: "Kit de bienvenida",
            description: "Material promocional para comenzar con fuerza."
        },
        {
            icon: <FaClock />,
            title: "Libertad y flexibilidad",
            description: "Maneja tu tiempo y trabaja desde donde quieras."
        },
        {
            icon: <FaUsers />,
            title: "Comunidad de apoyo",
            description: "Conéctate con otras distribuidoras y crece en red."
        },
        {
            icon: <FaChartLine />,
            title: "Crecimiento financiero",
            description: "Desarrolla un negocio con ingresos crecientes."
        }
    ];

    return (
        <div className={`campaign-container ${isVisible ? 'campaign-visible' : ''}`}>
            <div className="campaign-overlay"></div>

            <div className="campaign-content">
                <div className="campaign-header">
                    <div className="campaign-logo-wrapper">
                        <div className="campaign-logo">A</div>
                    </div>
                    <h2 className="campaign-title">MUJERES LIBRES CON ADVENTY</h2>
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

                <div className="campaign-benefits-grid">
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