import { FaMoneyBill, FaCalendarAlt, FaRegCreditCard, FaPlane } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="section-header">
                <h2>¿Cómo funciona?</h2>
            </div>
            <div className="steps-container">
                <div className="step-card">
                    <div className="step-number">1</div>
                    <div className="step-icon">
                        <FaMoneyBill />
                    </div>
                    <h3>Aparta sin pago inicial</h3>
                    <p>En muchas promociones puedes iniciar sin pagar.</p>
                </div>
                <div className="step-card">
                    <div className="step-number">2</div>
                    <div className="step-icon">
                        <FaCalendarAlt />
                    </div>
                    <h3>Arma tu plan de pagos</h3>
                    <p>Semanal, quincenal o mensual.</p>
                </div>
                <div className="step-card">
                    <div className="step-number">3</div>
                    <div className="step-icon">
                        <MdPerson />
                    </div>
                    <h3>Recibe atención personalizada</h3>
                    <p>Recordatorios y acompañamiento via WhatsApp o llamadas.</p>
                </div>
                <div className="step-card">
                    <div className="step-number">4</div>
                    <div className="step-icon">
                        <FaRegCreditCard />
                    </div>
                    <h3>Liquida antes de viajar</h3>
                    <p>Recibe tus documentos y viaja con respaldo total.</p>
                </div>
                <div className="step-card">
                    <div className="step-number">5</div>
                    <div className="step-icon">
                        <FaPlane />
                    </div>
                    <h3>Disfruta sin preocupaciones</h3>
                    <p>Respaldado por una agencia legalmente establecida.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;