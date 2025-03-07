import './DiscoverStay.css';
import { useTranslation } from 'react-i18next';

const DiscoverStay = () => {
    const { t } = useTranslation();
    const cities = [
        { name: 'Ciudad de México', country: 'México', image: 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/cdmxH.webp' },
        { name: 'Playa del Carmen', country: 'México', image: 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/playaDelcarmenH.webp' },
        { name: 'San Miguel de Allende', country: 'México', image: 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/sanMiguelH.webp' },
        { name: "Cancun", country: "México", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/perfectStay/cancunH.webp" },
    ];

    const handleCardClick = () => {
        window.location.href = 'https://booking.adventytravels.com/';
    };

    return (
        <div className="discover-stay-container">
            <h2 className='discover-stay-title'>{t('discoverStay.title')}</h2>
            <div className="city-grid">
                {cities.map((city, index) => (
                    <div key={index} className="city-card" onClick={handleCardClick}>
                        <img src={city.image} alt={city.name} className="city-image" />
                        <div className="city-info">
                            <h3>{city.name}</h3>
                            <p className="city-country">{city.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverStay;
