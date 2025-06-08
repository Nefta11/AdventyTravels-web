// HotelDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import {
    FaStar,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    FaGlobe,
    FaArrowLeft,
    FaClock,
    FaBed,
    FaCreditCard,
    FaExclamationTriangle,
    FaInstagram,
    FaFacebook,
    FaCheckCircle,
    FaInfoCircle
} from 'react-icons/fa';
import { getHotelBySlug } from '../../components/xicotepec/hotels/hotelsData';
import './HotelDetail.css';

const HotelDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const hotel = getHotelBySlug(slug);

    if (!hotel) {
        return (
            <div className="hotel-detail-error">
                <h2>Hotel no encontrado</h2>
                <button onClick={() => navigate('/hotels')} className="hotel-detail-back-btn">
                    Volver a hoteles
                </button>
            </div>
        );
    }

    const renderStars = (stars) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`hotel-detail-star ${index < stars ? 'filled' : ''}`}
            />
        ));
    };

    const handleWhatsAppClick = () => {
        if (hotel.whatsapp) {
            window.open(`https://wa.me/${hotel.whatsapp.replace(/\D/g, '')}`, '_blank');
        }
    };

    // Función para parsear redes sociales
    const parseSocialNetworks = () => {
        const networks = [];

        if (hotel.instagram) {
            networks.push({
                name: 'Instagram',
                handle: hotel.instagram,
                url: `https://instagram.com/${hotel.instagram.replace('@', '')}`,
                icon: FaInstagram,
                color: '#E4405F'
            });
        }

        if (hotel.redes_sociales) {
            // Parsear el string "Facebook: hotelbugambilias. Instagram: hotelbugambilias"
            const socialText = hotel.redes_sociales;

            if (socialText.includes('Facebook:')) {
                const facebookMatch = socialText.match(/Facebook:\s*([^.]+)/);
                if (facebookMatch) {
                    networks.push({
                        name: 'Facebook',
                        handle: facebookMatch[1].trim(),
                        url: `https://facebook.com/${facebookMatch[1].trim()}`,
                        icon: FaFacebook,
                        color: '#1877F2'
                    });
                }
            }
        }

        return networks;
    };

    const socialNetworks = parseSocialNetworks();

    return (
        <div className="hotel-detail-wrapper">
            {/* Botón de regreso */}
            <button
                onClick={() => navigate(-1)}
                className="hotel-detail-back-button"
            >
                <FaArrowLeft /> Regresar
            </button>

            {/* Hero Section */}
            <section className="hotel-detail-hero">
                <div
                    className="hotel-detail-hero-image"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                >
                    <div className="hotel-detail-hero-overlay">
                        <div className="hotel-detail-hero-content">
                            <div className="hero-top-info">
                                <div className="hero-category">{hotel.category}</div>
                                <div className="hero-price">{hotel.price}</div>
                            </div>
                            <h1 className="hotel-detail-title">{hotel.name}</h1>
                            <div className="hero-stars-location">
                                <div className="hero-stars">
                                    {renderStars(hotel.stars)}
                                    {hotel.rating && (
                                        <span className="hero-rating">({hotel.rating}/10)</span>
                                    )}
                                </div>
                                <div className="hero-location">
                                    <FaMapMarkerAlt />
                                    <span>{hotel.location}</span>
                                </div>
                            </div>
                            <p className="hotel-detail-subtitle">{hotel.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenido principal */}
            <div className="hotel-detail-container">
                <div className="hotel-detail-content">
                    {/* Columna izquierda - Información */}
                    <div className="hotel-detail-left">
                        {/* Descripción */}
                        <section className="hotel-detail-section">
                            <h3><FaInfoCircle /> Descripción</h3>
                            <p>{hotel.fullDescription}</p>
                        </section>

                        {/* Dirección */}
                        <section className="hotel-detail-section">
                            <h3><FaMapMarkerAlt /> Dirección</h3>
                            <p>{hotel.location}</p>
                        </section>

                        {/* Servicios */}
                        {hotel.amenities && hotel.amenities.length > 0 && (
                            <section className="hotel-detail-section">
                                <h3><FaCheckCircle /> Servicios</h3>
                                <div className="hotel-detail-services-grid">
                                    {hotel.amenities.map((amenity, index) => (
                                        <div key={index} className="service-item">
                                            <amenity.icon />
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Habitaciones */}
                        <section className="hotel-detail-section">
                            <h3><FaBed /> Habitaciones</h3>
                            <div className="room-info">
                                <p><strong>{hotel.habitaciones}</strong> habitaciones: {hotel.tipos_habitacion?.join(', ')}</p>
                                <p><strong>Capacidad máxima:</strong> {hotel.capacidad_maxima} personas</p>
                            </div>
                        </section>

                        {/* Información de reserva */}
                        <section className="hotel-detail-section">
                            <h3><FaClock /> Horarios</h3>
                            <div className="schedule-info">
                                <div className="schedule-item">
                                    <strong>Check-in:</strong> {hotel.checkIn || 'Consultar'}
                                </div>
                                <div className="schedule-item">
                                    <strong>Check-out:</strong> {hotel.checkOut || 'Consultar'}
                                </div>
                            </div>
                        </section>

                        {/* Restricciones */}
                        {hotel.restricciones && (
                            <section className="hotel-detail-section hotel-detail-restrictions">
                                <h3><FaExclamationTriangle /> Políticas</h3>
                                <p>{hotel.restricciones}</p>
                            </section>
                        )}

                        {/* Experiencias turísticas */}
                        {hotel.experiencias_turisticas && hotel.experiencias_turisticas !== "No" && hotel.experiencias_turisticas !== "No directamente" && (
                            <section className="hotel-detail-section">
                                <h3><FaCheckCircle /> Experiencias turísticas</h3>
                                <p>{hotel.experiencias_turisticas}</p>
                            </section>
                        )}
                    </div>

                    {/* Columna derecha - Métodos de pago, Imagen, contacto */}
                    <div className="hotel-detail-right">
                        {/* Métodos de pago */}
                        {hotel.metodos_pago && (
                            <div className="hotel-detail-payment-card">
                                <h4><FaCreditCard /> Métodos de pago</h4>
                                <div className="payment-methods">
                                    {hotel.metodos_pago.map((method, index) => (
                                        <span key={index} className="payment-tag">{method}</span>
                                    ))}
                                </div>
                                {hotel.anticipo_requerido && (
                                    <p className="payment-note">
                                        <strong>Anticipo requerido:</strong> {hotel.anticipo_requerido}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Galería de imagen */}
                        <div className="hotel-detail-gallery">
                            <div
                                className="gallery-main-image"
                                style={{ backgroundImage: `url(${hotel.image})` }}
                            >
                                <div className="gallery-overlay">
                                    <div className="gallery-badge">
                                        <span className="gallery-stars">
                                            {renderStars(hotel.stars)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Información de contacto */}
                        <div className="hotel-detail-contact-card">
                            <h4>Contacto</h4>
                            <div className="contact-methods">
                                {hotel.contact && (
                                    <a href={`tel:${hotel.contact}`} className="contact-method">
                                        <FaPhone />
                                        <span>{hotel.contact}</span>
                                    </a>
                                )}

                                {hotel.whatsapp && (
                                    <button onClick={handleWhatsAppClick} className="contact-method whatsapp">
                                        <FaWhatsapp />
                                        <span>WhatsApp</span>
                                    </button>
                                )}

                                {hotel.email && (
                                    <a href={`mailto:${hotel.email}`} className="contact-method">
                                        <FaEnvelope />
                                        <span>Email</span>
                                    </a>
                                )}

                                {hotel.website && (
                                    <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="contact-method">
                                        <FaGlobe />
                                        <span>Sitio web</span>
                                    </a>
                                )}
                            </div>

                            {/* Redes sociales mejoradas */}
                            {socialNetworks.length > 0 && (
                                <div className="social-networks">
                                    <h5>Redes Sociales</h5>
                                    <div className="social-list">
                                        {socialNetworks.map((network, index) => (
                                            <a
                                                key={index}
                                                href={network.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-item"
                                                style={{ '--social-color': network.color }}
                                            >
                                                <network.icon className="social-icon" />
                                                <span className="social-text">
                                                    <strong>{network.name}:</strong> {network.handle}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;