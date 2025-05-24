import './Atractivos.css';

const Atractivos = () => {
    const atractivos = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
            title: "Acampa en un rancho ecoturístico",
            location: "XICOTEPEC"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1512090104996-1b8e2e3b1a4d?w=400&h=300&fit=crop",
            title: "Adéntrate al mundo de la herbolaria",
            location: "XICOTEPEC"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            title: "Compra artesanías de Xicotepec",
            location: "XICOTEPEC"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
            title: "Deambula por los jardines de la Casa del Monje",
            location: "XICOTEPEC"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            title: "Haz rafting en Cascadas Barbas de Carranza",
            location: "XICOTEPEC"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            title: "La Xochipila",
            location: "XICOTEPEC"
        }
    ];

    return (
        <section className="atractivos-component-wrapper">
            <div className="atractivos-component-container">
                {/* Título principal */}
                <div className="atractivos-main-title-wrapper">
                    <h1 className="atractivos-main-title">Atractivos</h1>
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