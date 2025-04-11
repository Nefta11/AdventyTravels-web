import { useState, useEffect, useCallback } from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import './PartnerHeader.css';
import { useTranslation } from 'react-i18next';

const CAROUSEL_IMAGES = [
    'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=80'
];

const LOGO_URL = "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/LOGOTIPO_OFICIAL.webp";

const PartnerHeader = () => {
    const { t } = useTranslation();
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const handleScroll = useCallback(() => {
        const sections = document.querySelectorAll('.animate-on-scroll');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight * 0.75;

            if (isInView) {
                section.classList.add('visible');
                setActiveSection(section.id);
            }
        });
    }, []);

    useEffect(() => {
        setIsVisible(true);

        const textRotationInterval = setInterval(() => {
            setCurrentTextIndex(prevIndex => (prevIndex + 1) % t('partnerHeader.carouselTexts', { returnObjects: true }).length);
        }, 3000);

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            clearInterval(textRotationInterval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, t]);

    const { primary, secondary } = t('partnerHeader.carouselTexts', { returnObjects: true })[currentTextIndex];

    return (
        <>
            <div className={`partner-header ${isVisible ? 'visible' : ''}`}>
                <div className="header-overlay"></div>
                <Swiper
                    modules={[Autoplay, EffectCreative]}
                    effect="creative"
                    creativeEffect={{
                        prev: { translate: [0, 0, -400] },
                        next: { translate: ['100%', 0, 0] },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="carousel-swiper"
                >
                    {CAROUSEL_IMAGES.map((image, index) => (
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
                            src={LOGO_URL}
                            alt="Adventy Partner Logo"
                            className="logo-image"
                        />
                        <h2 className="animated-text">
                            {t('partnerHeader.joinCommunity')}{' '}
                            <span className="primary-text" key={`primary-${currentTextIndex}`}>
                                {primary}
                            </span>{' '}
                            <span className="secondary-text" key={`secondary-${currentTextIndex}`}>
                                {secondary}
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="partner-container">
                <InfoCards />
                <WhatIsSection isActive={activeSection === 'what-is'} />
            </div>
        </>
    );
};

const InfoCards = () => {
    const { t } = useTranslation();
    return (
        <div className="cards-wrapper">
            <div className="info-cards animate-on-scroll" id="info-cards">
                <div className="info-card">
                    <div className="info-card-content">
                        <h3>{t('partnerHeader.joinCommunity')}</h3>
                        <p>{t('partnerHeader.joinDescription')}</p>
                    </div>
                </div>

                <div className="cta-wrapper">
                    <button className="cta-button pulse">
                        {t('partnerHeader.ctaButton')}
                    </button>
                </div>
            </div>
        </div>
    );
};

import PropTypes from 'prop-types';

const WhatIsSection = ({ isActive }) => {
    const { t } = useTranslation();
    return (
        <div className="what-is-section animate-on-scroll" id="what-is">
            <div className="header-content">
                <FaHandPointRight className={`pointer-icon ${isActive ? 'active' : ''}`} />
                <h2>{t('partnerHeader.whatIsTitle')}</h2>
            </div>
            <div className="what-is-content">
                <p className="fade-in-paragraph">
                    {t('partnerHeader.whatIsDescription1')}
                </p>
                <p className="fade-in-paragraph">
                    {t('partnerHeader.whatIsDescription2')}
                </p>
            </div>
        </div>
    );
};
WhatIsSection.propTypes = {
    isActive: PropTypes.bool.isRequired,
};


export default PartnerHeader;