import { FaRegBuilding, FaHandshake, FaRegClock } from 'react-icons/fa';
import { MdAttachMoney, MdLocationOn } from 'react-icons/md';
import './Advantages.css';

const Advantages = () => {
    return (
        <section className="advantages-section">
            <div className="section-header">
                <h2>Ventajas de Adventy Pay</h2>
            </div>
            <div className="advantages-container">
                <div className="advantage-item">
                    <FaRegBuilding className="advantage-icon" />
                    <div className="advantage-text">
                        <h3>Agencia registrada</h3>
                        <p>Con oficina física</p>
                    </div>
                </div>
                <div className="advantage-item">
                    <MdAttachMoney className="advantage-icon" />
                    <div className="advantage-text">
                        <h3>Planes sin intereses</h3>
                        <p>Ni cargos ocultos</p>
                    </div>
                </div>
                <div className="advantage-item">
                    <FaHandshake className="advantage-icon" />
                    <div className="advantage-text">
                        <h3>Trato humano</h3>
                        <p>Y profesional</p>
                    </div>
                </div>
                <div className="advantage-item">
                    <FaRegClock className="advantage-icon" />
                    <div className="advantage-text">
                        <h3>Flexibilidad</h3>
                        <p>Según tus ingresos</p>
                    </div>
                </div>
                <div className="advantage-item">
                    <MdLocationOn className="advantage-icon" />
                    <div className="advantage-text">
                        <h3>Disponible</h3>
                        <p>Para toda la República Mexicana</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;