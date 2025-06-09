import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { restaurantsData } from './restaurantsData.jsx';
import RestaurantCard from './RestaurantCard';
import './Restaurants.css';

const Restaurants = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);

    const handleRestaurantClick = (restaurant) => {
        navigate(`/restaurant/${restaurant.slug}`, { state: { restaurant } });
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };    // Determine how many restaurants to show (6 initially, all when showAll is true)
    const restaurantsToShow = showAll ? restaurantsData : restaurantsData.slice(0, 6);// Transform restaurant data for display
    const displayRestaurants = restaurantsToShow.map(restaurant => ({
        id: restaurant.id,
        slug: restaurant.slug,
        image: restaurant.imagen || '/placeholder-image.jpg',
        name: restaurant.nombre_establecimiento || 'Sin nombre',
        category: Array.isArray(restaurant.tipo_comida)
            ? restaurant.tipo_comida[0] || 'Sin categoría'
            : restaurant.tipo_comida || 'Sin categoría',
        priceRange: restaurant.rango_precios_promedio_persona || 'Precio no disponible',
        specialty: Array.isArray(restaurant.especialidades_casa)
            ? restaurant.especialidades_casa.slice(0, 2).join(', ')
            : restaurant.especialidades_casa || 'No especificadas'
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
                        <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                            onClick={handleRestaurantClick}
                        />
                    ))}
                </div>                {/* Botón Ver más/Ver menos */}
                {restaurantsData.length > 6 && (
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