import PropTypes from 'prop-types';
import { FaTimes, FaMapMarkerAlt, FaPhone, FaClock, FaUsers, FaConciergeBell, FaWifi } from 'react-icons/fa';
import './HotelModal.css';

const HotelModal = ({ hotel, onClose }) => (
    <div className="hotels-component-modal-backdrop" onClick={onClose}>
        <div className="hotels-component-modal" onClick={e => e.stopPropagation()}>
            <button className="hotels-component-modal-close" onClick={onClose}>
                <FaTimes />
            </button>
            <div className="hotels-component-modal-header">
                <div
                    className="hotels-component-modal-image"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                />
                <div className="hotels-component-modal-header-content">
                    <h2 className="hotels-component-modal-title">{hotel.name}</h2>
                    <div className="hotels-component-modal-stars">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`hotels-component-star${i < hotel.stars ? ' filled' : ''}`}>★</span>
                        ))}
                        <span className="hotels-component-modal-rating">{hotel.rating}/10</span>
                    </div>
                    <div className="hotels-component-modal-meta">
                        <div className="hotels-component-modal-meta-item">
                            <FaMapMarkerAlt className="hotels-component-modal-meta-icon" />
                            <span>{hotel.location}</span>
                        </div>
                        <div className="hotels-component-modal-meta-item">
                            <FaPhone className="hotels-component-modal-meta-icon" />
                            <span>{hotel.contact}</span>
                        </div>
                    </div>
                    <div className="hotels-component-modal-price">{hotel.price}</div>
                </div>
            </div>
            <div className="hotels-component-modal-body">
                <div className="hotels-component-modal-section">
                    <h3 className="hotels-component-modal-section-title">
                        <FaConciergeBell className="hotels-component-modal-section-icon" /> Acerca del Hotel
                    </h3>
                    <p className="hotels-component-modal-description">{hotel.fullDescription}</p>
                </div>
                <div className="hotels-component-modal-section">
                    <h3 className="hotels-component-modal-section-title">
                        <FaWifi className="hotels-component-modal-section-icon" /> Amenidades
                    </h3>
                    <div className="hotels-component-modal-amenities">
                        {hotel.amenities.map((amenity, idx) => (
                            <div key={idx} className="hotels-component-modal-amenity">
                                <amenity.icon className="hotels-component-modal-amenity-icon" />
                                <span>{amenity.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hotels-component-modal-section">
                    <h3 className="hotels-component-modal-section-title">
                        <FaUsers className="hotels-component-modal-section-icon" /> Habitaciones
                    </h3>
                    <ul className="hotels-component-modal-features">
                        {hotel.roomFeatures.map((feature, idx) => (
                            <li key={idx} className="hotels-component-modal-feature">{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="hotels-component-modal-section">
                    <h3 className="hotels-component-modal-section-title">
                        <FaConciergeBell className="hotels-component-modal-section-icon" /> Servicios
                    </h3>
                    <ul className="hotels-component-modal-services">
                        {hotel.services.map((service, idx) => (
                            <li key={idx} className="hotels-component-modal-service">{service}</li>
                        ))}
                    </ul>
                </div>
                <div className="hotels-component-modal-section">
                    <h3 className="hotels-component-modal-section-title">
                        <FaClock className="hotels-component-modal-section-icon" /> Horarios
                    </h3>
                    <div className="hotels-component-modal-schedule">
                        <div className="hotels-component-modal-schedule-item">
                            <strong>Check-in:</strong> {hotel.checkIn}
                        </div>
                        <div className="hotels-component-modal-schedule-item">
                            <strong>Check-out:</strong> {hotel.checkOut}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HotelModal.propTypes = {
    hotel: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default HotelModal;