import { useState, useEffect, useRef } from "react";
import "./MoreAboutUs.css";
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaUsers } from 'react-icons/fa';

const MoreAboutUs = () => {
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className="mau-more-about-us" ref={sectionRef}>
            <div className={`mau-content-wrapper ${isVisible ? 'mau-visible' : ''}`}>
                <div className="mau-text-container">
                    <h2 className="mau-title">{t('moreAboutUs.title')}</h2>
                    <div className="mau-accent-line"></div>

                    <div className="mau-description">
                        <p>{t('moreAboutUs.description')}</p>
                    </div>

                    <ul className="mau-features-list">
                        {t('moreAboutUs.items', { returnObjects: true }).map((item, index) => (
                            <li key={index} className="mau-feature-item">
                                <FaCheckCircle className="mau-check-icon" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mau-team-section">
                        <div className="mau-team-header">
                            <FaUsers className="mau-team-icon" />
                            <h3 className="mau-sub-title">{t('moreAboutUs.teamTitle')}</h3>
                        </div>
                        <p>{t('moreAboutUs.teamDescription')}</p>
                        <p className="mau-agency-description">{t('moreAboutUs.agencyDescription')}</p>
                    </div>
                </div>

                <div className="mau-image-wrapper">
                    <div className="mau-image-container">
                        <div className="mau-image-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreAboutUs;