import { FaVideo, FaWhatsapp, FaPhone, FaStore, FaArrowRight } from "react-icons/fa";
import "./SalesChannels.css";

const channels = [
    {
        icon: <FaVideo />,
        title: "En Vivo",
        subtitle: "VIDEOLLAMADA",
        description: "Contactar ahora a tu Asesor",
        buttonText: "Contacta",
    },
    {
        icon: <FaWhatsapp />,
        title: "WhatsApp",
        description: "Realiza tus consultas ¡Escríbenos!",
        buttonText: "+56 9 5382 4715",
    },
    {
        icon: <FaPhone />,
        title: "Contact Center",
        description: "Llámanos y nuestros ejecutivos te orientarán en todo momento",
        buttonText: "600 570 0035",
    },
    {
        icon: <FaStore />,
        title: "Sucursales",
        description: "Visita nuestras sucursales a lo largo del país",
        buttonText: "Ver Sucursales",
    },
];

const SalesChannels = () => {
    return (
        <div className="sales-channels">
            <h2>OTROS CANALES DE VENTA ASISTIDA:</h2>
            <div className="channel-list">
                {channels.map((channel, index) => (
                    <div key={index} className="channel-card">
                        <div className="channel-icon">{channel.icon}</div>
                        <h3>{channel.title}</h3>
                        {channel.subtitle && <p className="subtitle">{channel.subtitle}</p>}
                        <p>{channel.description}</p>
                        <button className="channel-button">
                            <FaArrowRight /> {channel.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesChannels;
