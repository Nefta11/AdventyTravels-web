import { useState } from 'react';
import { FaCalendarAlt, FaTimes, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import './Festivals.css';

const Festivals = () => {
    const [selectedFestival, setSelectedFestival] = useState(null);

    const festivals = [
        {
            id: 1,
            image: "https://www.xicotepec.com.mx/wp-content/uploads/2022/04/image95.png",
            title: "Fiesta de San Juan Bautista",
            date: "24 de Junio",
            location: "La Xochipila y Centro Histórico",
            shortDescription: "Fusión única de tradiciones católicas y paganas",
            fullDescription: "Cada 24 de junio se lleva a cabo en Xicotepec una fiesta donde se mezclan tradiciones católicas y paganas. Es el día en que se recuerda al patrón del pueblo según el calendario religioso, pero para los indígenas se trata de Juan Techachalco, el personaje que encarna al mismo tiempo los atributos de San Juan y de Xochipilli, el dios de las flores y los brujos.",
            activities: [
                "Procesión desde el centro hasta La Xochipila",
                "Música del teponaxtle del Palacio Municipal",
                "Viacrucis por las principales calles",
                "Danzas tradicionales",
                "Ceremonias de curanderos y brujos"
            ],
            significance: "San Juan Bautista es el santo patrono de Xicotepec. La festividad representa la fusión de la cultura católica española con las creencias indígenas totonacas, donde Juan Techachalco simboliza tanto al santo cristiano como a Xochipilli, el dios prehispánico de las flores y la medicina tradicional."
        },
        {
            id: 2,
            image: "https://sic.cultura.gob.mx/images/48058",
            title: "Fiestas de la Virgen de Guadalupe",
            date: "12 de Diciembre",
            location: "Cerro del Tabacal",
            shortDescription: "Peregrinación a la Virgen Monumental",
            fullDescription: "El día 12 de Diciembre acuden cientos de fieles devotos a venerar a la Virgen de Guadalupe. Se trasladan desde sus hogares hasta la monumental Virgen de Guadalupe ubicada en el Cerro del Tabacal, lugar donde se presentan danzas en honor a la virgen.",
            activities: [
                "Peregrinación al Cerro del Tabacal",
                "Danzas tradicionales en honor a la Virgen",
                "Tradición de 'La Tranquita' con niños representando a Juan Diego",
                "Ofrendas florales",
                "Misas y procesiones",
                "Música folklórica y tradicional"
            ],
            significance: "Esta es una de las fiestas más representativas de Xicotepec, llena de magia y colorido. La monumental Virgen de Guadalupe en el Cerro del Tabacal se ha convertido en un importante centro de peregrinación regional, donde la devoción guadalupana se fusiona con las tradiciones locales."
        },
        {
            id: 3,
            image: "https://www.periodicocentral.mx/wp-content/uploads/2022/04/Todo-listo-para-la-feria-de-Xicotepec-2022.-Aqui-te-contamos-los-detalles.webp",
            title: "Expo-Feria Xicotepec",
            date: "Semana Santa (Marzo-Abril)",
            location: "Centro de la Ciudad",
            shortDescription: "La feria más importante de la Sierra Norte",
            fullDescription: "Expo-Feria anual de Xicotepec, cultural, artesanal de fruticultura y ganadera. Con 63 años de celebración, se ha convertido en un referente de la vida de la sierra norte. Presenta artistas de talla nacional e internacional además de juegos mecánicos y pirotecnia para toda la familia.",
            activities: [
                "Exposiciones ganaderas y de fruticultura",
                "Muestra artesanal regional",
                "Conciertos de artistas nacionales e internacionales",
                "Feria gastronómica con especialidades locales",
                "Juegos mecánicos y diversiones",
                "Espectáculos de pirotecnia",
                "Competencias deportivas y culturales"
            ],
            significance: "La Expo-Feria de Xicotepec es la más importante de la Sierra Norte de Puebla. Durante más de 6 décadas ha sido el escaparate principal de las riquezas culturales, gastronómicas, artesanales y turísticas que ofrece el municipio, atrayendo visitantes de toda la región."
        },
        {
            id: 4,
            image: "https://sic.cultura.gob.mx/images/48117",
            title: "Carnaval Xicotepec",
            date: "8 días antes del Miércoles de Ceniza",
            location: "Centro y Cuatro Barrios Tradicionales",
            shortDescription: "Tradición de huehues y danzas coloridas",
            fullDescription: "Desde 1950, grupos de danzantes denominados huehues (sabio/viejo) se reúnen en los cuatro barrios del Xicotepec antiguo: El Rosario, Guerrero, Hidalgo y Misericordia. Bordan de colores el centro de la ciudad, bailando al compás de un trío de jarana, violín y guitarra.",
            activities: [
                "Danzas de los huehues en los cuatro barrios",
                "Música tradicional con jarana, violín y guitarra",
                "Desfiles con máscaras y trajes coloridos",
                "Competencias de baile tradicional",
                "Representaciones teatrales callejeras",
                "Festivales gastronómicos",
                "Actividades culturales en el centro histórico"
            ],
            significance: "El Carnaval de Xicotepec es característico de la Zona Norte del Estado de Puebla. Los huehues representan la sabiduría ancestral, y sus danzas coloridas simbolizan la celebración de la vida antes del período de reflexión cuaresmal. Es una tradición que mantiene vivas las raíces culturales de la región."
        }
    ];

    const openModal = (festival) => {
        setSelectedFestival(festival);
    };

    const closeModal = () => {
        setSelectedFestival(null);
    };

    return (
        <section className="festivals-component-wrapper" id="celebraciones-section">
            <div className="festivals-component-container">
                {/* Título principal */}
                <div className="festivals-component-header">
                    <h2 className="festivals-component-main-title">Celebraciones</h2>
                </div>

                {/* Grid de festivales */}
                <div className="festivals-component-grid">
                    {festivals.map((festival) => (
                        <div
                            key={festival.id}
                            className="festivals-component-card"
                            onClick={() => openModal(festival)}
                        >
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
                                        <h3 className="festivals-component-card-title">
                                            {festival.title}
                                        </h3>
                                        <p className="festivals-component-card-description">
                                            {festival.shortDescription}
                                        </p>
                                        <div className="festivals-component-card-location">
                                            <FaMapMarkerAlt className="festivals-component-card-location-icon" />
                                            {festival.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedFestival && (
                <div className="festivals-component-modal-backdrop" onClick={closeModal}>
                    <div className="festivals-component-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="festivals-component-modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className="festivals-component-modal-header">
                            <div
                                className="festivals-component-modal-image"
                                style={{ backgroundImage: `url(${selectedFestival.image})` }}
                            />
                            <div className="festivals-component-modal-header-content">
                                <h2 className="festivals-component-modal-title">
                                    {selectedFestival.title}
                                </h2>
                                <div className="festivals-component-modal-meta">
                                    <div className="festivals-component-modal-meta-item">
                                        <FaCalendarAlt className="festivals-component-modal-meta-icon" />
                                        <span>{selectedFestival.date}</span>
                                    </div>
                                    <div className="festivals-component-modal-meta-item">
                                        <FaMapMarkerAlt className="festivals-component-modal-meta-icon" />
                                        <span>{selectedFestival.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="festivals-component-modal-body">
                            <div className="festivals-component-modal-section">
                                <h3 className="festivals-component-modal-section-title">
                                    <FaUsers className="festivals-component-modal-section-icon" />
                                    Descripción
                                </h3>
                                <p className="festivals-component-modal-description">
                                    {selectedFestival.fullDescription}
                                </p>
                            </div>

                            <div className="festivals-component-modal-section">
                                <h3 className="festivals-component-modal-section-title">
                                    <FaClock className="festivals-component-modal-section-icon" />
                                    Actividades Principales
                                </h3>
                                <ul className="festivals-component-modal-activities">
                                    {selectedFestival.activities.map((activity, index) => (
                                        <li key={index} className="festivals-component-modal-activity">
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="festivals-component-modal-section">
                                <h3 className="festivals-component-modal-section-title">
                                    <FaMapMarkerAlt className="festivals-component-modal-section-icon" />
                                    Significado Cultural
                                </h3>
                                <p className="festivals-component-modal-significance">
                                    {selectedFestival.significance}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Festivals;