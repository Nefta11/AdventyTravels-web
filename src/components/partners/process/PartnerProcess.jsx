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
            text: 'Recibe todos tus beneficios como UVAC Partner'
        },
        {
            id: 5,
            text: 'Comparte los beneficios con tu red de contactos'
        },
        {
            id: 6,
            text: 'Comienza a generar ingresos con UVAC Partner'
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
        <div className="partner-process-container">
            <section className="process-section">
                <h2 className="section-title">¿CÓMO FUNCIONA UVAC PARTNER?</h2>

                <div className="process-timeline">
                    <div className="timeline-line"></div>
                    <div className="steps-container">
                        {processSteps.map(step => (
                            <div
                                key={step.id}
                                className="process-step"
                            >
                                <div className="step-number">{step.id}</div>
                                <div className="step-content">
                                    <p className="step-text">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="process-tagline">
                    ¡Conviértete en un experto en viajes y comienza a generar ingresos con el respaldo de nuestra plataforma exclusiva!
                </p>
            </section>

            <section className="partner-types-section">
                <h2 className="section-title">¿QUIÉN PUEDE SER UVAC PARTNER?</h2>

                <div className="partner-types-grid">
                    {partnerTypes.map(type => (
                        <div key={type.id} className="partner-type-card">
                            <div className="type-icon">{type.icon}</div>
                            <h3 className="type-title">{type.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PartnerProcess;