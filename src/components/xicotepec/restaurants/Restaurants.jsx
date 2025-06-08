import { FaClock, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
import './Restaurants.css';

const Restaurants = () => {
    const restaurants = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop",
            name: "La Choza",            category: "Cocina Regional",
            cuisine: "Española y Mexicana",
            hours: "8:00 AM - 10:00 PM",
            priceRange: "$",
            location: "Reforma 100, Centro",
            specialty: "Tradición desde 1986, ubicado en el antiguo Cine Garza",
            ambiance: "Familiar y tradicional"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=400&fit=crop",
            name: "Gran Tradición",            category: "Cocina Tradicional",
            cuisine: "Comida Mexicana",
            hours: "9:00 AM - 9:00 PM",
            priceRange: "$",
            location: "Plaza de la Constitución, Centro",
            specialty: "Platillos tradicionales de la región serrana",
            ambiance: "Clásico y acogedor"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=400&fit=crop",
            name: "Restaurant Pili",            category: "Restaurante Bar",
            cuisine: "Cocina Regional",
            hours: "12:00 PM - 11:00 PM",
            priceRange: "$",
            location: "Boulevard Benito Juárez",
            specialty: "Molotes de tinga y café de la región",
            ambiance: "Ambiente típico de pueblo mágico"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
            name: "Sazón Mágico",            category: "Restaurante y Café",
            cuisine: "Café Gourmet y Regional",
            hours: "7:00 AM - 9:00 PM",
            priceRange: "$",
            location: "Centro Histórico",
            specialty: "Café de Xicotepec y repostería artesanal",
            ambiance: "Mágico y aromático"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=400&fit=crop",
            name: "La Gloria del Mar",            category: "Mariscos",
            cuisine: "Cocina de Mar",
            hours: "11:00 AM - 10:00 PM",
            priceRange: "$",
            location: "Av. Juárez",
            specialty: "Acamayas con salsa macha de hormiga chicala",
            ambiance: "Fresco y familiar"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=500&h=400&fit=crop",
            name: "La Finca Burger Grill",            category: "Parrilla Moderna",
            cuisine: "Hamburguesas Gourmet",
            hours: "2:00 PM - 12:00 AM",
            priceRange: "$",
            location: "Zona Centro",
            specialty: "Hamburguesas artesanales y licores de la región",
            ambiance: "Moderno y relajado"
        }
    ];

    return (
        <section className="restaurants-wrapper" id="restaurants-section">
            <div className="restaurants-container">                {/* Título principal */}
                <div className="restaurants-header">
                    <h1 className="restaurants-main-title">Restaurantes</h1>
                    <div className="restaurants-main-title-underline"></div>
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
                                />                                <div className="restaurant-category-badge">
                                    {restaurant.category}
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