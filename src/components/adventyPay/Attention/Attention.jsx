import { FaUserFriends } from 'react-icons/fa';
import { MdConnectWithoutContact, MdOutlineContactSupport } from 'react-icons/md';
import './Attention.css';

const Attention = () => {
    return (
        <section className="attention-section">
            <div className="attention-container">
                <div className="attention-header">
                    <h2 className="attention-title">
                        Atención sin presión
                    </h2>
                    <p className="attention-description">
                        Nuestro equipo de atención financiera se enfoca en ofrecerte una comunicación respetuosa, cercana y sin presiones. Te acompañamos para que cumplas tus pagos y viajes feliz y tranquilo.
                    </p>
                </div>

                <div className="attention-features">
                    <div className="attention-feature">
                        <div className="feature-icon-wrapper">
                            <MdConnectWithoutContact className="feature-icon" />
                        </div>
                        <span className="feature-text">Comunicación constante</span>
                    </div>

                    <div className="attention-feature">
                        <div className="feature-icon-wrapper">
                            <FaUserFriends className="feature-icon" />
                        </div>
                        <span className="feature-text">Equipo profesional</span>
                    </div>

                    <div className="attention-feature">
                        <div className="feature-icon-wrapper">
                            <MdOutlineContactSupport className="feature-icon" />
                        </div>
                        <span className="feature-text">Soporte personalizado</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Attention;