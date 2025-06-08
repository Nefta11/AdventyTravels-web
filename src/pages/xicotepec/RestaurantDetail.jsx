import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaPhone, FaClock, FaUtensils, FaCreditCard, FaFacebook, FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { restaurantsData } from '../../components/xicotepec/restaurants/restaurantsData';
import ScrollToTop from '../../utils/ScrollToTop';
import './RestaurantDetail.css';

const RestaurantDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundRestaurant = restaurantsData.find(r => r.slug === slug);
        if (foundRestaurant) {
            setRestaurant(foundRestaurant);
        }
        setLoading(false);
    }, [slug]);

    // Función para parsear redes sociales
    const parseSocialNetworks = (redes) => {
        if (!redes || redes.length === 0) return [];

        if (Array.isArray(redes)) {
            return redes.map(red => {
                if (typeof red === 'string') {
                    if (red.includes('Facebook:')) {
                        return { type: 'facebook', url: red.replace('Facebook:', '').trim() };
                    } else if (red.includes('Instagram:')) {
                        return { type: 'instagram', url: red.replace('Instagram:', '').trim() };
                    } else if (red.includes('TikTok:')) {
                        return { type: 'tiktok', url: red.replace('TikTok:', '').trim() };
                    }
                    // Si no tiene prefijo, asumir que es Facebook
                    return { type: 'facebook', url: red };
                }
                return null;
            }).filter(Boolean);
        }

        return [];
    };

    // Función para formatear horarios
    const formatSchedule = (horarios) => {
        const daysInSpanish = {
            lunes: 'Lunes',
            martes: 'Martes',
            miercoles: 'Miércoles',
            jueves: 'Jueves',
            viernes: 'Viernes',
            sabado: 'Sábado',
            domingo: 'Domingo'
        };

        if (typeof horarios === 'object' && horarios !== null) {
            return Object.entries(horarios).map(([day, hours]) => ({
                day: daysInSpanish[day] || day,
                hours: hours
            }));
        }

        // Si es un string, devolver un formato genérico
        return [{
            day: 'Horarios',
            hours: horarios || 'Consultar horarios'
        }];
    };

    // Funciones para la galería
    const goToPrevImage = () => {
        setCurrentImageIndex(prev =>
            prev === 0 ? restaurant.galeria_imagenes.length - 1 : prev - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prev =>
            prev === restaurant.galeria_imagenes.length - 1 ? 0 : prev + 1
        );
    };

    if (loading) {
        return (
            <div className="restaurant-detail-loading">
                <div className="loading-spinner"></div>
                <p>Cargando información del restaurante...</p>
            </div>
        );
    }

    if (!restaurant) {
        return (
            <div className="restaurant-detail-error">
                <h2>Restaurante no encontrado</h2>
                <p>Lo sentimos, no pudimos encontrar el restaurante que buscas.</p>
                <button onClick={() => navigate('/xicotepec')} className="back-button">
                    <FaArrowLeft /> Volver a Xicotepec
                </button>
            </div>
        );
    }

    const socialNetworks = parseSocialNetworks(restaurant.redes_sociales);
    const schedule = formatSchedule(restaurant.horarios_atencion);

    return (
        <>
            <ScrollToTop />
            <div className="restaurant-detail-container">
                {/* Header con galería */}
                <div className="restaurant-detail-header">
                    <button
                        onClick={() => navigate('/xicotepec')}
                        className="restaurant-back-button"
                    >
                        <FaArrowLeft />
                        <span>Volver a Xicotepec</span>
                    </button>

                    <div className="restaurant-gallery-container">
                        <div className="restaurant-main-image">
                            <img
                                src={restaurant.galeria_imagenes[currentImageIndex]}
                                alt={restaurant.nombre_establecimiento}
                                className="restaurant-hero-image"
                            />

                            {restaurant.galeria_imagenes.length > 1 && (
                                <>
                                    <button
                                        onClick={goToPrevImage}
                                        className="gallery-nav gallery-prev"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button
                                        onClick={goToNextImage}
                                        className="gallery-nav gallery-next"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}
                        </div>

                        {restaurant.galeria_imagenes.length > 1 && (
                            <div className="restaurant-gallery-thumbs">
                                {restaurant.galeria_imagenes.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${restaurant.nombre_establecimiento} ${index + 1}`}
                                        className={`gallery-thumb ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="restaurant-title-section">
                        <h1 className="restaurant-detail-title">{restaurant.nombre_establecimiento}</h1>
                        <div className="restaurant-basic-info">
                            <div className="restaurant-cuisine-type">
                                <FaUtensils />
                                <span>{Array.isArray(restaurant.tipo_comida) ? restaurant.tipo_comida.join(', ') : restaurant.tipo_comida}</span>
                            </div>
                            <div className="restaurant-price-range">
                                <span className="price-label">Precio promedio:</span>
                                <span className="price-value">{restaurant.rango_precios_promedio_persona}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="restaurant-detail-content">
                    <div className="restaurant-content-grid">
                        {/* Columna izquierda */}
                        <div className="restaurant-left-column">
                            {/* Descripción */}
                            <div className="restaurant-detail-card">
                                <h2 className="section-title">Acerca del Restaurante</h2>
                                <p className="restaurant-description">{restaurant.descripcion_restaurante}</p>
                            </div>

                            {/* Especialidades */}
                            <div className="restaurant-detail-card">
                                <h2 className="section-title">Especialidades de la Casa</h2>
                                <div className="specialties-grid">
                                    {restaurant.especialidades_casa.map((specialty, index) => (
                                        <div key={index} className="specialty-item">
                                            <FaUtensils className="specialty-icon" />
                                            <span>{specialty}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="restaurant-detail-card">
                                <h2 className="section-title">Ubicación</h2>
                                <div className="location-info">
                                    <FaMapMarkerAlt className="location-icon" />
                                    <span>{restaurant.direccion_completa}</span>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha */}
                        <div className="restaurant-right-column">
                            {/* Información de contacto */}
                            <div className="restaurant-detail-card">
                                <h2 className="section-title">Contacto</h2>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <FaPhone className="contact-icon" />
                                        <span>{restaurant.telefono}</span>
                                    </div>

                                    {socialNetworks.length > 0 && (
                                        <div className="social-networks">
                                            {socialNetworks.map((social, index) => (
                                                <div key={index} className="social-item">
                                                    {social.type === 'facebook' && <FaFacebook className="social-icon facebook" />}
                                                    {social.type === 'instagram' && <FaInstagram className="social-icon instagram" />}
                                                    {social.type === 'tiktok' && <FaInstagram className="social-icon tiktok" />}
                                                    <span>{social.url}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Horarios */}
                            <div className="restaurant-detail-card">
                                <h2 className="section-title">
                                    <FaClock className="section-icon" />
                                    Horarios de Atención
                                </h2>
                                <div className="schedule-grid">
                                    {schedule.map((item, index) => (
                                        <div key={index} className="schedule-item">
                                            <span className="schedule-day">{item.day}</span>
                                            <span className={`schedule-hours ${item.hours === 'Cerrado' ? 'closed' : ''}`}>
                                                {item.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Métodos de pago */}
                            <div className="restaurant-detail-card">
                                <h2 className="section-title">
                                    <FaCreditCard className="section-icon" />
                                    Métodos de Pago
                                </h2>
                                <div className="payment-methods">
                                    {restaurant.metodos_pago.map((method, index) => (
                                        <div key={index} className="payment-method">
                                            <FaCreditCard className="payment-icon" />
                                            <span>{method}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantDetail;