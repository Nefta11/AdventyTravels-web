import { FaClock, FaUtensils, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import './Restaurants.css';

const Restaurants = () => {
    const restaurants = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop",
            name: "La Casa del Café",
            category: "Cafetería Gourmet",
            cuisine: "Mexicana Contemporánea",
            hours: "7:00 AM - 10:00 PM",
            rating: 4.8,
            priceRange: "$$",
            location: "Centro, Xicotepec",
            specialty: "Café de origen y postres artesanales",
            ambiance: "Acogedor y familiar"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=400&fit=crop",
            name: "El Rincón Serrano",
            category: "Cocina Tradicional",
            cuisine: "Comida Regional",
            hours: "8:00 AM - 9:00 PM",
            rating: 4.6,
            priceRange: "$",
            location: "Zona Colonial",
            specialty: "Platillos tradicionales de la sierra",
            ambiance: "Ambiente típico mexicano"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=400&fit=crop",
            name: "Vista Montana",
            category: "Fine Dining",
            cuisine: "Internacional",
            hours: "6:00 PM - 11:00 PM",
            rating: 4.9,
            priceRange: "$$$",
            location: "Mirador de Xicotepec",
            specialty: "Cocina fusion con vista panorámica",
            ambiance: "Elegante y romántico"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
            name: "Antojitos Mary",
            category: "Comida Rápida",
            cuisine: "Antojitos Mexicanos",
            hours: "6:00 AM - 11:00 PM",
            rating: 4.4,
            priceRange: "$",
            location: "Mercado Central",
            specialty: "Quesadillas y sopes caseros",
            ambiance: "Casual y auténtico"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=400&fit=crop",
            name: "Garden Bistro",
            category: "Bistro Moderno",
            cuisine: "Mediterránea",
            hours: "12:00 PM - 10:00 PM",
            rating: 4.7,
            priceRange: "$$",
            location: "Zona Residencial",
            specialty: "Platillos mediterráneos en jardín",
            ambiance: "Fresco y relajado"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=500&h=400&fit=crop",
            name: "Los Compadres",
            category: "Parrilla y Carnes",
            cuisine: "Asados y Parrilla",
            hours: "2:00 PM - 12:00 AM",
            rating: 4.5,
            priceRange: "$$",
            location: "Carretera Principal",
            specialty: "Cortes de carne y parrilladas",
            ambiance: "Familiar y festivo"
        }
    ];

    return (
        <section className="restaurants-wrapper" id="restaurants-section">
            <div className="restaurants-container">
                {/* Título principal */}
                <div className="restaurants-header">
                    <h2 className="restaurants-main-title">Restaurantes</h2>
                </div>

                {/* Grid de restaurantes */}
                <div className="restaurants-grid">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant.id} className="restaurant-card">
                            <div className="restaurant-image-container">
                                <img
                                    src={restaurant.image}
                                    alt={restaurant.name}
                                    className="restaurant-image"
                                />
                                <div className="restaurant-category-badge">
                                    {restaurant.category}
                                </div>
                                <div className="restaurant-rating">
                                    <FaStar className="rating-icon" />
                                    <span>{restaurant.rating}</span>
                                </div>
                            </div>

                            <div className="restaurant-content">
                                <div className="restaurant-header-info">
                                    <h3 className="restaurant-name">{restaurant.name}</h3>
                                    <div className="restaurant-location">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <span>{restaurant.location}</span>
                                    </div>
                                </div>

                                <div className="restaurant-cuisine">
                                    <FaUtensils className="cuisine-icon" />
                                    <span>{restaurant.cuisine}</span>
                                </div>

                                <p className="restaurant-specialty">
                                    {restaurant.specialty}
                                </p>

                                <div className="restaurant-details">
                                    <div className="restaurant-hours">
                                        <FaClock className="hours-icon" />
                                        <span>{restaurant.hours}</span>
                                    </div>
                                    <div className="restaurant-price">
                                        {restaurant.priceRange}
                                    </div>
                                </div>

                                <div className="restaurant-ambiance">
                                    {restaurant.ambiance}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Restaurants;