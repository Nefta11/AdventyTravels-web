import { FaHandshake, FaStar, FaShieldAlt, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./ValuesSection.css";

const ValuesSection = () => {
    const { t } = useTranslation();

    const values = t('valuesSection.values', { returnObjects: true });

    // Array de colores para cada icono
    const iconColors = [
        'icon-handshake',  // Color personalizado para FaHandshake
        'icon-star',       // Color personalizado para FaStar
        'icon-shield',     // Color personalizado para FaShieldAlt
        'icon-bulb',       // Color personalizado para FaLightbulb
        'icon-users',      // Color personalizado para FaUsers
        'icon-chart'       // Color personalizado para FaChartLine
    ];

    return (
        <section className="values-section">
            <div className="values-container">
                <div className="values-header">
                    <h2 className="values-title">{t('valuesSection.title')}</h2>
                    <p className="values-description">{t('valuesSection.description')}</p>
                </div>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <div className={`value-icon-container ${iconColors[index]}`}>
                                <div className="icon-background"></div>
                                <div className="icon-wrapper">
                                    {index === 0 && <FaHandshake />}
                                    {index === 1 && <FaStar />}
                                    {index === 2 && <FaShieldAlt />}
                                    {index === 3 && <FaLightbulb />}
                                    {index === 4 && <FaUsers />}
                                    {index === 5 && <FaChartLine />}
                                </div>
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-text">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;