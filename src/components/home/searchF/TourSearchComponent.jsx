import "./TourSearch.css";
import { useTranslation } from 'react-i18next';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaShieldAlt, FaPlaneDeparture } from 'react-icons/fa';
import { useState } from 'react';

const TourSearchComponent = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('tours');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderSearchFields = () => {
        switch (activeTab) {
            case 'tours':
                return (
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
                );
            case 'flights':
                return (
                    <div className="search-fields">
                        <select>
                            <option>{t('tourSearch.departureCity')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.destinationCity')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.departureDate')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.returnDate')}</option>
                        </select>
                        <button className="search-button">{t('tourSearch.search')}</button>
                    </div>
                );
            case 'insurance':
                return (
                    <div className="search-fields">
                        <select>
                            <option>{t('tourSearch.insuranceType')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.coverageAmount')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.startDate')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.endDate')}</option>
                        </select>
                        <button className="search-button">{t('tourSearch.search')}</button>
                    </div>
                );
            case 'hotel':
                return (
                    <div className="search-fields">
                        <select>
                            <option>{t('tourSearch.cityCountry')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.checkInDate')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.checkOutDate')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.guests')}</option>
                        </select>
                        <button className="search-button">{t('tourSearch.search')}</button>
                    </div>
                );
            case 'hotels':
                return (
                    <div className="search-fields">
                        <select>
                            <option>{t('tourSearch.cityCountry')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.departureDate')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.returnDate')}</option>
                        </select>
                        <select>
                            <option>{t('tourSearch.guests')}</option>
                        </select>
                        <button className="search-button">{t('tourSearch.search')}</button>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderTitle = () => {
        switch (activeTab) {
            case 'tours':
                return t('tourSearch.findTour');
            case 'flights':
                return t('tourSearch.findFlight');
            case 'insurance':
                return t('tourSearch.findInsurance');
            case 'hotel':
                return t('tourSearch.findHotel');
            case 'hotels':
                return t('tourSearch.findHotels');
            default:
                return '';
        }
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
                <h2>{renderTitle()}</h2>
                {renderSearchFields()}
            </div>
        </div>
    );
};

export default TourSearchComponent;
