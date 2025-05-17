import { FaHandshake, FaStar, FaShieldAlt, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./ValuesSection.css";

const ValuesSection = () => {
    const { t } = useTranslation();

    const values = t('valuesSection.values', { returnObjects: true });

    // Array de íconos para asignarlos dinámicamente
    const icons = [
        <FaHandshake key="handshake" className="icon-inner" />,
        <FaStar key="star" className="icon-inner" />,
        <FaShieldAlt key="shield" className="icon-inner" />,
        <FaLightbulb key="lightbulb" className="icon-inner" />,
        <FaUsers key="users" className="icon-inner" />,
        <FaChartLine key="chartline" className="icon-inner" />
    ];

    return (
        <section className="values-section">
            <div className="values-header">
                <h2 className="values-title">{t('valuesSection.title')}</h2>
                <div className="title-underline"></div>
                <p className="values-description">{t('valuesSection.description')}</p>
            </div>

            <div className="values-grid">
                {values.map((value, index) => (
                    <div key={index} className="value-card">
                        <div className="value-card-inner">
                            <div className="value-icon-container">
                                <div className="value-icon">
                                    {icons[index]}
                                </div>
                            </div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-text">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;