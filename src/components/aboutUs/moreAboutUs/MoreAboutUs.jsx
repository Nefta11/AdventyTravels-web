import "./MoreAboutUs.css";
import { useTranslation } from 'react-i18next';

const MoreAboutUs = () => {
    const { t } = useTranslation();

    return (
        <section className="more-about-us">
            <div className="text-container">
                <h2>{t('moreAboutUs.title')}</h2>
                <p className="highlight" dangerouslySetInnerHTML={{ __html: t('moreAboutUs.description1') }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('moreAboutUs.description2') }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('moreAboutUs.description3') }}></p>
            </div>
            <div className="image-container"></div>
        </section>
    );
};

export default MoreAboutUs;
