import {
    FaBriefcase,
    FaLightbulb,
    FaVideo,
    FaUsers
} from 'react-icons/fa';
import './PartnerProcess.css';

const PartnerProcess = () => {
    const processSteps = [
        {
            id: 1,
            text: 'Contáctanos para recibir toda la información necesaria'
        },
        {
            id: 2,
            text: 'Realizamos la verificación completa de tus datos'
        },
        {
            id: 3,
            text: 'Accede a capacitaciones y canal de apoyo exclusivo'
        },
        {
            id: 4,
            text: 'Recibe todos tus beneficios como Adventy Partner'
        },
        {
            id: 5,
            text: 'Comparte los beneficios con tu red de contactos'
        },
        {
            id: 6,
            text: 'Comienza a generar ingresos con Adventy Partner'
        }
    ];

    const partnerTypes = [
        {
            id: 1,
            icon: <FaBriefcase />,
            title: 'Agencias de viajes ya establecidas'
        },
        {
            id: 2,
            icon: <FaLightbulb />,
            title: 'Emprendedores'
        },
        {
            id: 3,
            icon: <FaVideo />,
            title: 'Creadores de contenido'
        },
        {
            id: 4,
            icon: <FaUsers />,
            title: 'Cualquier persona interesada en obtener ingresos extra, desde cualquier parte'
        }
    ];

    return (
        <div className="partner-container">
            <section className="partner-types-section">
                <h2 className="partner-section-title">¿Quién Puede Ser Adventy Partner?</h2>

                <div className="partner-types-grid">
                    {partnerTypes.map(type => (
                        <div key={type.id} className="partner-type-card">
                            <div className="partner-type-icon">{type.icon}</div>
                            <h3 className="partner-type-title">{type.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="partner-process-section">
                <h2 className="partner-section-title">¿Cómo Funciona Adventy Partner?</h2>

                <div className="partner-process-timeline">
                    <div className="partner-timeline-line"></div>
                    <div className="partner-steps-container">
                        {processSteps.map(step => (
                            <div
                                key={step.id}
                                className="partner-process-step"
                            >
                                <div className="partner-step-number">{step.id}</div>
                                <div className="partner-step-content">
                                    <p className="partner-step-text">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="partner-highlight-wrapper">
                    <div className="partner-highlight-container">
                        <p className="partner-highlight-tagline">
                            ¡Conviértete en un <span className="partner-highlight-text">experto en viajes</span> y comienza a <span className="partner-highlight-text">generar ingresos</span> con el respaldo de nuestra <span className="partner-highlight-text">plataforma exclusiva</span>!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerProcess;