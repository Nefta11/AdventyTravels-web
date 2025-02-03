import { FaRegClock, FaCreditCard, FaHandshake } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./advantagesComponent.css";
import BlurText from "../../reactbitsComponents/BlurText";
import DecryptedText from "../../reactbitsComponents/DecryptedText";

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
            <BlurText
                text={t('advantages.title')}
                delay={100}
                animateBy='words'
                direction='top'
                className="advantages-title"
            />
            <div className="advantages-cards">
                {advantages.map((advantage, index) => (
                    <div className="advantage-card" key={index}>
                        <advantage.icon className="advantage-icon" />
                        <h3 className="advantage-title">
                            <DecryptedText
                                text={advantage.title}
                                animateOn="view"
                                revealDirection="center"
                            />
                        </h3>
                        <p className="advantage-description">
                            <DecryptedText
                                text={advantage.description}
                                animateOn="view"
                                revealDirection="center"
                            />
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdvantagesComponent;
