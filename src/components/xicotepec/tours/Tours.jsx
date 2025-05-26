import { FaClock, FaUsers } from 'react-icons/fa';
import './Tours.css';

const Tours = () => {
    const tours = [
        {
            id: 1,
            image: "https://mexicotrip.mx/uploads/images/202302/image_870x_63f3d0a960d1a.jpg",
            title: "Ruta del Café en Xicotepec saliendo desde la Ciudad de México",
            category: "Tour Gastronómico",
            duration: "12 horas",
            groupSize: "2-15 personas",
            price: "Desde $1,800 MXN",
            difficulty: "Fácil",
            location: "XICOTEPEC",
            shortDescription: "Experiencia completa del café desde la siembra hasta la taza"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&h=350&fit=crop",
            title: "Tour Ecoturístico 'Senderos Xicotepec'",
            category: "Ecoturismo y Aventura",
            duration: "6-8 horas",
            groupSize: "4-12 personas",
            price: "Desde $950 MXN",
            difficulty: "Moderado",
            location: "XICOTEPEC",
            shortDescription: "150 km de senderos en bosque mesófilo de montaña"
        }
    ];

    return (
        <section className="tours-component-wrapper">
            <div className="tours-component-container">
                {/* Título principal */}
                <div className="tours-component-header">
                    <h2 className="tours-component-main-title">Tours</h2>
                </div>

                {/* Grid de tours */}
                <div className="tours-component-grid">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="tours-component-card"
                        >
                            <div
                                className="tours-component-card-image"
                                style={{ backgroundImage: `url(${tour.image})` }}
                            >
                                <div className="tours-component-card-overlay">
                                    <div className="tours-component-card-category">
                                        {tour.category}
                                    </div>
                                    <div className="tours-component-card-content">
                                        <div className="tours-component-card-location">
                                            {tour.location}
                                        </div>
                                        <h3 className="tours-component-card-title">
                                            {tour.title}
                                        </h3>
                                        <p className="tours-component-card-description">
                                            {tour.shortDescription}
                                        </p>
                                        <div className="tours-component-card-details">
                                            <div className="tours-component-card-detail">
                                                <FaClock className="tours-component-card-detail-icon" />
                                                <span>{tour.duration}</span>
                                            </div>
                                            <div className="tours-component-card-detail">
                                                <FaUsers className="tours-component-card-detail-icon" />
                                                <span>{tour.groupSize}</span>
                                            </div>
                                        </div>
                                        <div className="tours-component-card-price">
                                            {tour.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tours;