import './ContentCreatorSection.css';

const ContentCreatorSection = () => {
    const steps = [
        {
            id: 1,
            text: 'Registra tu código único y comienza a formar parte del programa Adventy Partner.'
        },
        {
            id: 2,
            text: 'Comparte tu código con tus seguidores para que obtengan hasta un 15% de descuento en nuestra tienda, mientras acumulan un 5% en recompensas.'
        },
        {
            id: 3,
            text: 'Por cada reserva que realicen tus seguidores usando tu código, recibirás un 5% en recompensas acumulables.'
        },
        {
            id: 4,
            text: '¡Así de fácil! Usa tus recompensas en nuestra tienda en línea o solicítalas como cashback.'
        }
    ];

    return (
        <div className="creator-container">
            <div className="creator-content">
                <div className="creator-header">
                    <h2 className="creator-title">
                        <span className="creator-title-blue">¿Eres Un Creador De Contenido?</span>
                        <span className="creator-title-pink">¡Genera Ingresos Con Adventy Partner!</span>
                    </h2>
                </div>

                <div className="creator-flex-container">
                    <div className="creator-left-column">
                        <div className="creator-description">
                            <p>Si eres un creador de contenido, influencer o blogger, únete a nuestro programa Adventy Partner y disfruta de beneficios exclusivos para ti y tu comunidad de esta manera:</p>
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


                    </div>

                    <div className="creator-image-container">
                        <div className="creator-image-box">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1668472170724-8b544ca3c86e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Persona con teléfono en mano"
                                className="creator-phone-image"
                            />
                            <div className="creator-image-text">
                                <p className="creator-text-highlight">Comparte tu código único con tu comunidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCreatorSection;