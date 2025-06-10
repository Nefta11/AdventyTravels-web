import { FaUtensils } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant, onClick }) => {
    return (
        <div
            className="restaurant-card"
            onClick={() => onClick(restaurant)}
            style={{ cursor: 'pointer' }}
        >            <div className="restaurant-image-container">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="restaurant-image"
                    onError={(e) => {
                        e.target.src = '';
                    }}
                />
                <div className="restaurant-category-badge">
                    {restaurant.category}
                </div>
            </div>

            <div className="restaurant-content">
                <div className="restaurant-main-info">
                    <h3 className="restaurant-name">{restaurant.name}</h3>
                    <div className="restaurant-price">
                        {restaurant.priceRange}
                    </div>
                </div>

                <div className="restaurant-cuisine">
                    <FaUtensils className="cuisine-icon" />
                    <span>{restaurant.category}</span>
                </div>                <p className="restaurant-specialty">
                    <strong>Especialidades:</strong> {restaurant.specialty || 'No especificadas'}
                </p>
            </div>
        </div>
    );
};

RestaurantCard.propTypes = {
    restaurant: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        slug: PropTypes.string,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        priceRange: PropTypes.string.isRequired,
        specialty: PropTypes.string
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default RestaurantCard;
