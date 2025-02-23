import "./About.css";

const About = () => {
    return (
        <section className="about-section">
            <div className="overlay">
                <div className="text-container">
                    <h1>Nosotros</h1>
                    <nav className="breadcrumb">
                        <span>Inicio</span> &gt; <span className="active">Nosotros</span>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default About;
