import "./MoreAboutUs.css";
import { useTranslation } from 'react-i18next';

const MoreAboutUs = () => {
    const { t } = useTranslation();

    return (
        <section className="more-about-us">
            <div className="text-container">
                <h2>{t('moreAboutUs.title')}</h2>
                <p>{t('moreAboutUs.description')}</p>
                <ul>
                    {t('moreAboutUs.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>{t('moreAboutUs.teamTitle')}</h3>
                <p>{t('moreAboutUs.teamDescription')}</p>
                <h3>{t('moreAboutUs.agencyTitle')}</h3>
                <p>{t('moreAboutUs.agencyDescription')}</p>
            </div>
            <div className="image-container"></div>
        </section>
    );
};

export default MoreAboutUs;
