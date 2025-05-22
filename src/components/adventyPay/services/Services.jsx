import { FaSuitcase, FaPlane, FaHotel, FaShip, FaPassport, FaUsers } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <section className="services-adventy-section">
            <div className="services-adventy-section-header">
                <h2>Servicios que puedes pagar con Adventy Pay</h2>
                <div className="services-adventy-header-decoration"></div>
            </div>
            <div className="services-adventy-grid">
                <div className="services-adventy-card">
                    <div className="services-adventy-icon-wrapper">
                        <FaSuitcase className="services-adventy-icon" />
                    </div>
                    <h3>Paquetes turísticos</h3>
                    <p>Nacionales e internacionales</p>
                </div>
                <div className="services-adventy-card">
                    <div className="services-adventy-icon-wrapper">
                        <FaPlane className="services-adventy-icon" />
                    </div>
                    <h3>Boletos de avión</h3>
                    <p>Todas las aerolíneas</p>
                </div>
                <div className="services-adventy-card">
                    <div className="services-adventy-icon-wrapper">
                        <FaHotel className="services-adventy-icon" />
                    </div>
                    <h3>Hoteles y traslados</h3>
                    <p>Hospedaje y transporte</p>
                </div>
                <div className="services-adventy-card">
                    <div className="services-adventy-icon-wrapper">
                        <FaShip className="services-adventy-icon" />
                    </div>
                    <h3>Cruceros y experiencias</h3>
                    <p>Aventuras inolvidables</p>
                </div>
                <div className="services-adventy-card">
                    <div className="services-adventy-icon-wrapper">
                        <FaPassport className="services-adventy-icon" />
                    </div>
                    <h3>Trámite de visas</h3>
                    <p>Y seguros de viaje</p>
                </div>
                <div className="services-adventy-card">
                    <div className="services-adventy-icon-wrapper">
                        <FaUsers className="services-adventy-icon" />
                    </div>
                    <h3>Viajes escolares</h3>
                    <p>O grupales</p>
                </div>
            </div>
        </section>
    );
};

export default Services;