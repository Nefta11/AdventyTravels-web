import { FaSuitcase, FaPlane, FaHotel, FaShip, FaPassport, FaUsers } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <section className="services-section">
            <div className="section-header">
                <h2>Servicios que puedes pagar con Adventy Pay</h2>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <FaSuitcase className="service-icon" />
                    <h3>Paquetes turísticos</h3>
                    <p>Nacionales e internacionales</p>
                </div>
                <div className="service-card">
                    <FaPlane className="service-icon" />
                    <h3>Boletos de avión</h3>
                    <p>Todas las aerolíneas</p>
                </div>
                <div className="service-card">
                    <FaHotel className="service-icon" />
                    <h3>Hoteles y traslados</h3>
                    <p>Hospedaje y transporte</p>
                </div>
                <div className="service-card">
                    <FaShip className="service-icon" />
                    <h3>Cruceros y experiencias</h3>
                    <p>Aventuras inolvidables</p>
                </div>
                <div className="service-card">
                    <FaPassport className="service-icon" />
                    <h3>Trámite de visas</h3>
                    <p>Y seguros de viaje</p>
                </div>
                <div className="service-card">
                    <FaUsers className="service-icon" />
                    <h3>Viajes escolares</h3>
                    <p>O grupales</p>
                </div>
            </div>
        </section>
    );
};

export default Services;