import { useNavigate } from 'react-router-dom';
import './Atractivos.css';
import { getAllAtractivos } from './atractivosData';

const Atractivos = () => {
    const navigate = useNavigate();
    const atractivos = getAllAtractivos();

    const handleAtractivoClick = (atractivoSlug) => {
        // Guardar la posición actual de scroll antes de navegar
        sessionStorage.setItem('xicotepecScrollPosition', window.scrollY.toString());
        navigate(`/atractivo/${atractivoSlug}`);
    };

    return (
        <section className="atractivos-component-wrapper" id="atractivos-section">
            <div className="atractivos-component-container">
                {/* Título principal */}
                <div className="atractivos-main-title-wrapper">
                    <h1 className="atractivos-main-title">Sitios y Experiencias</h1>
                    <div className="atractivos-main-title-underline"></div>
                </div>

                {/* Grid de atractivos */}
                <div className="atractivos-component-grid">
                    {atractivos.map((atractivo) => (                        <div
                            key={atractivo.id}
                            className="atractivos-component-card"
                            style={{ backgroundImage: `url(${atractivo.image})` }}
                            onClick={() => handleAtractivoClick(atractivo.slug)}
                        >
                            <div className="atractivos-component-card-overlay">
                                <div className="atractivos-component-card-location">
                                    {atractivo.location}
                                </div>
                                <div className="atractivos-component-card-title">
                                    {atractivo.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Atractivos;