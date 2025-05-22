import { FaRegCreditCard } from 'react-icons/fa';
import { MdDone, MdFlightTakeoff } from 'react-icons/md';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-adventy-section">
            {/* Background decorative elements */}
            <div className="hero-adventy-bg-decoration">
                <div className="hero-adventy-floating-shape hero-adventy-shape-1"></div>
                <div className="hero-adventy-floating-shape hero-adventy-shape-2"></div>
                <div className="hero-adventy-floating-shape hero-adventy-shape-3"></div>
            </div>

            <div className="hero-adventy-content">
                <div className="hero-adventy-badge">
                    <MdFlightTakeoff className="hero-adventy-badge-icon" />
                    <span>Sistema de financiamiento exclusivo</span>
                </div>

                <h1 className="hero-adventy-title">
                    <span className="hero-adventy-highlight-text">Adventy Pay</span>
                    <span className="hero-adventy-subtitle">Tu viaje, tu ritmo</span>
                    <div className="hero-adventy-title-underline"></div>
                </h1>

                <p className="hero-adventy-description">
                    Planea con <strong>inteligencia</strong>, paga con <strong>comodidad</strong> y viaja con <strong>tranquilidad</strong>.
                    El sistema financiero que hace realidad tus sueños de viaje.
                </p>

                <div className="hero-adventy-buttons">
                    <button className="hero-adventy-cta-button-main">
                        <span>Solicita tu plan ahora</span>
                    </button>
                </div>
            </div>

            <div className="hero-adventy-image">
                <div className="hero-adventy-image-container">
                    <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80" alt="Pareja planificando viajes con facilidad" />
                    <div className="hero-adventy-image-overlay"></div>

                    {/* Floating card mejorada */}
                    <div className="hero-adventy-floating-card">
                        <div className="hero-adventy-card-header">
                            <div className="hero-adventy-card-icon-wrapper">
                                <FaRegCreditCard className="hero-adventy-card-icon" />
                            </div>
                            <div className="hero-adventy-card-title">
                                <span className="hero-adventy-card-name">Adventy Pay</span>
                                <span className="hero-adventy-card-subtitle">¡Tu mejor opción!</span>
                            </div>
                        </div>

                        <div className="hero-adventy-card-features">
                            <div className="hero-adventy-card-feature">
                                <div className="hero-adventy-check-wrapper">
                                    <MdDone className="hero-adventy-check-icon" />
                                </div>
                                <span>Sin pago inicial</span>
                            </div>
                            <div className="hero-adventy-card-feature">
                                <div className="hero-adventy-check-wrapper">
                                    <MdDone className="hero-adventy-check-icon" />
                                </div>
                                <span>Planes personalizados</span>
                            </div>
                            <div className="hero-adventy-card-feature">
                                <div className="hero-adventy-check-wrapper">
                                    <MdDone className="hero-adventy-check-icon" />
                                </div>
                                <span>Sin intereses</span>
                            </div>
                        </div>

                        <div className="hero-adventy-card-cta">
                            <button className="hero-adventy-card-button">¡Aparta ya!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;