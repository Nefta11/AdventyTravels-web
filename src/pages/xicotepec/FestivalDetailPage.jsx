import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock, FaHeart } from 'react-icons/fa';
import './FestivalDetailPage.css';
import XicotepecFooter from '../../components/xicotepec/footer/XicotepecFooter';

const FestivalDetailPage = () => {
    // const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Obtener los datos del festival desde el state de navegación
    const festival = location.state?.festival;

    // Si no hay datos del festival, redirigir de vuelta
    if (!festival) {
        return (
            <div className="festival-detail-error">
                <h2>Festival no encontrado</h2>
                <button onClick={() => navigate('/xicotepec')} className="back-button">
                    <FaArrowLeft /> Volver a Xicotepec
                </button>
            </div>
        );
    }

    const handleBackClick = () => {
        navigate(-1); // Volver a la página anterior
    };

    return (
        <div className="festival-detail-page">
            {/* Hero Section */}
            <div className="festival-detail-hero">
                <div
                    className="festival-detail-hero-image"
                    style={{ backgroundImage: `url(${festival.image})` }}
                >
                    <div className="festival-detail-hero-overlay">
                        <div className="festival-detail-hero-content">
                            <button
                                className="festival-detail-back-button"
                                onClick={handleBackClick}
                            >
                                <FaArrowLeft />
                                <span>Volver</span>
                            </button>

                            <div className="festival-detail-hero-info">
                                <h1 className="festival-detail-title">{festival.title}</h1>
                                <div className="festival-detail-meta">
                                    <div className="festival-detail-meta-item">
                                        <FaCalendarAlt />
                                        <span>{festival.date}</span>
                                    </div>
                                    <div className="festival-detail-meta-item">
                                        <FaMapMarkerAlt />
                                        <span>{festival.location}</span>
                                    </div>
                                </div>
                                <p className="festival-detail-short-description">
                                    {festival.shortDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="festival-detail-content">
                <div className="festival-detail-container">

                    {/* Descripción Principal */}
                    <section className="festival-detail-section">
                        <h2 className="festival-detail-section-title">
                            <FaUsers className="festival-detail-section-icon" />
                            Descripción
                        </h2>
                        <p className="festival-detail-description">
                            {festival.fullDescription}
                        </p>
                    </section>

                    {/* Actividades */}
                    <section className="festival-detail-section">
                        <h2 className="festival-detail-section-title">
                            <FaClock className="festival-detail-section-icon" />
                            Actividades Principales
                        </h2>
                        <div className="festival-detail-activities">
                            {festival.activities.map((activity, index) => (
                                <div key={index} className="festival-detail-activity">
                                    <div className="festival-detail-activity-number">
                                        {index + 1}
                                    </div>
                                    <span className="festival-detail-activity-text">
                                        {activity}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Significado Cultural */}
                    <section className="festival-detail-section">
                        <h2 className="festival-detail-section-title">
                            <FaHeart className="festival-detail-section-icon" />
                            Significado Cultural
                        </h2>
                        <p className="festival-detail-significance">
                            {festival.significance}
                        </p>
                    </section>

                    {/* Botón de regreso */}
                    <div className="festival-detail-bottom-actions">
                        <button
                            className="festival-detail-back-bottom"
                            onClick={handleBackClick}
                        >
                            <FaArrowLeft />
                            Volver a Xicotepec
                        </button>                    </div>
                </div>
            </div>
            <XicotepecFooter />
        </div>
    );
};

export default FestivalDetailPage;