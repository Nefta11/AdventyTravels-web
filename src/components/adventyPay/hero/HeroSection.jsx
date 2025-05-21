import { FaRegCreditCard, FaWhatsapp } from 'react-icons/fa';
import { MdDone, MdFlightTakeoff } from 'react-icons/md';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* Background decorative elements */}
            <div className="hero-bg-decoration">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    <MdFlightTakeoff className="badge-icon" />
                    <span>Sistema de financiamiento exclusivo</span>
                </div>

                <h1 className="hero-title">
                    <span className="highlight-text">Adventy Pay</span>
                    <span className="subtitle">Tu viaje, tu ritmo</span>
                    <div className="title-underline"></div>
                </h1>

                <p className="hero-description">
                    Planea con <strong>inteligencia</strong>, paga con <strong>comodidad</strong> y viaja con <strong>tranquilidad</strong>.
                    El sistema financiero que hace realidad tus sueños de viaje.
                </p>

                <div className="hero-buttons">
                    <button className="cta-button-main">
                        <span>Solicita tu plan ahora</span>
                    </button>
                    <button className="whatsapp-button">
                        <FaWhatsapp className="whatsapp-icon" />
                        <span>Consultar por WhatsApp</span>
                    </button>
                </div>
            </div>

            <div className="hero-image">
                <div className="image-container">
                    <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80" alt="Pareja planificando viajes con facilidad" />
                    <div className="image-overlay"></div>

                    {/* Floating card mejorada */}
                    <div className="floating-card">
                        <div className="card-header">
                            <div className="card-icon-wrapper">
                                <FaRegCreditCard className="card-icon" />
                            </div>
                            <div className="card-title">
                                <span className="card-name">Adventy Pay</span>
                                <span className="card-subtitle">¡Tu mejor opción!</span>
                            </div>
                        </div>

                        <div className="card-features">
                            <div className="card-feature">
                                <div className="check-wrapper">
                                    <MdDone className="check-icon" />
                                </div>
                                <span>Sin pago inicial</span>
                            </div>
                            <div className="card-feature">
                                <div className="check-wrapper">
                                    <MdDone className="check-icon" />
                                </div>
                                <span>Planes personalizados</span>
                            </div>
                            <div className="card-feature">
                                <div className="check-wrapper">
                                    <MdDone className="check-icon" />
                                </div>
                                <span>Sin intereses</span>
                            </div>
                        </div>

                        <div className="card-cta">
                            <button className="card-button">¡Aparta ya!</button>
                        </div>
                    </div>

                    {/* Success indicator */}
                    <div className="success-badge">
                        <span className="success-number">5000+</span>
                        <span className="success-text">Viajeros felices</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;