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
        const phone = "5217716075321";
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
            {/* Decorative wave - mejorada */}
            <div className="xicotepec-footer-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#ffffff"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
                </svg>
            </div>

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

                {/* Bottom Bar - Simplificado y centrado */}
                <div className="xicotepec-footer-bottom">
                    <div className="xicotepec-footer-copyright">
                        <p>&copy; 2024 Adventy Travels. Todos los derechos reservados.</p>
                        <p className="xicotepec-footer-location">Xicotepec de Juárez, Puebla • Pueblo Mágico</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default XicotepecFooter;