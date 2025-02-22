import { FaVideo, FaWhatsapp, FaPhone, FaStore, FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./SalesChannels.css";

const SalesChannels = () => {
    const { t } = useTranslation();
    const channels = [
        {
            icon: <FaVideo style={{ color: 'var(--color3)' }} />,
            title: "En Vivo",
            subtitle: "VIDEOLLAMADA",
            description: t('salesChannels.channels.live.description'),
            buttonText: t('salesChannels.channels.live.buttonText'),
            link: "https://calendly.com/administracion-adventytravels",
        },
        {
            icon: <FaWhatsapp style={{ color: 'var(--color3)' }} />,
            title: "WhatsApp",
            description: t('salesChannels.channels.whatsapp.description'),
            buttonText: t('salesChannels.channels.whatsapp.buttonText'),
            link: "whatsapp://send?phone=5217716075321",
        },
        {
            icon: <FaPhone style={{ color: 'var(--color3)' }} />,
            title: "Contact Center",
            description: t('salesChannels.channels.phone.description'),
            buttonText: t('salesChannels.channels.phone.buttonText'),
            link: "tel:+5217716075321",
        },
        {
            icon: <FaStore style={{ color: 'var(--color3)' }} />,
            title: "Sucursales",
            description: t('salesChannels.channels.store.description'),
            buttonText: t('salesChannels.channels.store.buttonText'),
            link: "https://maps.app.goo.gl/HJwStKyVzAsN3ftF6",
        },
    ];

    return (
        <div className="sales-channels">
            <h2 className="sales-channels-title">{t('salesChannels.title')}</h2>
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
