import { useState, useRef } from 'react';
import {
    FaMountain,
    FaHotel,
    FaCamera,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import { GiFireworkRocket, GiVillage } from 'react-icons/gi';
import './AdventureSelector.css';

const AdventureSelector = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const adventures = [
        {
            id: 1,
            icon: GiVillage,
            title: "Xicotepec Mágico",
            description: "Experimenta la esencia única del lugar"
        },
        {
            id: 2,
            icon: FaMountain,
            title: "Atractivos Actividades",
            description: "Descubre aventuras emocionantes"
        },
        {
            id: 3,
            icon: GiFireworkRocket,
            title: "Festividades",
            description: "Celebra tradiciones locales"
        },
        {
            id: 4,
            icon: FaHotel,
            title: "Hoteles",
            description: "Hospédate con comodidad"
        },
        {
            id: 5,
            icon: FaCamera,
            title: "Tours",
            description: "Explora con guías expertos"
        }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth / 2;
            if (activeIndex === 0) {
                setActiveIndex(adventures.length - 1);
                container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
            } else {
                setActiveIndex((prev) => prev - 1);
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth / 2;
            if (activeIndex === adventures.length - 1) {
                setActiveIndex(0);
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                setActiveIndex((prev) => prev + 1);
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
        if (index === 0) {
            const el = document.getElementById('destination-info');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (index === 1) {
            const el = document.getElementById('atractivos-section');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // --- SWIPE SUPPORT FOR MOBILE ---
    // Detect touch events for infinite scroll
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 40) {
                if (diff > 0) {
                    // Swipe left
                    scrollRight();
                } else {
                    // Swipe right
                    scrollLeft();
                }
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section className="adventure-selector">
            <div className="adventure-container">
                {/* Título principal */}
                <div className="adventure-header">
                    <h2 className="adventure-title">
                        SELECCIONA TU PRÓXIMA AVENTURA
                    </h2>
                </div>

                {/* Contenedor principal con flechas */}
                <div className="adventure-wrapper">
                    {/* Flecha izquierda */}
                    <button
                        className="adventure-arrow adventure-arrow-left"
                        onClick={scrollLeft}
                        aria-label="Anterior"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Contenedor scrolleable */}
                    <div
                        className="adventure-scroll-container"
                        ref={scrollContainerRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="adventure-items">
                            {adventures.map((adventure, index) => {
                                const IconComponent = adventure.icon;
                                return (
                                    <div
                                        key={adventure.id}
                                        className={`adventure-item ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => handleItemClick(index)}
                                    >
                                        <div className="adventure-icon-container">
                                            <IconComponent className="adventure-icon" />
                                        </div>
                                        <h3 className="adventure-item-title">
                                            {adventure.title}
                                        </h3>
                                        <p className="adventure-item-description">
                                            {adventure.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Flecha derecha */}
                    <button
                        className="adventure-arrow adventure-arrow-right"
                        onClick={scrollRight}
                        aria-label="Siguiente"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Indicadores de navegación */}
                <div className="adventure-indicators">
                    {adventures.map((_, index) => (
                        <button
                            key={index}
                            className={`adventure-indicator ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleItemClick(index)}
                            aria-label={`Ir a aventura ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdventureSelector;