import { useState } from 'react';
import './RegistrationFAQ.css';

const RegistrationFAQ = () => {
    const [activeItem, setActiveItem] = useState(null);

    const faqItems = [
        {
            id: 1,
            question: '¿Qué son los Rewards y cómo puedo usarlos?',
            answer: 'Al realizar ventas desde tu usuario o al hacer uso de tu Código Partner Corporativo, acumulas el 5% del total de las ventas realizadas, los cuales podrás canjear cada mes por cualquier producto o servicio de nuestra tienda en línea o incluso solicitarlo en cash back. Esto adicional a tus beneficios Adventy Partner.'
        },
        {
            id: 2,
            question: '¿Necesito experiencia vendiendo viajes?',
            answer: 'No necesitas experiencia previa. Nosotros te proporcionamos toda la capacitación y herramientas necesarias para que comiences a generar ingresos inmediatamente.'
        },
        {
            id: 3,
            question: '¿Qué beneficios tengo al ser Adventy Partner?',
            answer: 'Como Adventy Partner disfrutarás de comisiones por ventas, capacitación exclusiva, material promocional personalizado, soporte técnico prioritario y acceso a ofertas especiales para ti y tus clientes.'
        },
        {
            id: 4,
            question: '¿Cuáles son los requisitos para ser un Adventy Partner?',
            answer: 'Solo necesitas completar el formulario de registro, proporcionar tu información básica y tener ganas de emprender en el mundo de los viajes. No hay inversión inicial requerida.'
        },
        {
            id: 5,
            question: '¿Qué tipo de soporte le da Adventy a sus Partners?',
            answer: 'Proporcionamos soporte técnico 24/7, capacitaciones periódicas, materiales promocionales, un gestor personal para resolver tus dudas, y una plataforma intuitiva para realizar reservas y seguimiento.'
        },
        {
            id: 6,
            question: '¿Cómo puedo ser Partner siendo una agencia de viajes?',
            answer: 'Las agencias de viajes tienen un programa especial con beneficios adicionales. Completa el formulario y nuestro equipo se pondrá en contacto contigo para brindarte todos los detalles del programa corporativo.'
        }
    ];

    const toggleItem = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return (
        <div className="registration-faq-container">
            <div className="registration-faq-content">
                <div className="registration-form-section">
                    <div className="registration-form-card">
                        <h2 className="registration-form-title">FORMULARIO DE REGISTRO</h2>
                        <form className="registration-form">
                            <input type="text" placeholder="Nombre" className="registration-input" />
                            <input type="email" placeholder="Email" className="registration-input" />
                            <input type="tel" placeholder="WhatsApp" className="registration-input" />
                            <button type="submit" className="registration-submit-btn">REGISTRAR AHORA</button>
                        </form>
                    </div>
                </div>

                <div className="faq-section">
                    <h2 className="faq-title">ALGUNAS DUDAS QUE QUIZÁ PUEDES TENER...</h2>
                    <div className="faq-accordion">
                        {faqItems.map((item, index) => (
                            <div key={item.id} className="faq-item">
                                <div
                                    className={`faq-question ${activeItem === index ? 'active' : ''}`}
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="faq-icon">{activeItem === index ? '−' : '+'}</span>
                                    {item.question}
                                </div>
                                <div className={`faq-answer ${activeItem === index ? 'active' : ''}`}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationFAQ;