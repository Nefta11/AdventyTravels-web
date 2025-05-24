import { useState } from 'react';
import {
    FaBus,
    FaPlane,
    FaRoute,
    FaStar,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaChurch,
    FaExpandArrowsAlt,
    FaTimes
} from 'react-icons/fa';
import './DestinationInfo.css';

const DestinationInfo = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        {
            id: 1,
            url: "https://www.xicotepec.com.mx/wp-content/uploads/2022/02/cropped-Cascadas-de-Tuliman.jpg",
            alt: "Cascada en la naturaleza",
            title: "Cascadas naturales"
        },
        {
            id: 2,
            url: "https://images.milenio.com/L6rnIA_OndV_BkbLhT5wEamQ4q0=/942x532/uploads/media/2020/12/12/virgen-de-xicotepec-andres-lobato.jpg",
            alt: "Virgen de Guadalupe",
            title: "Virgen monumental"
        },
        {
            id: 3,
            url: "https://www.xicotepec.com.mx/wp-content/uploads/2022/02/cropped-20120519_155954.jpg",
            alt: "Ruinas arqueológicas",
            title: "Sitios arqueológicos"
        },
    ];

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="destination-info" className="destination-info">
            <div className="destination-container">

                {/* Título principal */}
                <div className="main-title-wrapper">
                    <h1 className="main-title">Vive su magia</h1>
                    <div className="main-title-underline"></div>
                </div>

                {/* Contenido principal y sidebar */}
                <div className="destination-content-wrapper">

                    {/* Contenido principal */}
                    <div className="destination-main-content">

                        {/* Su magia */}
                        <article className="destination-section magic-section">
                            <h2 className="section-title">Su magia</h2>
                            <p className="section-text">
                                Ensimismado, <strong>ajeno al resto del mundo por estar ubicado en plena sierra poblana</strong>,
                                Xicotepec pasa sus días entre árboles de aguacate. Su clima es cálido, también su gente
                                acostumbrada al aroma que el café desprende. Porque si algo abunda alrededor del pueblo son
                                <strong> cafetales y montañas que llenan los ojos de verde</strong>. Aquí, además, se tiene
                                fe no solo en los santos de la religión que trajeron consigo los españoles,
                                <strong> también en los dioses prehispánicos y en los magos</strong>.
                            </p>
                        </article>

                        {/* El motivo */}
                        <article className="destination-section motive-section">
                            <h2 className="section-title">El motivo</h2>
                            <p className="section-subtitle">Sus costumbres místicas</p>

                            <div className="motive-points">
                                <div className="motive-point">
                                    <FaMapMarkerAlt className="motive-icon" />
                                    <p>Ubicada en pleno centro, <strong>La Xochipila</strong> es una peña que desde siempre ha fungido como centro ceremonial.</p>
                                </div>

                                <div className="motive-point">
                                    <FaStar className="motive-icon" />
                                    <p>Su existencia concentra la energía de un pueblo de <strong>costumbres católicas y paganas</strong> al mismo tiempo.</p>
                                </div>

                                <div className="motive-point">
                                    <FaCalendarAlt className="motive-icon" />
                                    <p>Cada 24 de junio se celebra en la peña tanto a San Juan Bautista como a <strong>Xochipilli, el dios de las flores y los brujos</strong>.</p>
                                </div>

                                <div className="motive-point">
                                    <FaChurch className="motive-icon" />
                                    <p>En el Palacio Municipal está guardado <strong>el teponaxtle</strong>, un preciado instrumento de madera de ébano que acompaña la fiesta grande.</p>
                                </div>
                            </div>
                        </article>

                        {/* Lo básico */}
                        <article className="destination-section basic-section">
                            <h2 className="section-title">Lo básico</h2>
                            <div className="basic-info">
                                <p>Acudir a <strong>La Xochipila</strong> cualquier día y <strong>pedirle a los curanderos una limpia</strong>.</p>
                            </div>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <aside className="destination-sidebar">
                        <div className="sidebar-content">

                            {/* Información de transporte */}
                            <div className="transport-info">
                                <div className="transport-item">
                                    <div className="transport-header">
                                        <FaBus className="transport-icon bus-icon" />
                                        <h3>Autobús:</h3>
                                    </div>
                                    <p>ATAH y Verdes salen de la Angelópolis.</p>
                                </div>

                                <div className="transport-item">
                                    <div className="transport-header">
                                        <FaPlane className="transport-icon plane-icon" />
                                        <h3>Avión:</h3>
                                    </div>
                                    <p>Aeromar, Aeroméxico y Volaris llegan a la Angelópolis.</p>
                                </div>
                            </div>

                            {/* Botón de ruta */}
                            <button className="route-button">
                                <FaRoute className="route-icon" />
                                Trazar ruta
                            </button>
                        </div>

                        {/* Galería */}
                        <article className="destination-section gallery-section">
                            <h2 className="section-title">Galería</h2>
                            <div className="destination-gallery">
                                {galleryImages.map((image) => (
                                    <div
                                        key={image.id}
                                        className="gallery-item"
                                        onClick={() => openImageModal(image)}
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="gallery-image"
                                        />
                                        <div className="gallery-overlay">
                                            <FaExpandArrowsAlt className="gallery-expand-icon" />
                                            <span className="gallery-title">{image.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </aside>
                </div>
            </div>

            {/* Modal de imagen */}
            {selectedImage && (
                <div className="image-modal" onClick={closeImageModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeImageModal}>
                            <FaTimes />
                        </button>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="modal-image"
                        />
                        <div className="modal-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DestinationInfo;