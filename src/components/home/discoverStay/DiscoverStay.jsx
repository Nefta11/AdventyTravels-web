import './DiscoverStay.css';

const DiscoverStay = () => {
    const cities = [
        { name: 'Ciudad de México', country: 'México', image: '/src/assets/images/perfectStay/cdmxH.webp' },
        { name: 'Playa del Carmen', country: 'México', image: '/src/assets/images/perfectStay/playaDelcarmenH.webp' },
        { name: 'San Miguel de Allende', country: 'México', image: '/src/assets/images/perfectStay/sanMiguelH.webp' },
        {name: "Cancun", country: "México", image: "/src/assets/images/perfectStay/cancunH.webp"},
    ];

    return (
        <div className="discover-stay-container">
            <h2 className="discover-stay-title">Descubre hospedajes en los destinos más buscados</h2>
            <div className="city-grid">
                {cities.map((city, index) => (
                    <div key={index} className="city-card">
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
