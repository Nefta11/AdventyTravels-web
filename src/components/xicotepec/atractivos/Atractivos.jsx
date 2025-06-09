import './Atractivos.css';

const Atractivos = () => {
    const atractivos = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1558020485-83a63e2b9b6a?w=400&h=300&fit=crop",
            title: "La Xochipila",
            location: "XICOTEPEC"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            title: "Mirador de la Cruz Celestial, un encantador lugar en Puebla",
            location: "XICOTEPEC"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
            title: "Museo Casa Carranza",
            location: "XICOTEPEC"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop",
            title: "Palacio Municipal de Xicotepec",
            location: "XICOTEPEC"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1518972734183-d0243cd5ac20?w=400&h=300&fit=crop",
            title: "Parroquia de San Juan Bautista",
            location: "XICOTEPEC"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
            title: "Visita Tlaxcalantongo",
            location: "XICOTEPEC"
        }
    ];

    return (
        <section className="atractivos-component-wrapper" id="atractivos-section">
            <div className="atractivos-component-container">
                {/* Título principal */}
                <div className="atractivos-main-title-wrapper">
                    <h1 className="atractivos-main-title">Sitios y Experiencias</h1>
                    <div className="atractivos-main-title-underline"></div>
                </div>

                {/* Grid de atractivos */}
                <div className="atractivos-component-grid">
                    {atractivos.map((atractivo) => (
                        <div
                            key={atractivo.id}
                            className="atractivos-component-card"
                            style={{ backgroundImage: `url(${atractivo.image})` }}
                        >
                            <div className="atractivos-component-card-overlay">
                                <div className="atractivos-component-card-location">
                                    {atractivo.location}
                                </div>
                                <div className="atractivos-component-card-title">
                                    {atractivo.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Atractivos;