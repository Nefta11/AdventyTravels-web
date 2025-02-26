import './OurServices.css';
import { useTranslation } from 'react-i18next';
import { FaHotel, FaPlane, FaSuitcase, FaMapMarkedAlt, FaShuttleVan, FaCar, FaShip, FaShieldAlt } from 'react-icons/fa';

const services = [
    { icon: <FaHotel />, title: 'Reserva de Hoteles', description: 'Gestionamos la reserva de hoteles alrededor del mundo, desde alojamientos económicos hasta lujosos resorts.' },
    { icon: <FaPlane />, title: 'Venta de Boletos Aéreos Nacionales e Internacionales', description: 'Compra y reserva de boletos aéreos con opciones personalizadas para encontrar las mejores tarifas.' },
    { icon: <FaSuitcase />, title: 'Paquetes (Hotel + Tours) Nacional e Internacional', description: 'Combinamos hospedaje con tours y actividades en destinos nacionales e internacionales.' },
    { icon: <FaMapMarkedAlt />, title: 'Tours y Actividades', description: 'Visitas guiadas, excursiones y actividades adaptadas a tus intereses en diferentes destinos.' },
    { icon: <FaShuttleVan />, title: 'Traslados Privados o Compartidos', description: 'Coordinamos traslados desde y hacia aeropuertos, asegurando comodidad y puntualidad.' },
    { icon: <FaCar />, title: 'Renta de Autos', description: 'Alquiler de vehículos en tus destinos de viaje con opciones variadas y flexibles.' },
    { icon: <FaShip />, title: 'Cruceros', description: 'Reserva de cruceros con diferentes rutas y líneas de navegación para unas vacaciones en alta mar.' },
    { icon: <FaShieldAlt />, title: 'Seguro de Viajes', description: 'Seguros de viaje que cubren emergencias médicas, cancelaciones y pérdida de equipaje.' }
];

const OurServices = () => {
    const { t } = useTranslation();

    return (
        <section className="our-services-section">
            <h2>{t('ourServices')}</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                            </div>
                            <div className="service-card-back">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
