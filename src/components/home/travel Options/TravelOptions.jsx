import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./TravelOptions.css";

const TravelOptions = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
    const tabs = t('travelOptions.tabs', { returnObjects: true });

    return (
        <div className="travel-options-container">
            <h2 className="travel-options-title">{t('travelOptions.title')}</h2>
            <p className="travel-options-description">
                {t('travelOptions.description')}
            </p>

            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab ${activeTab === index ? "active" : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <ul className="tab-content">
                {tabs[activeTab].content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TravelOptions;
