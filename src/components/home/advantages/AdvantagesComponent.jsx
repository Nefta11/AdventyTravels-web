// AdvantagesComponent.jsx
import { FaRegClock, FaCreditCard, FaHandshake } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState } from 'react';
import "./advantagesComponent.css";

const AdvantagesComponent = () => {
    const { t } = useTranslation();
    const [inView, setInView] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const advantages = [
        {
            icon: FaRegClock,
            title: t('advantages.items.0.title'),
            description: t('advantages.items.0.description'),
        },
        {
            icon: FaCreditCard,
            title: t('advantages.items.1.title'),
            description: t('advantages.items.1.description'),
        },
        {
            icon: FaHandshake,
            title: t('advantages.items.2.title'),
            description: t('advantages.items.2.description'),
        },
    ];

    return (
        <section className="advantages-container" ref={sectionRef}>
            <div className="advantages-header">
                <h2 className="advantage-title">{t('advantages.title')}</h2>
                <div className="title-underline"></div>
            </div>

            <div className={`advantages-cards ${inView ? 'animate-in' : ''}`}>
                {advantages.map((advantage, index) => (
                    <div
                        className="advantage-card"
                        key={index}
                        style={{ animationDelay: `${index * 150}ms` }}
                        tabIndex={0}
                    >
                        <div className="icon-container">
                            <advantage.icon className="advantage-icon" aria-hidden="true" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">
                                {advantage.title}
                            </h3>
                            <p className="advantage-description">
                                {advantage.description}
                            </p>
                        </div>
                        <div className="card-background"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdvantagesComponent;