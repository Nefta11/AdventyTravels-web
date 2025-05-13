import { FaVideo, FaWhatsapp, FaPhone, FaStore, FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./SalesChannels.css";

const SalesChannels = () => {
    const { t } = useTranslation();

    const channels = [
        {
            icon: <FaVideo />,
            title: "En Vivo",
            subtitle: "VIDEOLLAMADA",
            description: t('salesChannels.channels.live.description'),
            buttonText: t('salesChannels.channels.live.buttonText'),
            link: "https://calendly.com/administracion-adventytravels",
        },
        {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            description: t('salesChannels.channels.whatsapp.description'),
            buttonText: t('salesChannels.channels.whatsapp.buttonText'),
            link: "whatsapp://send?phone=5217716075321",
        },
        {
            icon: <FaPhone />,
            title: "Contact Center",
            description: t('salesChannels.channels.phone.description'),
            buttonText: t('salesChannels.channels.phone.buttonText'),
            link: "tel:+5217716075321",
        },
        {
            icon: <FaStore />,
            title: "Sucursales",
            description: t('salesChannels.channels.store.description'),
            buttonText: t('salesChannels.channels.store.buttonText'),
            link: "https://maps.app.goo.gl/HJwStKyVzAsN3ftF6",
        },
    ];

    return (
        <div className="sc-root">
            <section className="sc-sales-channels">
                <h2 className="sc-sales-channels-title">{t('salesChannels.title')}</h2>

                <div className="sc-channel-list">
                    {channels.map((channel, index) => (
                        <div
                            key={index}
                            className="sc-channel-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="sc-channel-icon-container">
                                <div className="sc-channel-icon">{channel.icon}</div>
                            </div>

                            <h3 className="sc-channel-title">{channel.title}</h3>

                            {channel.subtitle && (
                                <div className="sc-subtitle">{channel.subtitle}</div>
                            )}

                            <p className="sc-description">{channel.description}</p>

                            {channel.link ? (
                                <a
                                    href={channel.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sc-channel-button sc-no-underline"
                                >
                                    {channel.buttonText} <FaArrowRight className="sc-button-icon" />
                                </a>
                            ) : (
                                <button
                                    className="sc-channel-button sc-no-underline"
                                    onClick={() => window.open(channel.link, '_blank')}
                                >
                                    {channel.buttonText} <FaArrowRight className="sc-button-icon" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SalesChannels;