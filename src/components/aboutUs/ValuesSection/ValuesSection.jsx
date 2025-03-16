import { FaHandshake, FaStar, FaShieldAlt, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./ValuesSection.css";

const ValuesSection = () => {
    const { t } = useTranslation();

    const values = t('valuesSection.values', { returnObjects: true });

    return (
        <section className="values-section">
            <h2 className="values-title">{t('valuesSection.title')}</h2>
            <p className="values-description">{t('valuesSection.description')}</p>
            <div className="values-grid">
                {values.map((value, index) => (
                    <div key={index} className="value-card">
                        <div className="value-icon">
                            {index === 0 && <FaHandshake />}
                            {index === 1 && <FaStar />}
                            {index === 2 && <FaShieldAlt />}
                            {index === 3 && <FaLightbulb />}
                            {index === 4 && <FaUsers />}
                            {index === 5 && <FaChartLine />}
                        </div>
                        <h3 className="value-title">{value.title}</h3>
                        <p className="value-text">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;
