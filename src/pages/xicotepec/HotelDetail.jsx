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
    FaBed,
    FaExclamationTriangle,    FaChevronLeft,
    FaChevronRight,
    FaTimes,
    FaCamera
} from 'react-icons/fa';
import './HotelDetail.css';
import { getHotelBySlug } from '../../components/xicotepec/hotels/hotelsData';

const HotelDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showGalleryModal, setShowGalleryModal] = useState(false);

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

    const nextImage = () => {
        if (hotel.images) {
            setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
        }
    };

    const prevImage = () => {
        if (hotel.images) {
            setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
        }
    };

    const openGalleryModal = () => {
        setShowGalleryModal(true);
    };

    const closeGalleryModal = () => {
        setShowGalleryModal(false);
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
    }    return (
        <div className="hotel-detail-page">
            {/* Modern Header with Gallery */}
            <div className="hotel-header">
                <button onClick={() => navigate(-1)} className="back-button">
                    <FaArrowLeft />
                </button>
                
                <div className="gallery-container">
                    <img 
                        src={hotel.images ? hotel.images[currentImageIndex] : hotel.image} 
                        alt={hotel.name}
                        className="main-image"
                    />
                    
                    {hotel.images && hotel.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="gallery-nav prev">
                                <FaChevronLeft />
                            </button>
                            <button onClick={nextImage} className="gallery-nav next">
                                <FaChevronRight />
                            </button>
                        </>
                    )}
                    
                    <button onClick={openGalleryModal} className="gallery-expand">
                        <FaCamera />
                    </button>
                    
                    <div className="image-counter">
                        {currentImageIndex + 1} / {hotel.images ? hotel.images.length : 1}
                    </div>
                    
                    {/* Hotel Info Overlay */}
                    <div className="hotel-info-overlay">
                        <h1 className="hotel-title-overlay">{hotel.name}</h1>
                        <div className="hotel-location-overlay">
                            <FaMapMarkerAlt />
                            <span>{hotel.location}</span>
                        </div>
                        <div className="hotel-rating-overlay">
                            <div className="rating-stars-overlay">
                                {renderStars(hotel.stars)}
                            </div>
                            <span className="rating-text-overlay">{hotel.rating}/10</span>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Strip */}
                {hotel.images && hotel.images.length > 1 && (
                    <div className="thumbnail-strip">
                        {hotel.images.map((img, index) => (
                            <div 
                                key={index}
                                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <img src={img} alt={`${hotel.name} ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Quick Info Cards */}
                <div className="quick-info">
                    <div className="quick-info-card">
                        <div className="quick-info-icon"><FaBed /></div>
                        <div className="quick-info-title">Habitaciones</div>
                        <div className="quick-info-value">{hotel.habitaciones}</div>
                    </div>
                    <div className="quick-info-card">
                        <div className="quick-info-icon"><FaUsers /></div>
                        <div className="quick-info-title">Capacidad</div>
                        <div className="quick-info-value">{hotel.capacidad_maxima} personas</div>
                    </div>
                    <div className="quick-info-card">
                        <div className="quick-info-icon"><FaClock /></div>
                        <div className="quick-info-title">Check-in</div>
                        <div className="quick-info-value">{hotel.checkIn}</div>
                    </div>
                    <div className="quick-info-card">
                        <div className="quick-info-icon"><FaClock /></div>
                        <div className="quick-info-title">Check-out</div>
                        <div className="quick-info-value">{hotel.checkOut}</div>
                    </div>
                </div>
            </div>            {/* Main Content Grid */}
            <div className="content-grid">
                {/* Primary Content */}
                <div className="primary-content">
                    {/* Description */}
                    <div className="content-section">
                        <h2 className="section-title">Acerca del Hotel</h2>
                        <p className="description-text">{hotel.fullDescription}</p>
                    </div>

                    {/* Amenities */}
                    <div className="content-section">
                        <h2 className="section-title">Amenidades</h2>
                        <div className="amenities-grid">
                            {hotel.amenities.map((amenity, idx) => (
                                <div key={idx} className="amenity-item">
                                    <amenity.icon className="amenity-icon" />
                                    <span className="amenity-text">{amenity.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Room Features and Services */}
                    <div className="content-section">
                        <h2 className="section-title">Habitaciones y Servicios</h2>
                        <div className="room-types-section">
                            <h4>Características de las Habitaciones</h4>
                            <div className="features-list">
                                {hotel.roomFeatures.map((feature, idx) => (
                                    <div key={idx} className="feature-item">{feature}</div>
                                ))}
                            </div>
                            {hotel.tipos_habitacion && (
                                <>
                                    <h4>Tipos de Habitación</h4>
                                    <div className="room-types-list">
                                        {hotel.tipos_habitacion.map((tipo, idx) => (
                                            <span key={idx} className="room-type-tag">{tipo}</span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        
                        <div className="room-types-section">
                            <h4>Servicios</h4>
                            <div className="services-list">
                                {hotel.services.map((service, idx) => (
                                    <div key={idx} className="service-item">{service}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>                {/* Sidebar */}
                <div className="sidebar">
                    {/* Contact Card */}
                    <div className="contact-card">
                        <h3 className="card-title">Contacto</h3>
                        <div>
                            {hotel.contact && (
                                <a href={`tel:${hotel.contact}`} className="contact-item">
                                    <FaPhone />
                                    <span>Llamar</span>
                                </a>
                            )}
                            {hotel.whatsapp && (
                                <a href={`https://wa.me/${hotel.whatsapp.replace(/\D/g, '')}`} 
                                   className="contact-item whatsapp-link"
                                   target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp />
                                    <span>WhatsApp</span>
                                </a>
                            )}
                            {hotel.email && (
                                <a href={`mailto:${hotel.email}`} className="contact-item">
                                    <FaEnvelope />
                                    <span>Email</span>
                                </a>
                            )}
                            {(hotel.website || hotel.instagram) && (
                                <a href={hotel.website ? `https://${hotel.website}` : `https://instagram.com/${hotel.instagram?.replace('@', '')}`}
                                   className="contact-item"
                                   target="_blank" rel="noopener noreferrer">
                                    {hotel.website ? <FaGlobe /> : <FaInstagram />}
                                    <span>{hotel.website ? 'Web' : 'Instagram'}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Payment Info Card */}
                    {hotel.metodos_pago && (
                        <div className="info-card">
                            <h3 className="card-title">Pagos</h3>
                            <div className="payment-methods">
                                {hotel.metodos_pago.map((metodo, idx) => (
                                    <span key={idx} className="payment-method">{metodo}</span>
                                ))}
                            </div>
                            {hotel.anticipo_requerido && (
                                <div className="advance-note">{hotel.anticipo_requerido}</div>
                            )}
                        </div>
                    )}

                    {/* Special Features Card */}
                    {(hotel.caracteristica_unica || hotel.experiencias_turisticas) && (
                        <div className="info-card">
                            <h3 className="card-title">Lo Especial</h3>
                            {hotel.caracteristica_unica && (
                                <div className="info-item">
                                    <FaStar />
                                    <span>{hotel.caracteristica_unica}</span>
                                </div>
                            )}
                            {hotel.experiencias_turisticas && hotel.experiencias_turisticas !== "No" && (
                                <div className="experiences-text">{hotel.experiencias_turisticas}</div>
                            )}
                        </div>
                    )}                    {/* Restrictions Card */}
                    {hotel.restricciones && (
                        <div className="info-card">
                            <h3 className="card-title">
                                <FaExclamationTriangle /> Importante
                            </h3>
                            <div className="restrictions-text">{hotel.restricciones}</div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Modal Gallery */}
            {showGalleryModal && hotel.images && (
                <div className="gallery-modal" onClick={closeGalleryModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeGalleryModal}>
                            <FaTimes />
                        </button>
                        <img 
                            src={hotel.images[currentImageIndex]} 
                            alt={hotel.name}
                            className="modal-image"
                        />
                        {hotel.images.length > 1 && (
                            <>
                                <button onClick={prevImage} className="modal-nav prev">
                                    <FaChevronLeft />
                                </button>
                                <button onClick={nextImage} className="modal-nav next">
                                    <FaChevronRight />
                                </button>
                            </>
                        )}
                        <div className="modal-counter">
                            {currentImageIndex + 1} / {hotel.images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelDetail;