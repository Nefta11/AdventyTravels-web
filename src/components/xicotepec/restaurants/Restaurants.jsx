import { useState } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { restaurantsData } from './restaurantsData';
import './Restaurants.css';

const Restaurants = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);

    const handleRestaurantClick = (restaurant) => {
        navigate(`/restaurant/${restaurant.slug}`, { state: { restaurant } });
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    // Determine how many restaurants to show (9 initially, all when showAll is true)
    const restaurantsToShow = showAll ? restaurantsData : restaurantsData.slice(0, 9);    // Transform restaurant data for display
    const displayRestaurants = restaurantsToShow.map(restaurant => ({
        id: restaurant.id,
        slug: restaurant.slug,
        image: restaurant.imagen,
        name: restaurant.nombre_establecimiento,
        category: Array.isArray(restaurant.tipo_comida) ? restaurant.tipo_comida[0] : restaurant.tipo_comida,
        priceRange: restaurant.rango_precios_promedio_persona,
        specialty: Array.isArray(restaurant.especialidades_casa) 
            ? restaurant.especialidades_casa.slice(0, 2).join(', ') 
            : restaurant.especialidades_casa
    }));

    return (
        <section className="restaurants-wrapper" id="restaurants-section">
            <div className="restaurants-container">                {/* Título principal */}
                <div className="restaurants-header">
                    <h1 className="restaurants-main-title">Restaurantes</h1>
                    <div className="restaurants-main-title-underline"></div>
                </div>                {/* Grid de restaurantes */}
                <div className="restaurants-grid">
                    {displayRestaurants.map((restaurant) => (
                        <div 
                            key={restaurant.id} 
                            className="restaurant-card"
                            onClick={() => handleRestaurantClick(restaurant)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="restaurant-image-container">
                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                    className="restaurant-image"
                                />
                                <div className="restaurant-category-badge">
                                    {restaurant.category}
                                </div>
                            </div>                            <div className="restaurant-content">
                                <div className="restaurant-main-info">
                                    <h3 className="restaurant-name">{restaurant.name}</h3>
                                    <div className="restaurant-price">
                                        {restaurant.priceRange}
                                    </div>
                                </div>

                                <div className="restaurant-cuisine">
                                    <FaUtensils className="cuisine-icon" />
                                    <span>{restaurant.category}</span>
                                </div>
                            </div></div>
                    ))}
                </div>

                {/* Botón Ver más/Ver menos */}
                {restaurantsData.length > 9 && (
                    <div className="restaurants-pagination">
                        <button 
                            className="pagination-button"
                            onClick={toggleShowAll}
                        >
                            {showAll ? 'Ver menos' : 'Ver más'}
                        </button>
                        <span className="restaurants-count">
                            Mostrando {displayRestaurants.length} de {restaurantsData.length} restaurantes
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Restaurants;