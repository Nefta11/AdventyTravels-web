import { FaUserFriends } from 'react-icons/fa';
import { MdConnectWithoutContact, MdOutlineContactSupport } from 'react-icons/md';
import './Attention.css';

const Attention = () => {
    return (
        <section className="attention-section">
            <div className="attention-content">
                <div className="attention-image">
                    <img src="/api/placeholder/450/300" alt="Equipo de atención al cliente" />
                </div>
                <div className="attention-text">
                    <h2>Atención sin presión</h2>
                    <p>
                        Nuestro equipo de atención financiera se enfoca en ofrecerte una comunicación respetuosa, cercana y sin presiones. Te acompañamos para que cumplas tus pagos y viajes feliz y tranquilo.
                    </p>
                    <div className="attention-features">
                        <div className="attention-feature">
                            <MdConnectWithoutContact className="feature-icon" />
                            <span>Comunicación constante</span>
                        </div>
                        <div className="attention-feature">
                            <FaUserFriends className="feature-icon" />
                            <span>Equipo profesional</span>
                        </div>
                        <div className="attention-feature">
                            <MdOutlineContactSupport className="feature-icon" />
                            <span>Soporte personalizado</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Attention;