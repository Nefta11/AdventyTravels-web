import PropTypes from 'prop-types';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './FestivalCard.css';

const FestivalCard = ({ festival, onClick }) => (
    <div className="festivals-component-card" onClick={onClick}>
        <div
            className="festivals-component-card-image"
            style={{ backgroundImage: `url(${festival.image})` }}
        >
            <div className="festivals-component-card-overlay">
                <div className="festivals-component-card-date">
                    <FaCalendarAlt className="festivals-component-card-date-icon" />
                    {festival.date}
                </div>
                <div className="festivals-component-card-content">
                    <h3 className="festivals-component-card-title">{festival.title}</h3>
                    <p className="festivals-component-card-description">{festival.shortDescription}</p>
                    <div className="festivals-component-card-location">
                        <FaMapMarkerAlt className="festivals-component-card-location-icon" />
                        {festival.location}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

FestivalCard.propTypes = {
    festival: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FestivalCard;
