import { FaVideo, FaWhatsapp, FaPhone, FaStore, FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import BlurText from '../../reactbitsComponents/BlurText';
import "./SalesChannels.css";

const channels = [
    {
        icon: <FaVideo style={{ color: 'var(--color4)' }} />,
        title: "En Vivo",
        subtitle: "VIDEOLLAMADA",
        description: "Contactar ahora a tu Asesor",
        buttonText: "Contacta",
    },
    {
        icon: <FaWhatsapp style={{ color: 'var(--color4)' }} />,
        title: "WhatsApp",
        description: "Realiza tus consultas ¡Escríbenos!",
        buttonText: "Escríbenos",
        link: "whatsapp://send?phone=5217716075321",
    },
    {
        icon: <FaPhone style={{ color: 'var(--color4)' }} />,
        title: "Contact Center",
        description: "Llámanos y nuestros ejecutivos te orientarán en todo momento",
        buttonText: "Llámanos",
    },
    {
        icon: <FaStore style={{ color: 'var(--color4)' }} />,
        title: "Sucursales",
        description: "Visita nuestras sucursales a lo largo del país",
        buttonText: "Ver Sucursales",
        link: "https://goo.gl/maps/2VQLmc5pb8WYusUQ7",
    },
];

const SalesChannels = () => {
    const { t } = useTranslation();
    return (
        <div className="sales-channels">
            <BlurText
                text={t('salesChannels.title')}
                delay={100}
                animateBy='words'
                direction='top'
                className="sales-channels-title"
            />
            <div className="channel-list">
                {channels.map((channel, index) => (
                    <div key={index} className="channel-card">
                        <div className="channel-icon">{channel.icon}</div>
                        <h3>{channel.title}</h3>
                        {channel.subtitle && <p className="subtitle">{channel.subtitle}</p>}
                        <p>{channel.description}</p>
                        {channel.link ? (
                            <a href={channel.link} target="_blank" rel="noopener noreferrer" className="channel-button no-underline">
                                <FaArrowRight /> {channel.buttonText}
                            </a>
                        ) : (
                            <button className="channel-button no-underline" onClick={() => window.open(channel.link, '_blank')}>
                                <FaArrowRight /> {channel.buttonText}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesChannels;
