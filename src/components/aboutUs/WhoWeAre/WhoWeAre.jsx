import { useState, useEffect, useRef } from "react";
import "./WhoWeAre.css";
import { useTranslation } from 'react-i18next';
import { FaQuoteRight } from 'react-icons/fa';

const WhoWeAre = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <section className="wwa-who-we-are" ref={sectionRef}>
            <div className={`wwa-content-wrapper ${isVisible ? 'wwa-visible' : ''}`}>
                <div className="wwa-image-container">
                    <div className="wwa-overlay">
                        <h2>{t('whoWeAre.title')}</h2>
                        <div className="wwa-decorative-line"></div>
                        <FaQuoteRight className="wwa-quote-icon" />
                    </div>
                </div>

                <div className="wwa-text-container">
                    <div className="wwa-text-content">
                        <div className="wwa-paragraph-wrapper wwa-p1">
                            <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.description1') }}></p>
                        </div>

                        <div className="wwa-paragraph-wrapper wwa-p2">
                            <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.description2') }}></p>
                        </div>

                        <div className="wwa-paragraph-wrapper wwa-p3">
                            <p dangerouslySetInnerHTML={{ __html: t('whoWeAre.description3') }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;