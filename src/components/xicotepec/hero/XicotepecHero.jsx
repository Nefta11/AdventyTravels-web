import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaCloud, FaTint, FaGlobeAmericas } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import { HiMenu } from 'react-icons/hi';
import axios from 'axios';
import './XicotepecHero.css';

const XicotepecHero = () => {
    // Array de imágenes de fondo para el carrusel
    const backgroundImages = [
        {
            url: "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2022/11/mirador-de-la-cruz-celestial-portada.jpg",
            alt: "Cruz Celestial"
        },
        {
            url: "https://lospueblosmagicos.com/wp-content/uploads/2020/10/PM_Pue_Xicotepec_PARROQUIA-DE-SAN-JUAN-BAUTISTA.jpg",
            alt: "Parroquia San Juan Bautista"
        },
        {
            url: "https://images.milenio.com/L6rnIA_OndV_BkbLhT5wEamQ4q0=/942x532/uploads/media/2020/12/12/virgen-de-xicotepec-andres-lobato.jpg",
            alt: "Virgen monumental"
        },
        {
            url: "https://sicomnoticias.mx/wp-content/uploads/2021/02/NOTA-SESI%C3%93N-VIRTUAL-DECLARAN-XICO-HEROICA-CIUDAD-DE-XICOTEPEC-3.jpg",
            alt: "Entrada xicotepec"
        },
        {
            url: "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/ACUEDUCTO-HACIENDA-DE-COCOYOC.jpg",
            alt: "Const Xico"
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [weather, setWeather] = useState({ temp: null, condition: '', humidity: null, icon: null });

    // Cambio automático de imágenes cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const apiKey = '82ab5004f81d26a35fa4e53e117e0038';
                const lat = 20.2797;
                const lon = -97.9611;
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;
                const response = await axios.get(url);
                const data = response.data;
                setWeather({
                    temp: Math.round(data.main.temp),
                    condition: data.weather[0].description,
                    humidity: data.main.humidity,
                    icon: data.weather[0].icon
                });
            } catch {
                setWeather({ temp: '--', condition: 'No disponible', humidity: '--', icon: null });
            }
        };
        fetchWeather();
        const interval = setInterval(fetchWeather, 4 * 60 * 60 * 1000); // 4 horas
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="xicotepec-page">
            {/* Header/Navbar */}
            <header className="xicotepec-header">
                <div className="xicotepec-nav-container">
                    <button className="xicotepec-menu-btn">
                        <HiMenu />
                    </button>

                    <div className="xicotepec-logo-container">
                        <img
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=60&fit=crop"
                            alt="Pueblos Mágicos México"
                            className="xicotepec-logo"
                        />
                    </div>

                    <div className="xicotepec-nav-actions">
                        <button className="xicotepec-search-btn">
                            <IoMdSearch />
                        </button>
                        <button className="xicotepec-language-btn">
                            <FaGlobeAmericas />
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="xicotepec-hero">
                <div className="xicotepec-hero-bg">
                    {/* Carrusel de imágenes de fondo */}
                    {backgroundImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.url}
                            alt={image.alt}
                            className={`xicotepec-hero-image ${index === currentImageIndex ? 'active' : ''
                                }`}
                        />
                    ))}
                    <div className="xicotepec-hero-overlay"></div>

                    {/* Indicadores del carrusel */}
                    <div className="xicotepec-carousel-indicators">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                className={`xicotepec-indicator ${index === currentImageIndex ? 'active' : ''
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`Ver imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="xicotepec-hero-content">
                    {/* Breadcrumb */}
                    <nav className="xicotepec-breadcrumb">
                        <span className="xicotepec-breadcrumb-item xicotepec-breadcrumb-current">Puebla</span>
                    </nav>

                    {/* Title */}
                    <h1 className="xicotepec-title">
                        Xicotepec de Juárez
                        <div className="xicotepec-title-underline"></div>
                    </h1>

                    {/* Description */}
                    <p className="xicotepec-description">
                        Disfruta del aroma a café en cada rincón, visita la majestuosa Parroquia de San Juan Bautista
                        con su arquitectura gótica, y contempla la monumental Virgen de Guadalupe desde el cerro El Tabacal.
                    </p>

                    {/* Weather and Social Section */}
                    <div className="xicotepec-bottom-section">
                        {/* Weather Info */}
                        <div className="xicotepec-weather">
                            <div className="xicotepec-weather-main">
                                <div className="xicotepec-weather-icon">
                                    {weather.icon ? (
                                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.condition} style={{ width: 48, height: 48 }} />
                                    ) : (
                                        <FaCloud />
                                    )}
                                </div>
                                <div className="xicotepec-weather-temp">
                                    <span className="xicotepec-temp-value">{weather.temp !== null ? `${weather.temp}°` : '--'}</span>
                                    <div className="xicotepec-weather-info">
                                        <span className="xicotepec-weather-label">Clima Actual</span>
                                        <span className="xicotepec-weather-condition">{weather.condition || '--'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="xicotepec-humidity">
                                <FaTint className="xicotepec-humidity-icon" />
                                <div className="xicotepec-humidity-info">
                                    <span className="xicotepec-humidity-label">Humedad</span>
                                    <span className="xicotepec-humidity-value">{weather.humidity !== null ? `${weather.humidity}%` : '--'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="xicotepec-social">
                            <span className="xicotepec-social-label">Compartir:</span>
                            <div className="xicotepec-social-buttons">
                                <button className="xicotepec-social-btn xicotepec-facebook">
                                    <FaFacebookF />
                                </button>
                                <button className="xicotepec-social-btn xicotepec-twitter">
                                    <FaTwitter />
                                </button>
                                <button className="xicotepec-social-btn xicotepec-whatsapp">
                                    <FaWhatsapp />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default XicotepecHero;