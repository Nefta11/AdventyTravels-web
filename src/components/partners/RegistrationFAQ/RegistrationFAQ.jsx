import { useState } from 'react';
import './RegistrationFAQ.css';

const RegistrationFAQ = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");

    const faqItems = [
        {
            id: 1,
            question: '¿Qué son los Rewards y cómo funcionan?',
            answer: 'Cada vez que generas ventas desde tu cuenta o utilizas tu Código Partner Corporativo, acumulas el 5% del total vendido. Estas recompensas pueden ser usadas mensualmente en nuestra tienda en línea o solicitadas como cashback. Además, disfrutarás de los beneficios exclusivos de Adventy Partner.'
        },
        {
            id: 2,
            question: '¿Es necesario tener experiencia previa en ventas de viajes?',
            answer: 'No, no necesitas experiencia previa. Nosotros te proporcionamos todas las herramientas y formación necesarias para que comiences a generar ingresos desde el primer día.'
        },
        {
            id: 3,
            question: '¿Qué beneficios obtengo al ser Adventy Partner?',
            answer: 'Como Adventy Partner, recibirás comisiones por ventas, acceso a formación especializada, material promocional personalizado, soporte técnico prioritario y ofertas exclusivas para ti y tus clientes.'
        },
        {
            id: 4,
            question: '¿Qué necesito para convertirme en Adventy Partner?',
            answer: 'Solo debes completar el formulario de registro, proporcionar tus datos básicos y tener ganas de emprender en el sector de viajes. No se requiere inversión inicial.'
        },
        {
            id: 5,
            question: '¿Qué tipo de soporte ofrece Adventy a sus Partners?',
            answer: 'Te brindamos soporte técnico las 24 horas, capacitaciones periódicas, materiales promocionales, un gestor personal para resolver tus dudas y una plataforma fácil de usar para gestionar reservas y seguimientos.'
        },
        {
            id: 6,
            question: '¿Cómo puede una agencia de viajes unirse como Partner?',
            answer: 'Las agencias de viajes tienen un programa especial con beneficios adicionales. Completa el formulario y nuestro equipo se pondrá en contacto contigo para explicarte todos los detalles del programa corporativo.'
        }
    ];

    const toggleItem = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = '5217716075321'; // Número de WhatsApp destino
        const text = `Hola, quiero registrarme como Adventy Partner.\nNombre: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="registration-faq-container">
            <div className="registration-faq-content">
                <div className="registration-form-section">
                    <div className="registration-form-card">
                        <h2 className="registration-form-title">Formulario De Registro</h2>
                        <form className="registration-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Nombre" className="registration-input" value={name} onChange={e => setName(e.target.value)} required />
                            <input type="email" placeholder="Email" className="registration-input" value={email} onChange={e => setEmail(e.target.value)} required />
                            <input type="tel" placeholder="WhatsApp" className="registration-input" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required />
                            <button type="submit" className="registration-submit-btn">Registrar Ahora</button>
                        </form>
                    </div>
                </div>

                <div className="faq-section">
                    <h2 className="faq-title">Algunas Dudas Que Quizá Puedes Tener...</h2>
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