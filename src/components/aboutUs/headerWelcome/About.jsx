import "./About.css";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about-section">
            <div className="overlay">
                <div className="text-container">
                    <h1>{t('aboutUsHeader')}</h1>
                </div>
            </div>
        </section>
    );
};

export default About;
