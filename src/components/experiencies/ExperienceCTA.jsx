import './Experiences.css';

const ExperienceCTA = () => {
    return (
        <section className="section experiences-cta">
            <div className="container">
                <div className="cta-content">
                    <h2>¿No encuentras lo que buscas?</h2>
                    <p>Podemos diseñar una experiencia personalizada según tus intereses y preferencias.</p>
                    <a
                        href="whatsapp://send?phone=5217716075321&text=Hola,%20me%20interesa%20una%20experiencia%20personalizada."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExperienceCTA;