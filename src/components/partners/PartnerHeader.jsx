import { useState, useEffect } from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './PartnerHeader.css';

const carouselImages = [
    'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=80'
];

const headerTexts = [
    { primary: 'TRASLADOS', secondary: 'CON REWARDS' },
    { primary: 'BENEFICIOS', secondary: 'SIENDO PARTNER' },
    { primary: 'EXPERIENCIAS', secondary: 'INCREÍBLES' },
    { primary: 'INGRESOS', secondary: 'EXTRAS' }
];

const PartnerHeader = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % headerTexts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="partner-header">
                <div className="header-overlay"></div>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="carousel-swiper"
                >
                    {carouselImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="carousel-slide"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="partner-content">
                    <div className="partner-logo">
                        <img
                            src="https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/LOGOTIPO_OFICIAL.webp"
                            alt="Adventy Partner Logo"
                            className="logo-image"
                        />
                        <h2 className="animated-text">
                            OBTÉN <span className="primary-text">{headerTexts[currentTextIndex].primary}</span>{' '}
                            <span className="secondary-text">{headerTexts[currentTextIndex].secondary}</span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="partner-container">
                <div className="cards-wrapper">
                    <div className="info-cards">
                        <div className="info-card">
                            <div className="info-card-content">
                                <h3>¡ÚNETE A NUESTRA COMUNIDAD DE VIAJES!</h3>
                                <p>Sé parte de Adventy Partner y transforma tu pasión por los viajes en una oportunidad de crecimiento.</p>
                            </div>
                        </div>

                        <div className="cta-wrapper">
                            <button className="cta-button">
                                ¡DA CLICK AQUÍ PARA SER UN ADVENTY PARTNER!
                            </button>
                        </div>
                    </div>
                </div>

                <div className="what-is-section">
                    <div className="header-content">
                        <FaHandPointRight className="pointer-icon" />
                        <h2>¿QUÉ ES ADVENTY PARTNER?</h2>
                    </div>
                    <div className="what-is-content">
                        <p>
                            Adventy Partner es un nuevo programa de Adventy Travels, creado para personas que aman organizar y fomentar viajes propios, para amigos, familiares, conocidos o incluso clientes. La intención es que no sólo goces dicha planeación, sino que también obtengas ingresos extras por hacerlo.
                        </p>
                        <p>
                            Al ser parte de esta comunidad te damos acceso a herramientas digitales, entrenamientos en línea súper fáciles y un catálogo gigante de hoteles, departamentos, tours, transportes, vuelos ¡y más! a competitivos precios. Sólo necesitas ganas de aprender y de vender o compartir experiencias increíbles.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerHeader;