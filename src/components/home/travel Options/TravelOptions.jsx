import { useState } from "react";
import "./TravelOptions.css";

const tabs = [
    { name: "Seguros", content: ["Seguro de viaje Internacional", "Seguro de viaje España", "Seguro de viaje Europa", "Seguro de viaje Canadá", "Seguro de viaje Estados Unidos"] },
    { name: "Hoteles", content: ["Hotel en Cancún", "Hotel en Madrid", "Hotel en París", "Hotel en Nueva York"] },
    { name: "Tours Internacionales", content: ["Tour por Asia", "Tour por Europa", "Tour por Sudamérica"] },
    { name: "Vuelos", content: ["Vuelos nacionales", "Vuelos internacionales", "Vuelos económicos"] },
    { name: "Paquetes", content: ["Paquete todo incluido", "Paquete de aventura", "Paquete de lujo"] },
];

const TravelOptions = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="travel-options-container">
            <h2 className="travel-options-title">Todo lo que buscas en un solo lugar</h2>
            <p className="travel-options-description">
                Vuelos a todo el mundo, múltiples opciones de paquetes vuelo + hotel, la asistencia de viaje más completa y la mejor experiencia en tours lo encuentras en Mundo Joven. No importa el tipo de viajero que seas, tu edad o cuántos integrantes de tu familia vayan de vacaciones siempre tendremos la mejor atención para que tu aventura sea tal y como tú lo deseas.
            </p>

            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab ${activeTab === index ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <ul className="tab-content">
                {tabs[activeTab].content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TravelOptions;
