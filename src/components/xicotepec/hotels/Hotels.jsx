// Hotels.jsx - Actualizado sin duplicación de datos
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './Hotels.css';
import HotelCard from './HotelCard';
import { getAllHotels } from './hotelsData';

const Hotels = () => {
    const navigate = useNavigate();
    const hotels = getAllHotels(); // ✅ Importamos los datos desde archivo centralizado

    const handleHotelClick = (hotelSlug) => {
        navigate(`/hotel/${hotelSlug}`);
    };

    const renderStars = (stars) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`hotels-component-star ${index < stars ? 'filled' : ''}`}
            />
        ));
    };

    return (
        <section className="hotels-component-wrapper" id="hotels-section">
            <div className="hotels-component-container">
                {/* Título principal */}
                <div className="hotels-component-header">
                    <h1 className="hotels-main-title">Alojamientos</h1>
                    <div className="hotels-main-title-underline"></div>
                </div>

                {/* Grid de hoteles */}
                <div className="hotels-component-grid">
                    {hotels.map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                            onClick={() => handleHotelClick(hotel.slug)}
                            renderStars={renderStars}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hotels;