import PropTypes from 'prop-types';
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import './FestivalModal.css';

const FestivalModal = ({ festival, onClose }) => (
    <div className="festivals-component-modal-backdrop" onClick={onClose}>
        <div className="festivals-component-modal" onClick={e => e.stopPropagation()}>
            <button className="festivals-component-modal-close" onClick={onClose}>
                <FaTimes />
            </button>
            <div className="festivals-component-modal-header">
                <div
                    className="festivals-component-modal-image"
                    style={{ backgroundImage: `url(${festival.image})` }}
                />
                <div className="festivals-component-modal-header-content">
                    <h2 className="festivals-component-modal-title">{festival.title}</h2>
                    <div className="festivals-component-modal-meta">
                        <div className="festivals-component-modal-meta-item">
                            <FaCalendarAlt className="festivals-component-modal-meta-icon" />
                            <span>{festival.date}</span>
                        </div>
                        <div className="festivals-component-modal-meta-item">
                            <FaMapMarkerAlt className="festivals-component-modal-meta-icon" />
                            <span>{festival.location}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="festivals-component-modal-body">
                <div className="festivals-component-modal-section">
                    <h3 className="festivals-component-modal-section-title">
                        <FaUsers className="festivals-component-modal-section-icon" />
                        Descripción
                    </h3>
                    <p className="festivals-component-modal-description">{festival.fullDescription}</p>
                </div>
                <div className="festivals-component-modal-section">
                    <h3 className="festivals-component-modal-section-title">
                        <FaClock className="festivals-component-modal-section-icon" />
                        Actividades Principales
                    </h3>
                    <ul className="festivals-component-modal-activities">
                        {festival.activities.map((activity, idx) => (
                            <li key={idx} className="festivals-component-modal-activity">{activity}</li>
                        ))}
                    </ul>
                </div>
                <div className="festivals-component-modal-section">
                    <h3 className="festivals-component-modal-section-title">
                        <FaMapMarkerAlt className="festivals-component-modal-section-icon" />
                        Significado Cultural
                    </h3>
                    <p className="festivals-component-modal-significance">{festival.significance}</p>
                </div>
            </div>
        </div>
    </div>
);

FestivalModal.propTypes = {
    festival: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FestivalModal;
