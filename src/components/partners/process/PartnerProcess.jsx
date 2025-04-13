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
            text: 'Contáctanos para obtener toda la información que necesitas'
        },
        {
            id: 2,
            text: 'Verificamos tus datos de manera completa'
        },
        {
            id: 3,
            text: 'Accede a entrenamientos y a un canal de soporte exclusivo'
        },
        {
            id: 4,
            text: 'Disfruta de todos los beneficios como Adventy Partner'
        },
        {
            id: 5,
            text: 'Comparte las ventajas con tu red de contactos'
        },
        {
            id: 6,
            text: 'Empieza a generar ingresos como Adventy Partner'
        }
    ];

    const partnerTypes = [
        {
            id: 1,
            icon: <FaBriefcase />,
            title: 'Agencias de viajes ya consolidadas'
        },
        {
            id: 2,
            icon: <FaLightbulb />,
            title: 'Personas emprendedoras'
        },
        {
            id: 3,
            icon: <FaVideo />,
            title: 'Creadores de contenido digital'
        },
        {
            id: 4,
            icon: <FaUsers />,
            title: 'Cualquier persona interesada en ganar ingresos adicionales desde cualquier lugar'
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
                            ¡Conviértete en un <span className="partner-highlight-text">especialista en viajes</span> y empieza a <span className="partner-highlight-text">ganar dinero</span> con el respaldo de nuestra <span className="partner-highlight-text">plataforma única</span>!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerProcess;