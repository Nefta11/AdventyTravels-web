import "./TourSearch.css";
import { useTranslation } from 'react-i18next';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaShieldAlt, FaPlaneDeparture } from 'react-icons/fa';
import { useState } from 'react';

const TourSearch = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('tours');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tour-search-container">
            <div className="tour-search-box">
                <div className="tabs">
                    <span className={`tab ${activeTab === 'tours' ? 'active' : ''}`} onClick={() => handleTabClick('tours')}><FaUmbrellaBeach /> {t('tourSearch.tours')}</span>
                    <span className={`tab ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => handleTabClick('flights')}><FaPlane /> {t('tourSearch.flights')}</span>
                    <span className={`tab ${activeTab === 'insurance' ? 'active' : ''}`} onClick={() => handleTabClick('insurance')}><FaShieldAlt /> {t('tourSearch.insurance')}</span>
                    <span className={`tab ${activeTab === 'hotel' ? 'active' : ''}`} onClick={() => handleTabClick('hotel')}><FaHotel /> {t('tourSearch.hotel')}</span>
                    <span className={`tab ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => handleTabClick('hotels')}><FaPlaneDeparture /> {t('tourSearch.hotels')}</span>
                </div>
                <h2>{t('tourSearch.findTour')}</h2>
                <div className="search-fields">
                    <select>
                        <option>{t('tourSearch.region')}</option>
                    </select>
                    <select>
                        <option>{t('tourSearch.cityCountry')}</option>
                    </select>
                    <select>
                        <option>{t('tourSearch.month')}</option>
                    </select>
                    <select>
                        <option>{t('tourSearch.nights')}</option>
                    </select>
                    <button className="search-button">{t('tourSearch.search')}</button>
                </div>
            </div>
        </div>
    );
};

export default TourSearch;
