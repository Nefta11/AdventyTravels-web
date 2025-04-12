import './AdventyWomenCampaign.css';

const AdventyWomenCampaign = () => {
    return (
        <div className="adventy-campaign-container">
            <div className="adventy-campaign-overlay"></div>

            <div className="adventy-campaign-content">
                <div className="adventy-campaign-header">
                    <h2 className="adventy-campaign-title">CAMPAÑA: MUJERES LIBRES CON ADVENTY</h2>
                    <p className="adventy-campaign-intro">
                        ¿Eres una mujer soñadora, valiente y con hambre de libertad?
                    </p>
                    <p className="adventy-campaign-description">
                        Ha llegado tu momento. En ADVENTY queremos ayudarte a transformar tu vida a través del turismo,
                        con una oportunidad real de crecimiento, desarrollo y libertad financiera.
                    </p>
                    <div className="adventy-campaign-divider"></div>
                </div>

                <h3 className="adventy-benefits-title">¿Qué obtienes como Distribuidora ADVENTY?</h3>

                <div className="adventy-benefits-grid">
                    <div className="adventy-benefit-card">
                        <div className="adventy-benefit-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h4 className="adventy-benefit-title">Capacitación completa y constante</h4>
                        <p className="adventy-benefit-description">
                            Aprende todo sobre turismo, ventas, manejo de clientes y plataformas digitales.
                        </p>
                    </div>

                    <div className="adventy-benefit-card">
                        <div className="adventy-benefit-icon">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <h4 className="adventy-benefit-title">Herramientas y plataforma digital</h4>
                        <p className="adventy-benefit-description">
                            Accede a nuestra plataforma para vender viajes nacionales e internacionales,
                            paquetes de temporada y productos de nuestra tienda en línea.
                        </p>
                    </div>

                    <div className="adventy-benefit-card">
                        <div className="adventy-benefit-icon">
                            <i className="fas fa-gift"></i>
                        </div>
                        <h4 className="adventy-benefit-title">Kit de bienvenida</h4>
                        <p className="adventy-benefit-description">
                            Material promocional y herramientas para comenzar con fuerza.
                        </p>
                    </div>

                    <div className="adventy-benefit-card">
                        <div className="adventy-benefit-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h4 className="adventy-benefit-title">Libertad y flexibilidad</h4>
                        <p className="adventy-benefit-description">
                            Maneja tu tiempo, trabaja desde donde quieras y construye tu propio camino.
                        </p>
                    </div>

                    <div className="adventy-benefit-card">
                        <div className="adventy-benefit-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h4 className="adventy-benefit-title">Comunidad de mujeres que inspiran</h4>
                        <p className="adventy-benefit-description">
                            Conéctate con otras distribuidoras, aprende y crece en una red que te impulsa.
                        </p>
                    </div>
                </div>

                <div className="adventy-campaign-cta">
                    <button className="adventy-button adventy-button-primary">QUIERO SER DISTRIBUIDORA</button>
                </div>
            </div>
        </div>
    );
};

export default AdventyWomenCampaign;