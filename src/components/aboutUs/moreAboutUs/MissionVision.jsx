import "./MissionVision.css";
import officeImage from "../../../assets/images/aboutUs/oficce.webp"; // Reemplaza con la ruta de tu imagen

const MissionVision = () => {
    return (
        <section className="mission-vision">
            <div className="mission-vision-container">
                <img src={officeImage} alt="Oficina" className="mission-vision-image" />
                <div className="mission-vision-text">
                    <h2 className="mission-title">Nuestra Misión</h2>
                    <p>
                        Brindar experiencias de viaje excepcionales y personalizadas que superen las expectativas de
                        nuestros clientes, garantizando calidad, seguridad y confianza en cada servicio que ofrecemos. A
                        través de la innovación y la capacitación continua, nos esforzamos por transformar cada viaje en
                        una vivencia inolvidable.
                    </p>
                    <h2 className="vision-title">Nuestra Visión</h2>
                    <p>
                        Ser una empresa líder a nivel nacional en el sector turístico, reconocida por la calidad de sus
                        servicios y la calidez de su atención. Aspiramos a consolidarnos como una agencia rentable y
                        socialmente responsable, impulsada por un equipo joven, profesional y apasionado por el turismo.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
