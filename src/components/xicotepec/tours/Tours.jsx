import { useState } from 'react';
import {
    FaClock,
    FaTimes,
    FaMapMarkerAlt,
    FaUsers,
    FaLeaf,
    FaCamera,
    FaRoute,
    FaPhone,
    FaCalendarAlt,
    FaInfoCircle
} from 'react-icons/fa';
import './Tours.css';

const Tours = () => {
    const [selectedTour, setSelectedTour] = useState(null);

    const tours = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1559056961-84eedeea7c26?w=500&h=350&fit=crop",
            title: "Ruta del Café en Xicotepec saliendo desde la Ciudad de México",
            category: "Tour Gastronómico",
            duration: "12 horas",
            groupSize: "2-15 personas",
            price: "Desde $1,800 MXN",
            difficulty: "Fácil",
            location: "XICOTEPEC",
            shortDescription: "Experiencia completa del café desde la siembra hasta la taza",
            fullDescription: "La Ruta del Café en Xicotepec es un recorrido único que sumerge a los visitantes en la riqueza histórica, cultural y natural de la Sierra Norte de Puebla. Este tour de día completo desde la Ciudad de México incluye visita a plantaciones de café orgánico, proceso de beneficiado, degustación profesional y recorrido por el pueblo mágico de Xicotepec.",
            highlights: [
                "Visita a la Finca Los Pinos - café orgánico y carbono neutral",
                "Recorrido por plantaciones de café arábiga de altura",
                "Proceso completo: siembra, corte, beneficiado y tostado",
                "Cata profesional con Don Jaime (60 años de experiencia)",
                "Desayuno tradicional en casa típica de la región",
                "Visita al pueblo mágico de Xicotepec",
                "Compra de café recién tostado y artesanías"
            ],
            included: [
                "Transporte ida y vuelta desde Ciudad de México",
                "Desayuno tradicional en la finca",
                "Tour guiado por plantaciones y beneficio",
                "Cata de café con experto local",
                "Comida típica de la región",
                "Guía especializado en café",
                "Degustación de variedades Oro Azteca y Costa Rica 95"
            ],
            itinerary: [
                "05:30 - Salida desde Ciudad de México",
                "09:00 - Llegada a Xicotepec y desayuno",
                "10:00 - Recorrido por plantaciones de café",
                "12:00 - Proceso de beneficiado y tostado",
                "13:30 - Cata profesional de café",
                "15:00 - Comida tradicional",
                "16:30 - Tour por Xicotepec centro",
                "18:00 - Tiempo libre para compras",
                "19:00 - Regreso a Ciudad de México"
            ],
            recommendations: [
                "Ropa cómoda y zapatos antiderrapantes",
                "Suéter o chamarra (temperatura variable)",
                "Bloqueador solar biodegradable",
                "Cámara fotográfica",
                "Dinero extra para compras"
            ],
            contact: "+52 55 XXXX XXXX",
            bestMonths: "Octubre a Marzo (temporada de cosecha)"
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
            shortDescription: "150 km de senderos en bosque mesófilo de montaña",
            fullDescription: "Los Senderos de Xicotepec son el primer proyecto ecoturístico de Ultra Trail de México. Una experiencia inmersiva entre nubes, cerros, agua y vegetación exuberante. Con 150 kilómetros de senderos habilitados para caminatas y ciclismo de montaña, es perfecto para turismo deportivo, de conservación y aventura.",
            highlights: [
                "150 km de senderos señalizados y marcados",
                "Bosque mesófilo de montaña (1% del territorio nacional)",
                "Tres puntos de salida: San Pedro, Nactanca y Centro",
                "Cascadas, manantiales y miradores naturales",
                "Observación de flora y fauna endémica",
                "Rappel en Cascada El Salto (opcional)",
                "Exploración de Las Nactancas (cavernas y grutas)"
            ],
            included: [
                "Guía especializado en ecoturismo",
                "Equipo de seguridad básico",
                "Mapa de senderos",
                "Snacks energéticos",
                "Agua purificada",
                "Seguro de responsabilidad civil",
                "Certificado de participación"
            ],
            itinerary: [
                "08:00 - Encuentro en punto de salida elegido",
                "08:30 - Briefing de seguridad y equipo",
                "09:00 - Inicio del sendero principal",
                "11:00 - Parada en mirador panorámico",
                "12:30 - Almuerzo en área natural",
                "14:00 - Exploración de cascadas",
                "15:30 - Actividades opcionales (rappel)",
                "16:30 - Regreso por sendero alternativo",
                "17:30 - Fin del tour"
            ],
            recommendations: [
                "Excelente condición física requerida",
                "Ropa deportiva y botas de montaña",
                "Mochila de hidratación",
                "Protector solar y repelente",
                "Chamarra impermeable",
                "Cámara resistente al agua"
            ],
            contact: "+52 764 XXX XXXX",
            bestMonths: "Todo el año (época seca: Noviembre a Abril)"
        }
    ];

    const openModal = (tour) => {
        setSelectedTour(tour);
    };

    const closeModal = () => {
        setSelectedTour(null);
    };

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
                            onClick={() => openModal(tour)}
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

            {/* Modal */}
            {selectedTour && (
                <div className="tours-component-modal-backdrop" onClick={closeModal}>
                    <div className="tours-component-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="tours-component-modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className="tours-component-modal-header">
                            <div
                                className="tours-component-modal-image"
                                style={{ backgroundImage: `url(${selectedTour.image})` }}
                            />
                            <div className="tours-component-modal-header-content">
                                <div className="tours-component-modal-category">
                                    {selectedTour.category}
                                </div>
                                <h2 className="tours-component-modal-title">
                                    {selectedTour.title}
                                </h2>
                                <div className="tours-component-modal-meta">
                                    <div className="tours-component-modal-meta-item">
                                        <FaClock className="tours-component-modal-meta-icon" />
                                        <span>{selectedTour.duration}</span>
                                    </div>
                                    <div className="tours-component-modal-meta-item">
                                        <FaUsers className="tours-component-modal-meta-icon" />
                                        <span>{selectedTour.groupSize}</span>
                                    </div>
                                    <div className="tours-component-modal-meta-item">
                                        <FaMapMarkerAlt className="tours-component-modal-meta-icon" />
                                        <span>{selectedTour.difficulty}</span>
                                    </div>
                                </div>
                                <div className="tours-component-modal-price">
                                    {selectedTour.price}
                                </div>
                            </div>
                        </div>

                        <div className="tours-component-modal-body">
                            <div className="tours-component-modal-section">
                                <h3 className="tours-component-modal-section-title">
                                    <FaInfoCircle className="tours-component-modal-section-icon" />
                                    Descripción del Tour
                                </h3>
                                <p className="tours-component-modal-description">
                                    {selectedTour.fullDescription}
                                </p>
                            </div>

                            <div className="tours-component-modal-section">
                                <h3 className="tours-component-modal-section-title">
                                    <FaLeaf className="tours-component-modal-section-icon" />
                                    Puntos Destacados
                                </h3>
                                <ul className="tours-component-modal-highlights">
                                    {selectedTour.highlights.map((highlight, index) => (
                                        <li key={index} className="tours-component-modal-highlight">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tours-component-modal-section">
                                <h3 className="tours-component-modal-section-title">
                                    <FaRoute className="tours-component-modal-section-icon" />
                                    Incluye
                                </h3>
                                <ul className="tours-component-modal-included">
                                    {selectedTour.included.map((item, index) => (
                                        <li key={index} className="tours-component-modal-included-item">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tours-component-modal-section">
                                <h3 className="tours-component-modal-section-title">
                                    <FaCalendarAlt className="tours-component-modal-section-icon" />
                                    Itinerario
                                </h3>
                                <div className="tours-component-modal-itinerary">
                                    {selectedTour.itinerary.map((item, index) => (
                                        <div key={index} className="tours-component-modal-itinerary-item">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="tours-component-modal-section">
                                <h3 className="tours-component-modal-section-title">
                                    <FaCamera className="tours-component-modal-section-icon" />
                                    Recomendaciones
                                </h3>
                                <ul className="tours-component-modal-recommendations">
                                    {selectedTour.recommendations.map((recommendation, index) => (
                                        <li key={index} className="tours-component-modal-recommendation">
                                            {recommendation}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tours-component-modal-section">
                                <h3 className="tours-component-modal-section-title">
                                    <FaPhone className="tours-component-modal-section-icon" />
                                    Información Adicional
                                </h3>
                                <div className="tours-component-modal-contact">
                                    <div className="tours-component-modal-contact-item">
                                        <strong>Contacto:</strong> {selectedTour.contact}
                                    </div>
                                    <div className="tours-component-modal-contact-item">
                                        <strong>Mejor época:</strong> {selectedTour.bestMonths}
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

export default Tours;