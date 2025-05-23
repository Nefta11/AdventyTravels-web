import { useState } from 'react';
import {
    FaBed,
    FaMapMarkerAlt,
    FaBuilding,
    FaCamera,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import { GiFireworkRocket } from 'react-icons/gi';
import './AdventureSelector.css';

const AdventureSelector = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: 'magia',
            title: 'Vive su magia',
            icon: <FaBed />,
            description: 'Experimenta la magia de Xicotepec',
            color: '#E91E63'
        },
        {
            id: 'atractivos',
            title: 'Atractivos Actividades',
            icon: <FaMapMarkerAlt />,
            description: 'Descubre lugares únicos',
            color: '#2B5A87'
        },
        {
            id: 'festividades',
            title: 'Festividades',
            icon: <GiFireworkRocket />,
            description: 'Celebra nuestras tradiciones',
            color: '#9C27B0'
        },
        {
            id: 'hoteles',
            title: 'Hoteles',
            icon: <FaBuilding />,
            description: 'Hospédaje cómodo y acogedor',
            color: '#4CAF50'
        },
        {
            id: 'tours',
            title: 'Tours',
            icon: <FaCamera />,
            description: 'Recorridos guiados especializados',
            color: '#FF9800'
        }
    ];

    const handlePrevious = () => {
        setActiveCategory((prev) =>
            prev === 0 ? categories.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setActiveCategory((prev) =>
            (prev + 1) % categories.length
        );
    };

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };

    return (
        <section className="adventure-selector">
            <div className="adventure-container">
                {/* Header */}
                <div className="adventure-header">
                    <button
                        className="adventure-nav-btn adventure-prev"
                        onClick={handlePrevious}
                        aria-label="Categoría anterior"
                    >
                        <FaChevronLeft />
                    </button>

                    <h2 className="adventure-title">
                        SELECCIONA TU PRÓXIMA AVENTURA
                    </h2>

                    <button
                        className="adventure-nav-btn adventure-next"
                        onClick={handleNext}
                        aria-label="Categoría siguiente"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Categories Grid */}
                <div className="adventure-categories">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`adventure-category ${index === activeCategory ? 'active' : ''
                                }`}
                            onClick={() => handleCategoryClick(index)}
                            style={{ '--category-color': category.color }}
                        >
                            <div className="adventure-category-content">
                                <div className="adventure-icon-wrapper">
                                    <div className="adventure-icon">
                                        {category.icon}
                                    </div>
                                </div>

                                <h3 className="adventure-category-title">
                                    {category.title}
                                </h3>

                                <p className="adventure-category-description">
                                    {category.description}
                                </p>

                                <div className="adventure-category-overlay"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className="adventure-indicators">
                    {categories.map((_, index) => (
                        <button
                            key={index}
                            className={`adventure-dot ${index === activeCategory ? 'active' : ''
                                }`}
                            onClick={() => handleCategoryClick(index)}
                            aria-label={`Ir a categoría ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdventureSelector;