// Hotels.jsx - Actualizado sin duplicación de datos
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hotels.css';
import HotelCard from './HotelCard';
import { getAllHotels } from './hotelsData';

const Hotels = () => {
    const navigate = useNavigate();
    const hotels = getAllHotels(); // ✅ Importamos los datos desde archivo centralizado
    const [showAll, setShowAll] = useState(false);

    const handleHotelClick = (hotelSlug) => {
        navigate(`/hotel/${hotelSlug}`);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section className="hotels-component-wrapper" id="hotels-section">
            <div className="hotels-component-container">
                {/* Título principal */}
                <div className="hotels-component-header">
                    <h1 className="hotels-main-title">Alojamientos</h1>
                    <div className="hotels-main-title-underline"></div>
                </div>                {/* Grid de hoteles */}
                <div className="hotels-component-grid">
                    {(showAll ? hotels : hotels.slice(0, 6)).map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                            onClick={() => handleHotelClick(hotel.slug)}
                        />
                    ))}
                </div>

                {/* Botón Ver más/Ver menos */}
                {hotels.length > 6 && (
                    <div className="hotels-show-more-container">
                        <p className="hotels-counter">
                            Mostrando {showAll ? hotels.length : Math.min(6, hotels.length)} de {hotels.length} hoteles
                        </p>
                        <button className="hotels-show-more-btn" onClick={toggleShowAll}>
                            {showAll ? "Ver menos" : "Ver más"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hotels;