import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaUsers, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaStar, FaHeart, FaShare, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getTourBySlug } from '../../components/xicotepec/tours/toursData';
import './TourDetail.css';

const TourDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        const tourData = getTourBySlug(slug);
        if (tourData) {
            setTour(tourData);
            setSelectedImage(tourData.gallery[0]);
        }
        setLoading(false);
    }, [slug]);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
        setShowGallery(true);
    };

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % tour.gallery.length;
        setCurrentImageIndex(nextIndex);
        setSelectedImage(tour.gallery[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = currentImageIndex === 0 ? tour.gallery.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
        setSelectedImage(tour.gallery[prevIndex]);
    };

    const handleWhatsAppClick = () => {
        const message = `Hola, me interesa el tour "${tour.title}" que ofreces. ¿Podrías darme más información?`;
        const url = `https://wa.me/52${tour.contact.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handlePhoneClick = () => {
        window.open(`tel:${tour.contact.phone}`, '_self');
    };

    const handleEmailClick = () => {
        const subject = `Consulta sobre el tour: ${tour.title}`;
        const body = `Hola ${tour.provider},\n\nMe interesa conocer más información sobre el tour "${tour.title}".\n\nGracias por su atención.`;
        window.open(`mailto:${tour.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
    };

    if (loading) {
        return (
            <div className="tour-detail-loading">
                <div className="tour-detail-spinner"></div>
                <p>Cargando información del tour...</p>
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="tour-detail-not-found">
                <h2>Tour no encontrado</h2>
                <p>El tour que buscas no existe o ha sido removido.</p>
                <button onClick={() => navigate('/xicotepec')} className="tour-detail-back-home">
                    Volver al inicio
                </button>
            </div>
        );
    }

    return (
        <div className="tour-detail-container">
            {/* Header con imagen principal */}
            <div className="tour-detail-header">
                <div 
                    className="tour-detail-hero-image"
                    style={{ backgroundImage: `url(${selectedImage || tour.image})` }}
                >
                    <div className="tour-detail-hero-overlay">
                        <button 
                            onClick={() => navigate('/xicotepec')}
                            className="tour-detail-back-button"
                        >
                            <FaArrowLeft />
                            <span>Volver</span>
                        </button>
                        
                        <div className="tour-detail-hero-content">
                            <div className="tour-detail-category">{tour.category}</div>
                            <h1 className="tour-detail-title">{tour.title}</h1>
                            <div className="tour-detail-provider">
                                <span>por {tour.provider}</span>
                            </div>
                            <div className="tour-detail-location">
                                <FaMapMarkerAlt />
                                <span>{tour.location}</span>
                            </div>
                        </div>

                        <div className="tour-detail-actions">
                            <button className="tour-detail-action-btn">
                                <FaHeart />
                            </button>
                            <button className="tour-detail-action-btn">
                                <FaShare />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="tour-detail-content">
                <div className="tour-detail-main">
                    {/* Información rápida */}
                    <div className="tour-detail-quick-info">
                        <div className="tour-detail-quick-item">
                            <FaClock className="tour-detail-quick-icon" />
                            <div>
                                <span className="tour-detail-quick-label">Duración</span>
                                <span className="tour-detail-quick-value">{tour.duration}</span>
                            </div>
                        </div>
                        <div className="tour-detail-quick-item">
                            <FaUsers className="tour-detail-quick-icon" />
                            <div>
                                <span className="tour-detail-quick-label">Grupo</span>
                                <span className="tour-detail-quick-value">{tour.groupSize}</span>
                            </div>
                        </div>
                        <div className="tour-detail-quick-item">
                            <FaStar className="tour-detail-quick-icon" />
                            <div>
                                <span className="tour-detail-quick-label">Dificultad</span>
                                <span className="tour-detail-quick-value">{tour.difficulty}</span>
                            </div>
                        </div>
                    </div>

                    {/* Descripción */}
                    <div className="tour-detail-section">
                        <h2>Acerca de esta experiencia</h2>
                        <p className="tour-detail-description">{tour.longDescription}</p>
                    </div>

                    {/* Lo que incluye */}
                    <div className="tour-detail-section">
                        <h2>Lo que incluye</h2>
                        <ul className="tour-detail-includes">
                            {tour.includes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Tipos de tours */}
                    <div className="tour-detail-section">
                        <h2>Tipos de recorridos</h2>
                        <div className="tour-detail-tour-types">
                            {tour.tourTypes.map((type, index) => (
                                <div key={index} className="tour-detail-tour-type">
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Destacados */}
                    <div className="tour-detail-section">
                        <h2>Características destacadas</h2>
                        <ul className="tour-detail-highlights">
                            {tour.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Público objetivo */}
                    <div className="tour-detail-section">
                        <h2>Ideal para</h2>
                        <div className="tour-detail-audience">
                            {tour.targetAudience.map((audience, index) => (
                                <span key={index} className="tour-detail-audience-tag">
                                    {audience}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Precios detallados si existen */}
                    {tour.pricing && (
                        <div className="tour-detail-section">
                            <h2>Precios detallados</h2>
                            <div className="tour-detail-pricing">
                                {tour.pricing.cityTour && (
                                    <div className="tour-detail-pricing-category">
                                        <h3>City Tour</h3>
                                        {Object.entries(tour.pricing.cityTour).map(([key, value]) => (
                                            key !== 'notes' && (
                                                <div key={key} className="tour-detail-price-item">
                                                    <span>{key}</span>
                                                    <span className="tour-detail-price">${value} MXN</span>
                                                </div>
                                            )
                                        ))}
                                        {tour.pricing.cityTour.notes && (
                                            <p className="tour-detail-price-note">{tour.pricing.cityTour.notes}</p>
                                        )}
                                    </div>
                                )}
                                {tour.pricing.workshops && (
                                    <div className="tour-detail-pricing-category">
                                        <h3>Talleres</h3>
                                        {Object.entries(tour.pricing.workshops).map(([key, workshop]) => (
                                            <div key={key} className="tour-detail-workshop-pricing">
                                                <h4>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                                                <div className="tour-detail-price-item">
                                                    <span>Precio</span>
                                                    <span className="tour-detail-price">
                                                        ${workshop.minPrice} - ${workshop.maxPrice} MXN
                                                    </span>
                                                </div>
                                                <div className="tour-detail-price-item">
                                                    <span>Capacidad</span>
                                                    <span>{workshop.capacity}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Galería de imágenes */}
                    <div className="tour-detail-section">
                        <h2>Galería</h2>
                        <div className="tour-detail-gallery">
                            {tour.gallery.map((image, index) => (
                                <div 
                                    key={index}
                                    className="tour-detail-gallery-item"
                                    onClick={() => handleImageClick(image, index)}
                                >
                                    <img src={image} alt={`${tour.title} - Imagen ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar de contacto */}
                <div className="tour-detail-sidebar">
                    <div className="tour-detail-contact-card">
                        <h3>Reserva tu experiencia</h3>
                        <div className="tour-detail-base-price">
                            <span className="tour-detail-price-label">Desde</span>
                            <span className="tour-detail-price-amount">${tour.basePrice} MXN</span>
                            <span className="tour-detail-price-unit">por persona</span>
                        </div>

                        <div className="tour-detail-contact-info">
                            <h4>Contacto</h4>
                            <div className="tour-detail-contact-item">
                                <strong>{tour.contact.responsiblePerson}</strong>
                            </div>
                            <div className="tour-detail-contact-item">
                                <FaMapMarkerAlt />
                                <span>{tour.contact.baseOperation}</span>
                            </div>
                        </div>

                        <div className="tour-detail-contact-buttons">
                            <button 
                                onClick={handleWhatsAppClick}
                                className="tour-detail-contact-btn tour-detail-whatsapp-btn"
                            >
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </button>
                            <button 
                                onClick={handlePhoneClick}
                                className="tour-detail-contact-btn tour-detail-phone-btn"
                            >
                                <FaPhone />
                                <span>Llamar</span>
                            </button>
                            <button 
                                onClick={handleEmailClick}
                                className="tour-detail-contact-btn tour-detail-email-btn"
                            >
                                <FaEnvelope />
                                <span>Email</span>
                            </button>
                        </div>

                        {/* Redes sociales */}
                        {(tour.contact.socialMedia?.facebook || tour.contact.socialMedia?.instagram) && (
                            <div className="tour-detail-social">
                                <h4>Síguenos</h4>
                                <div className="tour-detail-social-buttons">
                                    {tour.contact.socialMedia.facebook && (
                                        <a 
                                            href={`https://facebook.com/${tour.contact.socialMedia.facebook}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="tour-detail-social-btn tour-detail-facebook-btn"
                                        >
                                            <FaFacebook />
                                        </a>
                                    )}
                                    {tour.contact.socialMedia.instagram && (
                                        <a 
                                            href={`https://instagram.com/${tour.contact.socialMedia.instagram}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="tour-detail-social-btn tour-detail-instagram-btn"
                                        >
                                            <FaInstagram />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Información comercial */}
                        <div className="tour-detail-business-info">
                            <h4>Información comercial</h4>
                            <div className="tour-detail-payment-methods">
                                <span className="tour-detail-info-label">Formas de pago:</span>
                                <div className="tour-detail-payment-tags">
                                    {tour.businessInfo.paymentMethods.map((method, index) => (
                                        <span key={index} className="tour-detail-payment-tag">
                                            {method}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {tour.businessInfo.specialPricesGroups && (
                                <div className="tour-detail-group-discount">
                                    <span>✓ Precios especiales para grupos</span>
                                </div>
                            )}
                            {tour.businessInfo.worksWithAgencies && (
                                <div className="tour-detail-agencies">
                                    <span>✓ Trabajamos con agencias</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de galería */}
            {showGallery && (
                <div className="tour-detail-gallery-modal" onClick={() => setShowGallery(false)}>
                    <div className="tour-detail-gallery-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="tour-detail-gallery-close"
                            onClick={() => setShowGallery(false)}
                        >
                            <FaTimes />
                        </button>
                        <button 
                            className="tour-detail-gallery-nav tour-detail-gallery-prev"
                            onClick={prevImage}
                        >
                            <FaChevronLeft />
                        </button>
                        <img 
                            src={selectedImage} 
                            alt={`${tour.title} - Imagen ${currentImageIndex + 1}`}
                            className="tour-detail-gallery-image"
                        />
                        <button 
                            className="tour-detail-gallery-nav tour-detail-gallery-next"
                            onClick={nextImage}
                        >
                            <FaChevronRight />
                        </button>
                        <div className="tour-detail-gallery-counter">
                            {currentImageIndex + 1} / {tour.gallery.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TourDetail;
