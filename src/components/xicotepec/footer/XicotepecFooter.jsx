// XicotepecFooter.jsx - Footer compacto para Xicotepec
import {
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaEnvelope,
    FaGlobe,
    FaHeart,
    FaCoffee,
    FaMountain,
    FaCamera,
    FaRoute
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './XicotepecFooter.css';

const XicotepecFooter = () => {
    const navigate = useNavigate();

    const handleWhatsAppClick = () => {
        const phone = "7647640000";
        const message = "Hola, me interesa conocer más sobre los destinos y servicios turísticos en Xicotepec de Juárez.";
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const xicotepecSections = [
        {
            icon: <FaMountain />,
            title: "Atractivos",
            description: "Sitios emblemáticos",
            action: () => navigate('/xicotepec#atractivos')
        },
        {
            icon: <FaCoffee />,
            title: "Gastronomía",
            description: "Sabores regionales",
            action: () => navigate('/xicotepec#restaurantes')
        },
        {
            icon: <FaRoute />,
            title: "Tours",
            description: "Experiencias únicas",
            action: () => navigate('/xicotepec#tours')
        },
        {
            icon: <FaCamera />,
            title: "Hospedaje",
            description: "Lugares para descansar",
            action: () => navigate('/xicotepec#hoteles')
        }
    ];

    return (
        <footer className="xicotepec-footer">
            {/* Decorative wave */}
            <div className="xicotepec-footer-wave"></div>

            <div className="xicotepec-footer-container">

                {/* Header Section */}
                <div className="xicotepec-footer-header">
                    <div className="xicotepec-footer-title">
                        <FaHeart className="xicotepec-footer-heart" />
                        <h2>Xicotepec de Juárez</h2>
                        <span className="xicotepec-footer-subtitle">Pueblo Mágico</span>
                    </div>
                    <p className="xicotepec-footer-description">
                        Donde la magia de los cerros, el aroma del café y la calidez de su gente
                        crean experiencias inolvidables en la Sierra Norte de Puebla.
                    </p>
                </div>

                {/* Main Content */}
                <div className="xicotepec-footer-content">

                    {/* Explorar Xicotepec */}
                    <div className="xicotepec-footer-section">
                        <h3 className="xicotepec-footer-section-title">
                            <FaMapMarkerAlt />
                            Explora Xicotepec
                        </h3>
                        <div className="xicotepec-footer-explore-grid">
                            {xicotepecSections.map((section, index) => (
                                <div
                                    key={index}
                                    className="xicotepec-footer-explore-item"
                                    onClick={section.action}
                                >
                                    <div className="xicotepec-footer-explore-icon">
                                        {section.icon}
                                    </div>
                                    <div className="xicotepec-footer-explore-content">
                                        <h4>{section.title}</h4>
                                        <p>{section.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contacto y Redes Sociales */}
                    <div className="xicotepec-footer-section">
                        <h3 className="xicotepec-footer-section-title">
                            <FaPhone />
                            Contacto
                        </h3>
                        <div className="xicotepec-footer-contact">
                            <div className="xicotepec-footer-contact-item">
                                <div className="xicotepec-footer-contact-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="xicotepec-footer-contact-info">
                                    <span>Av. 5 de Mayo Local 5PA</span>
                                    <span>Xicotepec de Juárez, Puebla</span>
                                </div>
                            </div>

                            <div className="xicotepec-footer-contact-item">
                                <div className="xicotepec-footer-contact-icon">
                                    <FaPhone />
                                </div>
                                <div className="xicotepec-footer-contact-info">
                                    <span>(+52) 776 607 5321</span>
                                </div>
                            </div>

                            <div className="xicotepec-footer-contact-item">
                                <div className="xicotepec-footer-contact-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="xicotepec-footer-contact-info">
                                    <span>info@adventytravels.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociales */}
                        <div className="xicotepec-footer-social">
                            <h4>Síguenos</h4>
                            <div className="xicotepec-footer-social-icons">
                                <a
                                    href="https://www.instagram.com/adventytravels/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="xicotepec-footer-social-icon instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.facebook.com/adventytravels"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="xicotepec-footer-social-icon facebook"
                                >
                                    <FaFacebook />
                                </a>
                                <div
                                    onClick={handleWhatsAppClick}
                                    className="xicotepec-footer-social-icon whatsapp"
                                >
                                    <FaWhatsapp />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Agencia Info */}
                    <div className="xicotepec-footer-section">
                        <h3 className="xicotepec-footer-section-title">
                            <FaGlobe />
                            Adventy Travels
                        </h3>
                        <div className="xicotepec-footer-agency">
                            <p>Tu agencia de confianza especializada en destinos mexicanos únicos y experiencias auténticas.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="xicotepec-footer-bottom">
                    <div className="xicotepec-footer-copyright">
                        <p>&copy; 2024 Adventy Travels. Todos los derechos reservados.</p>
                        <p className="xicotepec-footer-location">Xicotepec de Juárez, Puebla • Pueblo Mágico</p>
                    </div>
                    <div className="xicotepec-footer-dev">
                        <span>💻 Desarrollado con</span>
                        <FaHeart className="xicotepec-footer-dev-heart" />
                        <span>por Neftalí V.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default XicotepecFooter;