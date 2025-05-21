import { FaRegCreditCard } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="highlight-text">Adventy Pay</span>
                    <span className="subtitle">Tu viaje, tu ritmo</span>
                </h1>
                <p className="hero-description">
                    Planea con inteligencia, paga con comodidad y viaja con tranquilidad
                </p>
                <button className="cta-button">
                    Solicita tu plan de pagos
                </button>
            </div>
            <div className="hero-image">
                <div className="image-container">
                    <img src="/api/placeholder/500/350" alt="Viajes con financiamiento" />
                    <div className="floating-card">
                        <div className="card-header">
                            <FaRegCreditCard className="card-icon" />
                            <span>Adventy Pay</span>
                        </div>
                        <div className="card-feature">
                            <MdDone className="check-icon" />
                            <span>Sin pago inicial</span>
                        </div>
                        <div className="card-feature">
                            <MdDone className="check-icon" />
                            <span>Planes personalizados</span>
                        </div>
                        <div className="card-feature">
                            <MdDone className="check-icon" />
                            <span>Sin intereses</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;