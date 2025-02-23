import "./WhoWeAre.css";
import { useTranslation } from 'react-i18next';

const WhoWeAre = () => {
    const { t } = useTranslation();

    return (
        <section className="who-we-are">
            <div className="image-container">
                <div className="overlay">
                    <h2>{t('whoWeAre.title')}</h2>
                </div>
            </div>
            <div className="text-container">
                <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.description1') }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.description2') }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.description3') }}></p>
            </div>
        </section>
    );
};

export default WhoWeAre;
