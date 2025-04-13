import { useState, useEffect } from 'react';
import './AdventyDistributorSection.css';
import { FaRocket, FaBookOpen, FaRegSmile, FaMoneyBillWave } from 'react-icons/fa';

const AdventyDistributorSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('neft-animate-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.neft-animated-element').forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Requisitos con sus respectivos iconos
    const requirements = [
        {
            icon: <FaBookOpen />,
            text: "Ganas de aprender"
        },
        {
            icon: <FaRegSmile />,
            text: "Mucha actitud"
        },
        {
            icon: <FaMoneyBillWave />,
            text: "Ambición por lograr tu independencia financiera"
        }
    ];

    return (
        <div className={`neft-distributor-section ${isVisible ? 'neft-visible' : ''}`}>
            <div className="neft-distributor-container">
                <div className="neft-distributor-content">
                    <div className="neft-distributor-text-content neft-animated-element">
                        <h2 className="neft-distributor-title">¿Qué es ser una Distribuidora ADVENTY?</h2>

                        <p className="neft-distributor-description">
                            Es formar parte de una red de mujeres emprendedoras que generan ingresos vendiendo viajes,
                            experiencias y productos turísticos desde cualquier parte de México, con el respaldo de una
                            agencia legalmente establecida y en constante crecimiento.
                        </p>

                        <div className="neft-requirements-container">
                            <h3 className="neft-requirements-title">
                                <span className="neft-highlight-text">Lo único que necesitas:</span>
                            </h3>

                            <ul className="neft-requirements-list">
                                {requirements.map((requirement, index) => (
                                    <li
                                        className="neft-requirement-item neft-animated-element"
                                        key={index}
                                        style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                                    >
                                        <div className="neft-requirement-icon">
                                            {requirement.icon}
                                        </div>
                                        <span className="neft-requirement-text">{requirement.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="neft-join-button-container neft-animated-element">
                                <button className="neft-join-button">
                                    <FaRocket className="neft-button-icon" />
                                    <span>¡No necesitas experiencia previa. Nosotros te enseñamos todo.</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="neft-distributor-image-container neft-animated-element">
                        <div className="neft-main-image">
                            <div className="neft-image-overlay-filter"></div>
                            <img
                                src="https://images.unsplash.com/photo-1607021836603-4c7f826a7a88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Mujer emprendedora con laptop"
                                className="neft-image-primary"
                            />
                        </div>

                        <div className="neft-image-secondary-container">
                            <div className="neft-image-overlay-filter"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581404917879-53e19259fdda?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Mujer sonriente emprendedora"
                                className="neft-image-secondary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventyDistributorSection;