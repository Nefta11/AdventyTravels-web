import { useState } from 'react';
import "./Footer.css";
import {
    FaInstagram, FaFacebook, FaWhatsapp, FaTiktok,
    FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight,
    FaInfo, FaShieldAlt, FaCreditCard,
    FaPassport, FaHeadset, FaNewspaper
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import TermsModal from './TermsModal';

const FooterComponent = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState(null);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <footer className="footer">
            <div className="footer-wave"></div>

            <div className="footer-container">
                <div className="footer-section footer-logo-section">
                    <h2 className="footer-brand">ADVENTY TRAVELS<span className="footer-reg">®</span></h2>
                    <p className="footer-slogan">Agencia de viajes</p>

                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/adventytravels/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon instagram ${hoveredSocial === 'instagram' ? 'social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('instagram')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaInstagram />
                            <span className="social-tooltip">Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/adventytravels?locale=es_LA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon facebook ${hoveredSocial === 'facebook' ? 'social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('facebook')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaFacebook />
                            <span className="social-tooltip">Facebook</span>
                        </a>
                        <a
                            href="whatsapp://send?phone=5217716075321"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon whatsapp ${hoveredSocial === 'whatsapp' ? 'social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('whatsapp')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaWhatsapp />
                            <span className="social-tooltip">WhatsApp</span>
                        </a>
                        <a
                            href="https://www.tiktok.com/@adventytravels?_t=ZM-8ttXPrhii7p&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon tiktok ${hoveredSocial === 'tiktok' ? 'social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('tiktok')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaTiktok />
                            <span className="social-tooltip">TikTok</span>
                        </a>
                    </div>
                </div>

                <div className="footer-section footer-contact">
                    <h3 className="footer-title">Contacto</h3>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaPhone />
                        </div>
                        <p>(+52) 776 607 5321</p>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>
                        <p>Administracion@adventytravels.com</p>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <p>Av.5 de Mayo Local 5PA, Xicotepec de Juárez, Pue.</p>
                    </div>
                </div>

                <div className="footer-section footer-links">
                    <h3 className="footer-title">Enlaces</h3>
                    <ul>
                        <li onClick={() => window.location.href = '/nosotros'} style={{ cursor: 'pointer' }}>
                            <FaInfo className="link-icon" />
                            <span>{t('footer.aboutUs')}</span>
                            <FaArrowRight className="arrow-icon" />
                        </li>
                        <li onClick={handleModalOpen}>
                            <FaShieldAlt className="link-icon" />
                            <span>{t('footer.privacyPolicy')}</span>
                            <FaArrowRight className="arrow-icon" />
                        </li>
                        <li onClick={() => window.location.href = '/AdventyPay'} style={{ cursor: 'pointer' }}>
                            <FaCreditCard className="link-icon" />
                            <span>{t('footer.financing')}</span>
                            <FaArrowRight className="arrow-icon" />
                        </li>
                    </ul>
                </div>

                <div className="footer-section footer-links">
                    <h3 className="footer-title">Servicios</h3>
                    <ul>
                        <li>
                            <FaPassport className="link-icon" />
                            <span>{t('footer.visas')}</span>
                            <FaArrowRight className="arrow-icon" />
                        </li>
                        <li>
                            <FaHeadset className="link-icon" />
                            <span>{t('footer.customerService')}</span>
                            <FaArrowRight className="arrow-icon" />
                        </li>
                        <li onClick={() => window.location.href = '/blog'} style={{ cursor: 'pointer' }}>
                            <FaNewspaper className="link-icon" />
                            <span>{t('footer.blog')}</span>
                            <FaArrowRight className="arrow-icon" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} Adventy Travels. Todos los derechos reservados.</p>
                </div>
            </div>

            <TermsModal show={showModal} handleClose={handleModalClose} />
        </footer>
    );
};

export default FooterComponent;