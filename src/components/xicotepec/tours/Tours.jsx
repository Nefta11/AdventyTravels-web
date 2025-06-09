import { FaClock, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getAllTours } from './toursData';
import './Tours.css';

const Tours = () => {
    const navigate = useNavigate();
    const tours = getAllTours();

    return (
        <section className="tours-component-wrapper" id="tours-section">
            <div className="tours-component-container">                {/* Título principal */}
                <div className="tours-component-header">
                    <h1 className="tours-main-title">Recorridos</h1>
                    <div className="tours-main-title-underline"></div>
                </div>                {/* Grid de tours */}
                <div className="tours-component-grid">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="tours-component-card"
                            onClick={() => navigate(`/xicotepec/tour/${tour.slug}`)}
                        >
                            <div
                                className="tours-component-card-image"
                                style={{ backgroundImage: `url(${tour.image})` }}
                            >
                                <div className="tours-component-card-overlay">
                                    <div className="tours-component-card-category">
                                        {tour.category}
                                    </div>
                                    <div className="tours-component-card-content">
                                        <div className="tours-component-card-location">
                                            {tour.location}
                                        </div>
                                        <h3 className="tours-component-card-title">
                                            {tour.title}
                                        </h3>
                                        <p className="tours-component-card-description">
                                            {tour.shortDescription}
                                        </p>
                                        <div className="tours-component-card-details">
                                            <div className="tours-component-card-detail">
                                                <FaClock className="tours-component-card-detail-icon" />
                                                <span>{tour.duration}</span>
                                            </div>
                                            <div className="tours-component-card-detail">
                                                <FaUsers className="tours-component-card-detail-icon" />
                                                <span>{tour.groupSize}</span>
                                            </div>
                                        </div>
                                        <div className="tours-component-card-price">
                                            Desde ${tour.basePrice} MXN
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tours;