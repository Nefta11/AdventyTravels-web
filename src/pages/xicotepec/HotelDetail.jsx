// HotelDetail.jsx - Actualizado sin duplicación de datos
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    FaArrowLeft,
    FaStar,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    FaGlobe,
    FaInstagram,
    FaClock,
    FaUsers,
    FaConciergeBell,
    FaWifi,
    FaBed,
    FaCreditCard,
    FaExclamationTriangle,
    FaHeart
} from 'react-icons/fa';
import './HotelDetail.css';
import { getHotelBySlug } from '../../components/xicotepec/hotels/hotelsData';

const HotelDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ✅ Usamos la función centralizada para obtener el hotel
        const foundHotel = getHotelBySlug(slug);
        setHotel(foundHotel);
        setLoading(false);
    }, [slug]);

    const renderStars = (stars) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`hotel-detail-star ${index < stars ? 'filled' : ''}`}
            />
        ));
    };

    if (loading) {
        return (
            <div className="hotel-detail-loading">
                <div className="hotel-detail-spinner"></div>
                <p>Cargando información del hotel...</p>
            </div>
        );
    }

    if (!hotel) {
        return (
            <div className="hotel-detail-not-found">
                <h2>Hotel no encontrado</h2>
                <p>Lo sentimos, no pudimos encontrar el hotel que buscas.</p>
                <button onClick={() => navigate('/hotels')} className="hotel-detail-back-btn">
                    Volver a Hoteles
                </button>
            </div>
        );
    }

    return (
        <div className="hotel-detail-page">
            {/* Header con imagen de fondo */}
            <div className="hotel-detail-header" style={{ backgroundImage: `url(${hotel.image})` }}>
                <div className="hotel-detail-header-overlay">
                    <button onClick={() => navigate(-1)} className="hotel-detail-back-button">
                        <FaArrowLeft /> Volver
                    </button>

                    <div className="hotel-detail-header-content">
                        <span className="hotel-detail-category">{hotel.category}</span>
                        <h1 className="hotel-detail-title">{hotel.name}</h1>
                        <div className="hotel-detail-meta">
                            <div className="hotel-detail-stars">
                                {renderStars(hotel.stars)}
                                <span className="hotel-detail-rating">{hotel.rating}/10</span>
                            </div>
                            <div className="hotel-detail-location">
                                <FaMapMarkerAlt /> {hotel.location}
                            </div>
                        </div>
                        <div className="hotel-detail-price">{hotel.price}</div>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="hotel-detail-container">
                <div className="hotel-detail-content">
                    {/* Descripción principal */}
                    <section className="hotel-detail-section">
                        <h2 className="hotel-detail-section-title">
                            <FaConciergeBell /> Acerca del Hotel
                        </h2>
                        <p className="hotel-detail-description">{hotel.fullDescription}</p>
                    </section>

                    {/* Información básica */}
                    <section className="hotel-detail-section">
                        <h2 className="hotel-detail-section-title">
                            <FaBed /> Información Básica
                        </h2>
                        <div className="hotel-detail-info-grid">
                            <div className="hotel-detail-info-item">
                                <strong>Habitaciones:</strong> {hotel.habitaciones}
                            </div>
                            <div className="hotel-detail-info-item">
                                <strong>Capacidad Máxima:</strong> {hotel.capacidad_maxima} personas
                            </div>
                            <div className="hotel-detail-info-item">
                                <strong>Check-in:</strong> {hotel.checkIn}
                            </div>
                            <div className="hotel-detail-info-item">
                                <strong>Check-out:</strong> {hotel.checkOut}
                            </div>
                        </div>
                    </section>

                    {/* Amenidades */}
                    <section className="hotel-detail-section">
                        <h2 className="hotel-detail-section-title">
                            <FaWifi /> Amenidades
                        </h2>
                        <div className="hotel-detail-amenities">
                            {hotel.amenities.map((amenity, idx) => (
                                <div key={idx} className="hotel-detail-amenity">
                                    <amenity.icon className="hotel-detail-amenity-icon" />
                                    <span>{amenity.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Habitaciones */}
                    <section className="hotel-detail-section">
                        <h2 className="hotel-detail-section-title">
                            <FaUsers /> Habitaciones y Comodidades
                        </h2>
                        <div className="hotel-detail-features">
                            {hotel.roomFeatures.map((feature, idx) => (
                                <div key={idx} className="hotel-detail-feature">
                                    {feature}
                                </div>
                            ))}
                        </div>

                        {hotel.tipos_habitacion && (
                            <div className="hotel-detail-room-types">
                                <h3>Tipos de Habitación:</h3>
                                <div className="hotel-detail-room-type-list">
                                    {hotel.tipos_habitacion.map((tipo, idx) => (
                                        <span key={idx} className="hotel-detail-room-type">{tipo}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Servicios */}
                    <section className="hotel-detail-section">
                        <h2 className="hotel-detail-section-title">
                            <FaConciergeBell /> Servicios
                        </h2>
                        <div className="hotel-detail-services">
                            {hotel.services.map((service, idx) => (
                                <div key={idx} className="hotel-detail-service">
                                    {service}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Métodos de Pago */}
                    {hotel.metodos_pago && (
                        <section className="hotel-detail-section">
                            <h2 className="hotel-detail-section-title">
                                <FaCreditCard /> Métodos de Pago
                            </h2>
                            <div className="hotel-detail-payment-methods">
                                {hotel.metodos_pago.map((metodo, idx) => (
                                    <span key={idx} className="hotel-detail-payment-method">{metodo}</span>
                                ))}
                            </div>
                            {hotel.anticipo_requerido && (
                                <p className="hotel-detail-advance-note">
                                    <strong>Anticipo requerido:</strong> {hotel.anticipo_requerido}
                                </p>
                            )}
                        </section>
                    )}

                    {/* Característica Única */}
                    {hotel.caracteristica_unica && (
                        <section className="hotel-detail-section">
                            <h2 className="hotel-detail-section-title">
                                <FaHeart /> Lo que nos hace únicos
                            </h2>
                            <p className="hotel-detail-experiences">{hotel.caracteristica_unica}</p>
                        </section>
                    )}

                    {/* Experiencias Turísticas */}
                    {hotel.experiencias_turisticas && hotel.experiencias_turisticas !== "No" && hotel.experiencias_turisticas !== "No directamente" && (
                        <section className="hotel-detail-section">
                            <h2 className="hotel-detail-section-title">
                                <FaHeart /> Experiencias Turísticas
                            </h2>
                            <p className="hotel-detail-experiences">{hotel.experiencias_turisticas}</p>
                        </section>
                    )}

                    {/* Restricciones */}
                    {hotel.restricciones && (
                        <section className="hotel-detail-section">
                            <h2 className="hotel-detail-section-title">
                                <FaExclamationTriangle /> Restricciones
                            </h2>
                            <p className="hotel-detail-restrictions">{hotel.restricciones}</p>
                        </section>
                    )}
                </div>

                {/* Sidebar con información de contacto */}
                <div className="hotel-detail-sidebar">
                    <div className="hotel-detail-contact-card">
                        <h3>Información de Contacto</h3>

                        {hotel.contact && (
                            <div className="hotel-detail-contact-item">
                                <FaPhone />
                                <span>{hotel.contact}</span>
                            </div>
                        )}

                        {hotel.whatsapp && (
                            <a href={`https://wa.me/${hotel.whatsapp.replace(/\D/g, '')}`}
                                className="hotel-detail-contact-item hotel-detail-whatsapp"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </a>
                        )}

                        {hotel.email && (
                            <a href={`mailto:${hotel.email}`} className="hotel-detail-contact-item">
                                <FaEnvelope />
                                <span>{hotel.email}</span>
                            </a>
                        )}

                        {hotel.website && (
                            <a href={`https://${hotel.website}`}
                                className="hotel-detail-contact-item"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGlobe />
                                <span>Sitio Web</span>
                            </a>
                        )}

                        {hotel.instagram && (
                            <a href={`https://instagram.com/${hotel.instagram.replace('@', '')}`}
                                className="hotel-detail-contact-item"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaInstagram />
                                <span>Instagram</span>
                            </a>
                        )}

                        {hotel.redes_sociales && (
                            <div className="hotel-detail-contact-item">
                                <FaInstagram />
                                <span>{hotel.redes_sociales}</span>
                            </div>
                        )}

                        {hotel.social && (
                            <div className="hotel-detail-contact-item">
                                <FaInstagram />
                                <span>{hotel.social}</span>
                            </div>
                        )}

                        {hotel.contacto && (
                            <div className="hotel-detail-contact-item">
                                <FaPhone />
                                <span>Contacto: {hotel.contacto}</span>
                            </div>
                        )}
                    </div>

                    <div className="hotel-detail-schedule-card">
                        <h3>Horarios</h3>
                        <div className="hotel-detail-schedule-item">
                            <FaClock />
                            <div>
                                <strong>Check-in:</strong> {hotel.checkIn}
                                <br />
                                <strong>Check-out:</strong> {hotel.checkOut}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;