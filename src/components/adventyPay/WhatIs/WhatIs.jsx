import { MdPayments, MdOutlineSecurity, MdOutlineContactSupport } from 'react-icons/md';
import './WhatIs.css';

const WhatIs = () => {
    return (
        <section className="what-is-section">
            <div className="section-header">
                <h2>¿Qué es Adventy Pay?</h2>
            </div>
            <div className="content-wrap">
                <div className="text-content">
                    <p>
                        Adventy Pay es el sistema financiero <span className="highlight">exclusivo de Adventy Travels</span> diseñado para que nuestros clientes puedan apartar y pagar sus viajes de manera <span className="highlight">flexible</span>, <span className="highlight">segura</span> y <span className="highlight">sin necesidad de cubrir el total al momento</span>.
                    </p>
                    <p>
                        Con Adventy Pay, puedes planear tus vacaciones sin preocuparte por el dinero, con seguimiento personalizado y atención profesional en todo el proceso.
                    </p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <MdPayments />
                        </div>
                        <h3>Flexibilidad</h3>
                        <p>Paga a tu ritmo según tus posibilidades</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <MdOutlineSecurity />
                        </div>
                        <h3>Seguridad</h3>
                        <p>Respaldado por una agencia establecida</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <MdOutlineContactSupport />
                        </div>
                        <h3>Personalizado</h3>
                        <p>Atención y seguimiento individual</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIs;