import React, { useState } from 'react';
import {
    FaBed,
    FaCamera,
    FaBuilding,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import { GiFireworkRocket, GiPisaTower } from 'react-icons/gi';
import './AdventureSelector.css';

const AdventureSelector = () => {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);

    const adventures = [
        {
            id: 1,
            title: "Vive su magia",
            subtitle: "Experiencias únicas",
            icon: <FaBed />,
            color: "#E91E63",
            bgGradient: "linear-gradient(135deg, #E91E63 0%, #AD1457 100%)"
        },
        {
            id: 2,
            title: "Atractivos",
            subtitle: "Actividades",
            icon: <GiPisaTower />,
            color: "#2B5A87",
            bgGradient: "linear-gradient(135deg, #2B5A87 0%, #1A365D 100%)"
        },
        {
            id: 3,
            title: "Festividades",
            subtitle: "Celebraciones",
            icon: <GiFireworkRocket />,
            color: "#9C27B0",
            bgGradient: "linear-gradient(135deg, #9C27B0 0%, #6A1B66 100%)"
        },
        {
            id: 4,
            title: "Hoteles",
            subtitle: "Hospedaje",
            icon: <FaBuilding />,
            color: "#4CAF50",
            bgGradient: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)"
        },
        {
            id: 5,
            title: "Tours",
            subtitle: "Recorridos",
            icon: <FaCamera />,
            color: "#FF9800",
            bgGradient: "linear-gradient(135deg, #FF9800 0%, #E65100 100%)"
        }
    ];

    const nextSlide = () => {
        setCurrentStartIndex((prev) => {
            const maxIndex = adventures.length - getVisibleItems();
            return prev >= maxIndex ? 0 : prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentStartIndex((prev) => {
            const maxIndex = adventures.length - getVisibleItems();
            return prev <= 0 ? maxIndex : prev - 1;
        });
    };

    const getVisibleItems = () => {
        const width = window.innerWidth;
        if (width < 640) return 1;
        if (width < 1024) return 2;
        return 3;
    };

    const handleAdventureClick = (adventure) => {
        console.log(`Seleccionado: ${adventure.title}`);
        // Aquí puedes agregar la lógica de navegación
        // Por ejemplo: navigate(`/categoria/${adventure.id}`)
    };

    return (
        <section className="adventure-selector">
            <div className="adventure-container">
                {/* Título */}
                <div className="adventure-header">
                    <h2 className="adventure-title">
                        SELECCIONA TU PRÓXIMA AVENTURA
                    </h2>
                    <div className="adventure-title-underline"></div>
                </div>

                {/* Carrusel */}
                <div className="adventure-carousel">
                    {/* Botón anterior */}
                    <button
                        className="adventure-nav-btn adventure-nav-prev"
                        onClick={prevSlide}
                        aria-label="Aventura anterior"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Grid de aventuras */}
                    <div className="adventure-grid">
                        <div
                            className="adventure-track"
                            style={{
                                transform: `translateX(-${currentStartIndex * (100 / getVisibleItems())}%)`
                            }}
                        >
                            {adventures.map((adventure) => (
                                <div
                                    key={adventure.id}
                                    className="adventure-card"
                                    onClick={() => handleAdventureClick(adventure)}
                                    style={{ '--card-color': adventure.color }}
                                    tabIndex={0}
                                    role="button"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleAdventureClick(adventure);
                                        }
                                    }}
                                >
                                    <div
                                        className="adventure-card-bg"
                                        style={{ background: adventure.bgGradient }}
                                    ></div>

                                    <div className="adventure-card-content">
                                        <div className="adventure-icon">
                                            {adventure.icon}
                                        </div>
                                        <div className="adventure-text">
                                            <h3 className="adventure-card-title">
                                                {adventure.title}
                                            </h3>
                                            <p className="adventure-card-subtitle">
                                                {adventure.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="adventure-card-overlay"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón siguiente */}
                    <button
                        className="adventure-nav-btn adventure-nav-next"
                        onClick={nextSlide}
                        aria-label="Siguiente aventura"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Indicadores */}
                <div className="adventure-indicators">
                    {Array.from({
                        length: Math.ceil(adventures.length / getVisibleItems())
                    }).map((_, index) => (
                        <button
                            key={index}
                            className={`adventure-indicator ${Math.floor(currentStartIndex / getVisibleItems()) === index ? 'active' : ''
                                }`}
                            onClick={() => setCurrentStartIndex(index * getVisibleItems())}
                            aria-label={`Ir a grupo ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdventureSelector;