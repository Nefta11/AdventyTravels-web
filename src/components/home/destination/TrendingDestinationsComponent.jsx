import "./TrendingDestinations.css";

const destinations = [
    { name: "Cancún", image: "/src/assets/images/destinations/cancun.jpg" },
    { name: "Playa del Carmen", image: "/src/assets/images/destinations/playaDelCarmen.jpg" },
    { name: "Tulum", image: "/src/assets/images/destinations/tulum.jpg" },
    { name: "Mexico City", image: "/src/assets/images/destinations/cdmx.webp" },
    { name: "Mérida", image: "/src/assets/images/destinations/merida.jpg" },
];

const TrendingDestinations = () => {
    return (
        <div className="trending-container">
            <h2>Trending Destinations</h2>
            <p>People searching in Mexico have also booked here</p>
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
