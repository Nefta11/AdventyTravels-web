// Hotels.jsx - Actualizado sin duplicación de datos
import { useNavigate } from 'react-router-dom';
import './Hotels.css';
import HotelCard from './HotelCard';
import { getAllHotels } from './hotelsData';

const Hotels = () => {
    const navigate = useNavigate();
    const hotels = getAllHotels(); // ✅ Importamos los datos desde archivo centralizado

    const handleHotelClick = (hotelSlug) => {
        navigate(`/hotel/${hotelSlug}`);
    };

    return (
        <section className="hotels-component-wrapper" id="hotels-section">
            <div className="hotels-component-container">
                {/* Título principal */}
                <div className="hotels-component-header">
                    <h1 className="hotels-main-title">Alojamientos</h1>
                    <div className="hotels-main-title-underline"></div>
                </div>

                {/* Grid de hoteles */}                <div className="hotels-component-grid">
                    {hotels.map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                            onClick={() => handleHotelClick(hotel.slug)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hotels;