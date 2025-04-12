import React, { useState, useEffect } from 'react';
import './AdventyWomenCampaign.css';
import { FaGraduationCap, FaLaptop, FaGift, FaClock, FaUsers, FaArrowRight } from 'react-icons/fa';

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
        }, { threshold: 0.2 });

        document.querySelectorAll('.campaign-benefit-card').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
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

    const handleCtaHover = (e) => {
        const button = e.currentTarget;
        const x = e.pageX - button.offsetLeft;
        const y = e.pageY - button.offsetTop;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
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