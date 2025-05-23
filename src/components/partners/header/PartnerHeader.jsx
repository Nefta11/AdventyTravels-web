import { useState, useEffect, useCallback, useRef } from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './PartnerHeader.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CAROUSEL_IMAGES = [
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1504836054726-3e36882ddaf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542650742-d3150fb66298?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const LOGO_URL = "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/LOGOTIPO_OFICIAL.webp";

const PartnerHeader = () => {
    const { t } = useTranslation();
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const headerRef = useRef(null);

    // Precargar imágenes para evitar saltos visuales
    useEffect(() => {
        const preloadImages = () => {
            let loadedCount = 0;
            const totalImages = CAROUSEL_IMAGES.length + 1; // +1 para el logo

            const checkAllLoaded = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                    // Aplicar visibilidad después de una pequeña espera para asegurar que todo esté renderizado
                    setTimeout(() => setIsVisible(true), 100);
                }
            };

            // Precargar imágenes del carrusel
            CAROUSEL_IMAGES.forEach(src => {
                const img = new Image();
                img.src = src;
                img.onload = checkAllLoaded;
                img.onerror = checkAllLoaded; // Contar incluso si hay error para no bloquear la UI
            });

            // Precargar logo
            const logoImg = new Image();
            logoImg.src = LOGO_URL;
            logoImg.onload = checkAllLoaded;
            logoImg.onerror = checkAllLoaded;
        };

        preloadImages();

        // Fallback por si algo falla con la carga de imágenes
        const timer = setTimeout(() => {
            if (!imagesLoaded) {
                setImagesLoaded(true);
                setIsVisible(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleScroll = useCallback(() => {
        const infoCards = document.getElementById('headerPat-info-cards');
        if (infoCards) {
            const rect = infoCards.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.7) {
                infoCards.classList.add('headerPat-visible');
            }
        }
    }, []);

    useEffect(() => {
        // Iniciar la rotación de textos solo cuando las imágenes estén cargadas
        if (!imagesLoaded) return;

        const textRotationInterval = setInterval(() => {
            setCurrentTextIndex(prevIndex => (prevIndex + 1) % t('partnerHeader.carouselTexts', { returnObjects: true }).length);
        }, 4000);

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            clearInterval(textRotationInterval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, t, imagesLoaded]);

    const { primary, secondary } = t('partnerHeader.carouselTexts', { returnObjects: true })[currentTextIndex];

    return (
        <>
            <div
                ref={headerRef}
                className={`headerPat-partner-header ${isVisible ? 'headerPat-visible' : ''} ${imagesLoaded ? 'headerPat-images-loaded' : ''}`}
            >
                <div className="headerPat-header-overlay"></div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="headerPat-carousel-swiper"
                >
                    {CAROUSEL_IMAGES.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="headerPat-carousel-slide"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="headerPat-partner-content">
                    <div className="headerPat-partner-logo">
                        <img
                            src={LOGO_URL}
                            alt="Adventy Partner Logo"
                            className="headerPat-logo-image"
                        />
                        <h2 className="headerPat-animated-text">
                            {t('partnerHeader.joinCommunity')}{' '}
                            <span className="headerPat-primary-text">
                                {primary}
                            </span>{' '}
                            <span className="headerPat-secondary-text">
                                {secondary}
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="headerPat-partner-container">
                <InfoCards />
                <WhatIsSection />
            </div>
        </>
    );
};

const InfoCards = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigateToFAQ = () => {
        navigate('/partners', { state: { scrollToFAQ: true } });
    };

    return (
        <div className="headerPat-cards-wrapper">
            <div className="headerPat-info-cards" id="headerPat-info-cards">
                <div className="headerPat-info-card">
                    <div className="headerPat-info-card-content">
                        <p>{t('partnerHeader.joinDescription')}</p>
                    </div>
                </div>

                <div className="headerPat-cta-wrapper">
                    <button className="headerPat-cta-button" onClick={handleNavigateToFAQ}>
                        {t('partnerHeader.ctaButton')}
                    </button>
                </div>
            </div>
        </div>
    );
};

const WhatIsSection = () => {
    const { t } = useTranslation();
    return (
        <div className="headerPat-what-is-section" id="headerPat-what-is">
            <div className="headerPat-header-content">
                <FaHandPointRight className="headerPat-pointer-icon" />
                <h2>{t('partnerHeader.whatIsTitle')}</h2>
            </div>
            <div className="headerPat-what-is-content">
                <p>
                    {t('partnerHeader.whatIsDescription1')}
                </p>
                <p>
                    {t('partnerHeader.whatIsDescription2')}
                </p>
            </div>
        </div>
    );
};

export default PartnerHeader;