import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './HotelCard.css';

const HotelCard = ({ hotel, onClick, renderStars }) => (
    <div className="hotels-component-card" onClick={onClick}>
        <div
            className="hotels-component-card-image"
            style={{ backgroundImage: `url(${hotel.image})` }}
        >
            <div className="hotels-component-card-overlay">
                <div className="hotels-component-card-category">{hotel.category}</div>
                <div className="hotels-component-card-content">
                    <h3 className="hotels-component-card-title">{hotel.name}</h3>
                    <div className="hotels-component-card-stars">{renderStars(hotel.stars)}</div>
                    <p className="hotels-component-card-description">{hotel.shortDescription}</p>
                    <div className="hotels-component-card-location">
                        <FaMapMarkerAlt className="hotels-component-card-location-icon" />
                        {hotel.location}
                    </div>
                    <div className="hotels-component-card-price">{hotel.price}</div>
                </div>
            </div>
        </div>
    </div>
);

HotelCard.propTypes = {
    hotel: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    renderStars: PropTypes.func.isRequired,
};

export default HotelCard;
