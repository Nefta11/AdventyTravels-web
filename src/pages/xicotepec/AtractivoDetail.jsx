import { useParams, useNavigate } from 'react-router-dom';
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaPhone,
    FaInfo,
    FaStar,
    FaTheaterMasks,
    FaEye,
    FaRoute,
    FaTree,
    FaMountain,
    FaCamera,
    FaHistory,
    FaChurch,
    FaLandmark
} from 'react-icons/fa';
import './AtractivoDetail.css';
import { getAtractivoBySlug } from '../../components/xicotepec/atractivos/atractivosData';

const AtractivoDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const atractivo = getAtractivoBySlug(slug);

    if (!atractivo) {
        return (
            <div className="atractivo-detail-error">
                <h2>Atractivo no encontrado</h2>
                <button onClick={() => navigate('/xicotepec')} className="atractivo-detail-back-button">
                    <FaArrowLeft /> Volver a Xicotepec
                </button>
            </div>
        );
    }

    const handleWhatsAppClick = () => {
        const phone = atractivo.phone || "7647640000";
        const message = `Hola, me interesa conocer más sobre ${atractivo.title} en Xicotepec.`;
        const whatsappUrl = `https://wa.me/${phone.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const getTypeIcon = (type) => {
        switch (type.toLowerCase()) {
            case 'centro ceremonial':
                return <FaTheaterMasks />;
            case 'mirador natural':
                return <FaMountain />;
            case 'museo histórico':
                return <FaHistory />;
            case 'edificio gubernamental':
                return <FaLandmark />;
            case 'templo religioso':
                return <FaChurch />;
            case 'destino natural e histórico':
                return <FaTree />;
            default:
                return <FaEye />;
        }
    };

    const renderFeatures = () => {
        if (!atractivo.features) return null;

        const featureIcons = {
            cultural: <FaTheaterMasks />,
            religious: <FaChurch />,
            mystical: <FaStar />,
            historical: <FaHistory />,
            hiking: <FaRoute />,
            nature: <FaTree />,
            photography: <FaCamera />,
            adventure: <FaMountain />,
            educational: <FaInfo />,
            architectural: <FaLandmark />,
            art: <FaTheaterMasks />,
            waterfalls: <FaTree />,
            rafting: <FaRoute />
        };

        return Object.entries(atractivo.features)
            .filter(([, value]) => value)
            .map(([key]) => (
                <div key={key} className="feature-item">
                    {featureIcons[key] || <FaEye />}
                    <span>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
            ));
    };

    return (
        <div className="atractivo-detail-wrapper">
            {/* Botón de regreso */}
            <button
                onClick={() => navigate('/xicotepec')}
                className="atractivo-detail-back-button"
            >
                <FaArrowLeft /> Volver a Xicotepec
            </button>

            {/* Hero Section */}
            <div className="atractivo-detail-hero">
                <div
                    className="atractivo-detail-hero-image"
                    style={{ backgroundImage: `url(${atractivo.image})` }}
                >
                    <div className="atractivo-detail-hero-overlay">
                        <div className="atractivo-detail-hero-content">
                            <div className="hero-top-info">
                                <div className="hero-type">
                                    {getTypeIcon(atractivo.type)} {atractivo.type}
                                </div>
                                {atractivo.distance_from_xicotepec && (
                                    <div className="hero-distance">
                                        <FaRoute /> {atractivo.distance_from_xicotepec}
                                    </div>
                                )}
                            </div>
                            <h1 className="atractivo-detail-title">{atractivo.title}</h1>
                            <div className="hero-location">
                                <FaMapMarkerAlt className="location-icon" />
                                <span>{atractivo.address}</span>
                            </div>
                            <p className="atractivo-detail-subtitle">{atractivo.type}</p>
                        </div>
                    </div>
                </div>
            </div>            {/* Container principal */}
            <div className="atractivo-detail-container">
                <div className="atractivo-detail-content">
                    {/* Columna izquierda */}
                    <div className="atractivo-detail-left">
                        {/* Resumen e información clave */}
                        <div className="atractivo-detail-overview-card">
                            <h3><FaInfo /> Resumen del Atractivo</h3>
                            <div className="overview-description">
                                <p>{atractivo.description}</p>
                            </div>
                            <div className="overview-grid">
                                <div className="overview-item">
                                    <FaMapMarkerAlt className="overview-icon" />
                                    <div>
                                        <strong>Ubicación</strong>
                                        <span>{atractivo.address}</span>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    {getTypeIcon(atractivo.type)}
                                    <div>
                                        <strong>Tipo de Atractivo</strong>
                                        <span>{atractivo.type}</span>
                                    </div>
                                </div>
                                {atractivo.distance_from_xicotepec && (
                                    <div className="overview-item">
                                        <FaRoute className="overview-icon" />
                                        <div>
                                            <strong>Distancia desde Xicotepec</strong>
                                            <span>{atractivo.distance_from_xicotepec}</span>
                                        </div>
                                    </div>
                                )}
                                {atractivo.phone && (
                                    <div className="overview-item">
                                        <FaPhone className="overview-icon" />
                                        <div>
                                            <strong>Contacto</strong>
                                            <span>{atractivo.phone}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Qué puedes encontrar aquí */}
                        {atractivo.attractions && (
                            <div className="atractivo-detail-section">
                                <h3><FaEye /> Qué puedes encontrar aquí</h3>
                                <div className="attractions-grid">
                                    {atractivo.attractions.map((attraction, index) => (
                                        <div key={index} className="attraction-card">
                                            <FaStar className="attraction-icon" />
                                            <span>{attraction}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actividades disponibles */}
                        {atractivo.activities && (
                            <div className="atractivo-detail-section">
                                <h3><FaRoute /> Actividades que puedes realizar</h3>
                                <div className="activities-grid">
                                    {atractivo.activities.map((activity, index) => (
                                        <div key={index} className="activity-card">
                                            <FaMountain className="activity-icon" />
                                            <span>{activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Características y especificaciones organizadas */}
                        {(atractivo.features || atractivo.specifications) && (
                            <div className="atractivo-detail-features-specs">
                                <h3><FaStar /> Características y Detalles Técnicos</h3>
                                
                                {/* Características */}
                                {atractivo.features && (
                                    <div className="features-section">
                                        <h4>Características principales</h4>
                                        <div className="features-grid">
                                            {renderFeatures()}
                                        </div>
                                    </div>
                                )}

                                {/* Especificaciones técnicas */}
                                {atractivo.specifications && (
                                    <div className="specs-section">
                                        <h4>Datos técnicos y medidas</h4>
                                        <div className="specifications-grid">
                                            {Object.entries(atractivo.specifications).map(([key, value]) => (
                                                <div key={key} className="spec-item">
                                                    <strong>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</strong>
                                                    <span>{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>                    {/* Columna derecha */}
                    <div className="atractivo-detail-right">
                        {/* Galería principal */}
                        <div className="atractivo-detail-gallery">
                            <div
                                className="gallery-main-image"
                                style={{ backgroundImage: `url(${atractivo.image})` }}
                            >
                                <div className="gallery-overlay">
                                    <div className="gallery-badge">
                                        <FaCamera /> Vista principal
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Información de contacto */}
                        {atractivo.phone && (
                            <div className="atractivo-detail-contact-card">
                                <h4><FaPhone /> Contacta y Visita</h4>
                                <div className="contact-methods">
                                    <div className="contact-method" onClick={handleWhatsAppClick}>
                                        <FaPhone />
                                        <span>Llamar: {atractivo.phone}</span>
                                    </div>
                                    <div className="contact-method whatsapp" onClick={handleWhatsAppClick}>
                                        <FaPhone />
                                        <span>Consultar por WhatsApp</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Información histórica y cultural */}
                        {(atractivo.historical_period || atractivo.architectural_style || atractivo.cultural_importance) && (
                            <div className="atractivo-detail-info-card">
                                <h4><FaHistory /> Información Histórica y Cultural</h4>
                                {atractivo.historical_period && (
                                    <div className="info-item">
                                        <strong>Período histórico:</strong>
                                        <span>{atractivo.historical_period}</span>
                                    </div>
                                )}
                                {atractivo.architectural_style && (
                                    <div className="info-item">
                                        <strong>Estilo arquitectónico:</strong>
                                        <span>{atractivo.architectural_style}</span>
                                    </div>
                                )}
                                {atractivo.cultural_importance && (
                                    <div className="info-item">
                                        <strong>Importancia cultural:</strong>
                                        <span>{atractivo.cultural_importance}</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Elementos especiales y destacados */}
                        {atractivo.special_items && (
                            <div className="atractivo-detail-special-card">
                                <h4><FaStar /> Elementos Especiales</h4>
                                {Object.entries(atractivo.special_items).map(([key, value]) => (
                                    <div key={key} className="special-item">
                                        <strong>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</strong>
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Información práctica adicional */}
                        {(atractivo.access_difficulty || atractivo.best_time_to_visit || atractivo.duration) && (
                            <div className="atractivo-detail-practical-card">
                                <h4><FaInfo /> Información Práctica</h4>
                                {atractivo.access_difficulty && (
                                    <div className="practical-item">
                                        <strong>Dificultad de acceso:</strong>
                                        <span>{atractivo.access_difficulty}</span>
                                    </div>
                                )}
                                {atractivo.best_time_to_visit && (
                                    <div className="practical-item">
                                        <strong>Mejor época para visitar:</strong>
                                        <span>{atractivo.best_time_to_visit}</span>
                                    </div>
                                )}
                                {atractivo.duration && (
                                    <div className="practical-item">
                                        <strong>Duración recomendada:</strong>
                                        <span>{atractivo.duration}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtractivoDetail;
