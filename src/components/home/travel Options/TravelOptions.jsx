import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./TravelOptions.css";
import BlurText from "../../reactbitsComponents/BlurText";

const TravelOptions = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
    const tabs = t('travelOptions.tabs', { returnObjects: true });

    return (
        <div className="travel-options-container">
            <BlurText
                text={t('travelOptions.title')}
                delay={100}
                animateBy='words'
                direction='top'
                className="travel-options-title"
            />
            <BlurText
                text={t('travelOptions.description')}
                delay={70}
                animateBy='words'
                direction='top'
                className="travel-options-description"
            />

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



