import { useTranslation } from 'react-i18next';
import "./TrendingDestinations.css";

const destinations = [
    { name: "Cancún", image: "/src/assets/images/destinations/cancun.jpg" },
    { name: "Playa del Carmen", image: "/src/assets/images/destinations/playaDelCarmen.jpg" },
    { name: "Tulum", image: "/src/assets/images/destinations/tulum.jpg" },
    { name: "Mexico City", image: "/src/assets/images/destinations/cdmx.webp" },
    { name: "Mérida", image: "/src/assets/images/destinations/merida.jpg" },
    { name: "San Miguel de Allende", image: "/src/assets/images/destinations/SanMiguel.webp" },
    { name: "Monterrey", image: "/src/assets/images/destinations/MTY.webp" },
];

const TrendingDestinations = () => {
    const { t } = useTranslation();

    return (
        <div className="trending-container">
            <h2>{t('trendingDestinations')}</h2>
            <p>{t('peopleSearching')}</p>
            <div className="trending-grid">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="destination-card"
                        style={{ backgroundImage: `url(${destination.image})` }}
                    >
                        <span>{destination.name} 🇲🇽</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingDestinations;
