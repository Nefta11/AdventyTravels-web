import "./TourSearch.css";
import { useTranslation } from 'react-i18next';

const TourSearch = () => {
    const { t } = useTranslation();

    return (
        <div className="tour-search-container">
            <div className="tour-search-box">
                <div className="tabs">
                    <span className="tab active">{t('tourSearch.tours')}</span>
                    <span className="tab">{t('tourSearch.flights')}</span>
                    <span className="tab">{t('tourSearch.insurance')}</span>
                    <span className="tab">{t('tourSearch.hotel')}</span>
                    <span className="tab">{t('tourSearch.hotels')}</span>
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
