import { FaHandshake, FaStar, FaShieldAlt, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";
import "./ValuesSection.css";

const values = [
    { icon: <FaHandshake />, title: "Compromiso", description: "Nos dedicamos a brindar experiencias de viaje únicas y personalizadas con total responsabilidad." },
    { icon: <FaStar />, title: "Calidad", description: "Cuidamos cada detalle para que nuestros clientes disfruten de un servicio excepcional." },
    { icon: <FaShieldAlt />, title: "Confianza", description: "Somos una agencia legalmente registrada y avalada, garantizando seguridad en cada transacción." },
    { icon: <FaLightbulb />, title: "Innovación", description: "Estamos en constante evolución para ofrecer las mejores opciones y tendencias del turismo." },
    { icon: <FaUsers />, title: "Trabajo en equipo", description: "Fomentamos un ambiente colaborativo y joven, donde cada integrante aporta su talento y pasión." },
    { icon: <FaChartLine />, title: "Crecimiento profesional", description: "Impulsamos la formación continua de nuestro equipo para ofrecer siempre la mejor asesoría." }
];

const ValuesSection = () => {
    return (
        <section className="values-section">
            <h2 className="values-title">Nuestros Valores</h2>
            <p className="values-description">
                En Adventy Travels, creemos firmemente en los valores que nos definen y guían nuestro actuar en
                cada viaje, reservación y atención al cliente.
            </p>
            <div className="values-grid">
                {values.map((value, index) => (
                    <div key={index} className="value-card">
                        <div className="value-icon">{value.icon}</div>
                        <h3 className="value-title">{value.title}</h3>
                        <p className="value-text">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;
