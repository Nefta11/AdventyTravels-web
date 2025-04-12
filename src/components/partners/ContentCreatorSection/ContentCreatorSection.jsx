import './ContentCreatorSection.css';

const ContentCreatorSection = () => {
    const steps = [
        {
            id: 1,
            text: 'Solicita tu cupón personalizado y se parte del programa Adventy Partner'
        },
        {
            id: 2,
            text: 'Comparte tu cupón con tu comunidad y dales hasta un 15% de descuento en nuestra tienda en línea mientras acumulan el 5% en rewards para ellos en nuestra tienda en línea'
        },
        {
            id: 3,
            text: 'Obtén el 5% de recompensa acumulable en rewards para ti por cada reserva que realice tu comunidad con tu código'
        },
        {
            id: 4,
            text: '¡Y listo! Disfruta tus beneficios y canjea tus rewards en nuestra tienda en línea o solicítalo en cashback.'
        }
    ];

    return (
        <div className="creator-container">
            <div className="creator-content">
                <div className="creator-header">
                    <h2 className="creator-title">
                        <span className="creator-title-blue">¿ERES CREADOR DE CONTENIDO?</span>
                        <span className="creator-title-pink">¡TAMBIÉN PUEDES GENERAR INGRESOS CON ADVENTY PARTNER!</span>
                    </h2>
                </div>

                <div className="creator-description">
                    <p>Si eres influencer, blogger o creador de contenido, únete a nuestro programa Adventy Partner y disfruta de beneficios exclusivos para ti y tus seguidores de la siguiente manera:</p>
                </div>

                <div className="creator-steps">
                    <ol>
                        {steps.map(step => (
                            <li key={step.id} className="creator-step-item">
                                {step.text}
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="creator-cta">
                    <p>¡Convierte tu contenido en ingresos y ayuda a tu comunidad a viajar mejor! Únete ahora y empieza a ganar con Adventy Partners</p>
                </div>

                <div className="creator-images">
                    <div className="creator-image-box">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1668472170724-8b544ca3c86e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Persona con teléfono en mano"
                            className="creator-phone-image"
                        />
                        <div className="creator-image-text">
                            <p className="creator-text-highlight">Comparte con tu comunidad tu código personalizado</p>
                        </div>
                    </div>
                    <div className="creator-image-box">
                        <img
                            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Persona usando smartphone"
                            className="creator-phone-image"
                        />
                        <div className="creator-image-text">
                            <p className="creator-text-highlight">Aplican tu código, obtienen un descuento y todos ganan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCreatorSection;