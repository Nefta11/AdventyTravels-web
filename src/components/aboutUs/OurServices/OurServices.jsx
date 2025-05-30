import './OurServices.css';
import { useTranslation } from 'react-i18next';
import {
    FaHotel, FaPlane, FaSuitcase, FaMapMarkedAlt, FaShuttleVan,
    FaCar, FaShip, FaShieldAlt, FaPassport, FaStar, FaInfoCircle
} from 'react-icons/fa';
import { useState } from 'react';

const services = [
    { icon: <FaHotel />, title: 'services.hotelBooking.title', description: 'services.hotelBooking.description' },
    { icon: <FaPlane />, title: 'services.flightTickets.title', description: 'services.flightTickets.description' },
    { icon: <FaSuitcase />, title: 'services.packages.title', description: 'services.packages.description' },
    { icon: <FaMapMarkedAlt />, title: 'services.tours.title', description: 'services.tours.description' },
    { icon: <FaShuttleVan />, title: 'services.transfers.title', description: 'services.transfers.description' },
    { icon: <FaCar />, title: 'services.carRental.title', description: 'services.carRental.description' },
    { icon: <FaShip />, title: 'services.cruises.title', description: 'services.cruises.description' },
    { icon: <FaShieldAlt />, title: 'services.travelInsurance.title', description: 'services.travelInsurance.description' },
    { icon: <FaPassport />, title: 'services.visaProcessing.title', description: 'services.visaProcessing.description' },
    { icon: <FaStar />, title: 'services.experiencesEvents.title', description: 'services.experiencesEvents.description' }
];

const OurServices = () => {
    const { t } = useTranslation();
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleCardClick = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);
    };

    return (
        <section className="our-services-section">
            <div className="services-header">
                <h2 className='title'>{t('ourServices')}</h2>
                <div className="title-underline"></div>
            </div>

            <div className="services-container">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-card ${clickedIndex === index ? 'active' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className={`service-card-inner ${clickedIndex === index ? 'clicked' : ''}`}>
                            <div className="service-card-front">
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">{service.icon}</div>
                                </div>
                                <h3 className="service-title">{t(service.title)}</h3>
                                <div className="click-indicator">
                                    <FaInfoCircle />
                                </div>
                            </div>
                            <div className="service-card-back">
                                <p className="service-description">{t(service.description)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;