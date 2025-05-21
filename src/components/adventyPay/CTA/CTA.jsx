import { FaWhatsapp } from 'react-icons/fa';
import { MdFlightTakeoff } from 'react-icons/md';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2>Solicita tu plan de pagos</h2>
                <p>Con Adventy Pay, el viaje de tus sueños está al alcance. Planea con inteligencia, paga con comodidad y viaja con tranquilidad. Solicítalo hoy mismo.</p>
                <div className="cta-buttons">
                    <button className="primary-button">
                        <MdFlightTakeoff className="button-icon" />
                        Solicitar plan
                    </button>
                    <button className="secondary-button">
                        <FaWhatsapp className="button-icon" />
                        Contactar por WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;