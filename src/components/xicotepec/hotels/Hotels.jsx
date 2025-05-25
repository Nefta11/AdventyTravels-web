import  { useState } from 'react';
import {
    FaStar,
    FaTimes,
    FaMapMarkerAlt,
    FaWifi,
    FaSwimmingPool,
    FaParking,
    FaUtensils,
    FaCoffee,
    FaDumbbell,
    FaSpa,
    FaChild,
    FaPhone,
    FaClock,
    FaUsers,
    FaConciergeBell
} from 'react-icons/fa';
import './Hotels.css';

const Hotels = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);

    const hotels = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop",
            name: "Hotel Casablanca Xicotepec",
            category: "Hotel de Lujo",
            stars: 4,
            location: "Av. Juárez 264, Centro",
            price: "Desde $1,200 MXN",
            shortDescription: "Hotel 4 estrellas con spa y gimnasio",
            rating: 8.7,
            fullDescription: "Hotel Casablanca Xicotepec es un moderno hotel de 4 estrellas ubicado en una zona privilegiada de Xicotepec. Ofrece habitaciones de estilo minimalista con todas las comodidades modernas, además de un completo centro de spa y bienestar que lo convierte en la opción perfecta para una estancia relajante.",
            amenities: [
                { icon: FaWifi, name: "WiFi Gratis" },
                { icon: FaSwimmingPool, name: "Piscina Exterior" },
                { icon: FaParking, name: "Estacionamiento Gratuito" },
                { icon: FaUtensils, name: "Restaurante" },
                { icon: FaSpa, name: "Centro de Spa" },
                { icon: FaDumbbell, name: "Gimnasio" },
                { icon: FaChild, name: "Zona Infantil" },
                { icon: FaConciergeBell, name: "Servicio 24h" }
            ],
            roomFeatures: [
                "26 habitaciones amplias y cómodas",
                "TV de pantalla plana por cable",
                "Escritorio de trabajo",
                "Baño privado con artículos de aseo",
                "Aire acondicionado y calefacción",
                "Ropa de cama de calidad premium"
            ],
            services: [
                "Recepción 24 horas",
                "Servicio de habitaciones",
                "Centro de spa y bienestar",
                "Servicio de lavandería",
                "Información turística",
                "Instalaciones para reuniones",
                "Servicio de temazcal"
            ],
            checkIn: "14:00 - 20:00",
            checkOut: "Hasta las 12:00",
            contact: "+52 764 764 1709"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=350&fit=crop",
            name: "Hotel Villa de Cortez",
            category: "Hotel Boutique",
            stars: 4,
            location: "Centro Histórico",
            price: "Desde $1,100 MXN",
            shortDescription: "Vista espectacular con restaurante gourmet",
            rating: 7.9,
            fullDescription: "Hotel Villa de Cortez es un elegante hotel boutique de 4 estrellas que ofrece una experiencia única con vistas espectaculares de la Sierra Norte de Puebla. Su ubicación privilegiada y su excelente restaurante lo convierten en una opción ideal para huéspedes que buscan comodidad y una experiencia gastronómica excepcional.",
            amenities: [
                { icon: FaWifi, name: "WiFi Gratis" },
                { icon: FaUtensils, name: "Restaurante Gourmet" },
                { icon: FaParking, name: "Estacionamiento" },
                { icon: FaCoffee, name: "Bar & Lounge" },
                { icon: FaConciergeBell, name: "Servicio de Habitaciones" },
                { icon: FaMapMarkerAlt, name: "Vista Panorámica" }
            ],
            roomFeatures: [
                "Habitaciones con vista a la sierra",
                "Decoración tipo hacienda",
                "TV de pantalla plana",
                "Baño privado completo",
                "Balcón privado en suites",
                "Amenidades de cortesía"
            ],
            services: [
                "Recepción 24 horas",
                "Restaurante con comida regional",
                "Bar con vista panorámica",
                "Servicio de habitaciones",
                "Tours y excursiones",
                "Eventos y celebraciones"
            ],
            checkIn: "15:00",
            checkOut: "12:00",
            contact: "+52 764 XXX XXXX"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=350&fit=crop",
            name: "Hotel Mi Ranchito",
            category: "Hotel Familiar",
            stars: 4,
            location: "Zona Turística",
            price: "Desde $850 MXN",
            shortDescription: "Ambiente familiar con alberca y jardines",
            rating: 8.5,
            fullDescription: "Hotel Mi Ranchito es un acogedor hotel de 4 estrellas diseñado especialmente para familias. Con amplios jardines, alberca al aire libre y un ambiente relajante, ofrece la combinación perfecta entre comodidad moderna y calidez hogareña en un entorno natural privilegiado.",
            amenities: [
                { icon: FaSwimmingPool, name: "Alberca al Aire Libre" },
                { icon: FaDumbbell, name: "Gimnasio" },
                { icon: FaUtensils, name: "Restaurante Familiar" },
                { icon: FaWifi, name: "WiFi Gratis" },
                { icon: FaParking, name: "Estacionamiento" },
                { icon: FaChild, name: "Área de Juegos" }
            ],
            roomFeatures: [
                "Habitaciones familiares amplias",
                "Vista a los jardines",
                "TV por cable",
                "Aire acondicionado",
                "Baño completo con regadera",
                "Terraza o balcón"
            ],
            services: [
                "Recepción diurna",
                "Restaurante con menú infantil",
                "Actividades para niños",
                "Jardín con área de descanso",
                "Información turística",
                "Servicios de limpieza"
            ],
            checkIn: "14:00",
            checkOut: "12:00",
            contact: "+52 764 XXX XXXX"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=350&fit=crop",
            name: "Cabañas y Camping Aroma",
            category: "Eco Lodge",
            stars: 3,
            location: "Zona Natural",
            price: "Desde $650 MXN",
            shortDescription: "Experiencia única en contacto con la naturaleza",
            rating: 8.2,
            fullDescription: "Cabañas y Camping Aroma ofrece una experiencia única de hospedaje en contacto directo con la naturaleza. Ubicado en un entorno privilegiado con vista al lago y rodeado de vegetación exuberante, es perfecto para quienes buscan desconectarse de la ciudad y disfrutar de la tranquilidad de la sierra poblana.",
            amenities: [
                { icon: FaWifi, name: "WiFi Gratis" },
                { icon: FaMapMarkerAlt, name: "Vista al Lago" },
                { icon: FaParking, name: "Estacionamiento" },
                { icon: FaCoffee, name: "Área de Fogatas" },
                { icon: FaChild, name: "Actividades al Aire Libre" }
            ],
            roomFeatures: [
                "Cabañas de madera rústicas",
                "Vista directa al lago",
                "Baño privado",
                "Terraza con hamaca",
                "Chimenea en algunas cabañas",
                "Ropa de cama incluida"
            ],
            services: [
                "Atención personalizada",
                "Desayuno casero disponible",
                "Tours de naturaleza",
                "Actividades de camping",
                "Fogatas nocturnas",
                "Senderismo guiado"
            ],
            checkIn: "15:00",
            checkOut: "11:00",
            contact: "+52 764 XXX XXXX"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=350&fit=crop",
            name: "Hotel Plaza San Carlos",
            category: "Hotel Clásico",
            stars: 3,
            location: "Centro Histórico",
            price: "Desde $750 MXN",
            shortDescription: "Ubicación perfecta en el corazón de Xicotepec",
            rating: 8.6,
            fullDescription: "Hotel Plaza San Carlos es un clásico hotel de 3 estrellas ubicado estratégicamente en el centro histórico de Xicotepec. Su excelente ubicación permite a los huéspedes estar a pocos pasos de los principales atractivos turísticos, restaurantes y tiendas del pueblo mágico.",
            amenities: [
                { icon: FaWifi, name: "WiFi Gratis" },
                { icon: FaUtensils, name: "Restaurante" },
                { icon: FaParking, name: "Estacionamiento" },
                { icon: FaConciergeBell, name: "Recepción 24h" },
                { icon: FaMapMarkerAlt, name: "Centro Histórico" }
            ],
            roomFeatures: [
                "Habitaciones tradicionales",
                "TV por cable",
                "Baño privado",
                "Aire acondicionado",
                "Vista al centro histórico",
                "Escritorio de trabajo"
            ],
            services: [
                "Recepción 24 horas",
                "Restaurante con comida local",
                "Información turística",
                "Servicio de lavandería",
                "Tours a pie por el centro",
                "Desayuno continental"
            ],
            checkIn: "14:00",
            checkOut: "12:00",
            contact: "+52 764 XXX XXXX"
        }
    ];

    const openModal = (hotel) => {
        setSelectedHotel(hotel);
    };

    const closeModal = () => {
        setSelectedHotel(null);
    };

    const renderStars = (stars) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`hotels-component-star ${index < stars ? 'filled' : ''}`}
            />
        ));
    };

    return (
        <section className="hotels-component-wrapper">
            <div className="hotels-component-container">
                {/* Título principal */}
                <div className="hotels-component-header">
                    <h2 className="hotels-component-main-title">Hoteles</h2>
                </div>

                {/* Grid de hoteles */}
                <div className="hotels-component-grid">
                    {hotels.map((hotel) => (
                        <div
                            key={hotel.id}
                            className="hotels-component-card"
                            onClick={() => openModal(hotel)}
                        >
                            <div
                                className="hotels-component-card-image"
                                style={{ backgroundImage: `url(${hotel.image})` }}
                            >
                                <div className="hotels-component-card-overlay">
                                    <div className="hotels-component-card-category">
                                        {hotel.category}
                                    </div>
                                    <div className="hotels-component-card-content">
                                        <h3 className="hotels-component-card-title">
                                            {hotel.name}
                                        </h3>
                                        <div className="hotels-component-card-stars">
                                            {renderStars(hotel.stars)}
                                        </div>
                                        <p className="hotels-component-card-description">
                                            {hotel.shortDescription}
                                        </p>
                                        <div className="hotels-component-card-location">
                                            <FaMapMarkerAlt className="hotels-component-card-location-icon" />
                                            {hotel.location}
                                        </div>
                                        <div className="hotels-component-card-price">
                                            {hotel.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedHotel && (
                <div className="hotels-component-modal-backdrop" onClick={closeModal}>
                    <div className="hotels-component-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="hotels-component-modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className="hotels-component-modal-header">
                            <div
                                className="hotels-component-modal-image"
                                style={{ backgroundImage: `url(${selectedHotel.image})` }}
                            />
                            <div className="hotels-component-modal-header-content">
                                <div className="hotels-component-modal-category">
                                    {selectedHotel.category}
                                </div>
                                <h2 className="hotels-component-modal-title">
                                    {selectedHotel.name}
                                </h2>
                                <div className="hotels-component-modal-stars">
                                    {renderStars(selectedHotel.stars)}
                                    <span className="hotels-component-modal-rating">
                                        {selectedHotel.rating}/10
                                    </span>
                                </div>
                                <div className="hotels-component-modal-meta">
                                    <div className="hotels-component-modal-meta-item">
                                        <FaMapMarkerAlt className="hotels-component-modal-meta-icon" />
                                        <span>{selectedHotel.location}</span>
                                    </div>
                                    <div className="hotels-component-modal-meta-item">
                                        <FaPhone className="hotels-component-modal-meta-icon" />
                                        <span>{selectedHotel.contact}</span>
                                    </div>
                                </div>
                                <div className="hotels-component-modal-price">
                                    {selectedHotel.price}
                                </div>
                            </div>
                        </div>

                        <div className="hotels-component-modal-body">
                            <div className="hotels-component-modal-section">
                                <h3 className="hotels-component-modal-section-title">
                                    <FaConciergeBell className="hotels-component-modal-section-icon" />
                                    Acerca del Hotel
                                </h3>
                                <p className="hotels-component-modal-description">
                                    {selectedHotel.fullDescription}
                                </p>
                            </div>

                            <div className="hotels-component-modal-section">
                                <h3 className="hotels-component-modal-section-title">
                                    <FaWifi className="hotels-component-modal-section-icon" />
                                    Amenidades
                                </h3>
                                <div className="hotels-component-modal-amenities">
                                    {selectedHotel.amenities.map((amenity, index) => (
                                        <div key={index} className="hotels-component-modal-amenity">
                                            <amenity.icon className="hotels-component-modal-amenity-icon" />
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="hotels-component-modal-section">
                                <h3 className="hotels-component-modal-section-title">
                                    <FaUsers className="hotels-component-modal-section-icon" />
                                    Habitaciones
                                </h3>
                                <ul className="hotels-component-modal-features">
                                    {selectedHotel.roomFeatures.map((feature, index) => (
                                        <li key={index} className="hotels-component-modal-feature">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="hotels-component-modal-section">
                                <h3 className="hotels-component-modal-section-title">
                                    <FaConciergeBell className="hotels-component-modal-section-icon" />
                                    Servicios
                                </h3>
                                <ul className="hotels-component-modal-services">
                                    {selectedHotel.services.map((service, index) => (
                                        <li key={index} className="hotels-component-modal-service">
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="hotels-component-modal-section">
                                <h3 className="hotels-component-modal-section-title">
                                    <FaClock className="hotels-component-modal-section-icon" />
                                    Horarios
                                </h3>
                                <div className="hotels-component-modal-schedule">
                                    <div className="hotels-component-modal-schedule-item">
                                        <strong>Check-in:</strong> {selectedHotel.checkIn}
                                    </div>
                                    <div className="hotels-component-modal-schedule-item">
                                        <strong>Check-out:</strong> {selectedHotel.checkOut}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hotels;