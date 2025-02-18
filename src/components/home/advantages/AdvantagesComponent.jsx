import { FaRegClock, FaCreditCard, FaHandshake } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./advantagesComponent.css";

const AdvantagesComponent = () => {
    const { t } = useTranslation();

    const advantages = [
        {
            icon: FaRegClock,
            title: t('advantages.items.0.title'),
            description: t('advantages.items.0.description'),
        },
        {
            icon: FaCreditCard,
            title: t('advantages.items.1.title'),
            description: t('advantages.items.1.description'),
        },
        {
            icon: FaHandshake,
            title: t('advantages.items.2.title'),
            description: t('advantages.items.2.description'),
        },
    ];

    return (
        <section className="advantages-container">
            <h2 className="advantage-title">{t('advantages.title')}</h2>
            <div className="advantages-cards">
                {advantages.map((advantage, index) => (
                    <div className="advantage-card" key={index}>
                        <advantage.icon className="advantage-icon" loading="lazy" />
                        <h3>
                            {advantage.title}
                        </h3>
                        <p className="advantage-description"> {advantage.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdvantagesComponent;
