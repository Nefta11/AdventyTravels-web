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
    };    return (
        <footer className="adventy-footer">
            <div className="adventy-footer-wave"></div>

            <div className="adventy-footer-container">
                <div className="adventy-footer-section adventy-footer-logo-section">
                    <h2 className="adventy-footer-brand">ADVENTY TRAVELS<span className="adventy-footer-reg">®</span></h2>
                    <p className="adventy-footer-slogan">Agencia de viajes</p>

                    <div className="adventy-footer-social-icons">
                        <a
                            href="https://www.instagram.com/adventytravels/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`adventy-footer-social-icon adventy-footer-instagram ${hoveredSocial === 'instagram' ? 'adventy-footer-social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('instagram')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaInstagram />
                            <span className="adventy-footer-social-tooltip">Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/adventytravels?locale=es_LA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`adventy-footer-social-icon adventy-footer-facebook ${hoveredSocial === 'facebook' ? 'adventy-footer-social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('facebook')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaFacebook />
                            <span className="adventy-footer-social-tooltip">Facebook</span>
                        </a>
                        <a
                            href="whatsapp://send?phone=5217716075321"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`adventy-footer-social-icon adventy-footer-whatsapp ${hoveredSocial === 'whatsapp' ? 'adventy-footer-social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('whatsapp')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaWhatsapp />
                            <span className="adventy-footer-social-tooltip">WhatsApp</span>
                        </a>
                        <a
                            href="https://www.tiktok.com/@adventytravels?_t=ZM-8ttXPrhii7p&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`adventy-footer-social-icon adventy-footer-tiktok ${hoveredSocial === 'tiktok' ? 'adventy-footer-social-hovered' : ''}`}
                            onMouseEnter={() => setHoveredSocial('tiktok')}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <FaTiktok />
                            <span className="adventy-footer-social-tooltip">TikTok</span>
                        </a>
                    </div>
                </div>

                <div className="adventy-footer-section adventy-footer-contact">
                    <h3 className="adventy-footer-title">Contacto</h3>
                    <div className="adventy-footer-contact-item">
                        <div className="adventy-footer-contact-icon">
                            <FaPhone />
                        </div>
                        <p>(+52) 776 607 5321</p>
                    </div>
                    <div className="adventy-footer-contact-item">
                        <div className="adventy-footer-contact-icon">
                            <FaEnvelope />
                        </div>
                        <p>Administracion@adventytravels.com</p>
                    </div>
                    <div className="adventy-footer-contact-item">
                        <div className="adventy-footer-contact-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <p>Av.5 de Mayo Local 5PA, Xicotepec de Juárez, Pue.</p>
                    </div>
                </div>

                <div className="adventy-footer-section adventy-footer-links">
                    <h3 className="adventy-footer-title">Enlaces</h3>
                    <ul>
                        <li onClick={() => window.location.href = '/nosotros'} style={{ cursor: 'pointer' }}>
                            <FaInfo className="adventy-footer-link-icon" />
                            <span>{t('footer.aboutUs')}</span>
                            <FaArrowRight className="adventy-footer-arrow-icon" />
                        </li>
                        <li onClick={handleModalOpen}>
                            <FaShieldAlt className="adventy-footer-link-icon" />
                            <span>{t('footer.privacyPolicy')}</span>
                            <FaArrowRight className="adventy-footer-arrow-icon" />
                        </li>
                        <li onClick={() => window.location.href = '/AdventyPay'} style={{ cursor: 'pointer' }}>
                            <FaCreditCard className="adventy-footer-link-icon" />
                            <span>{t('footer.financing')}</span>
                            <FaArrowRight className="adventy-footer-arrow-icon" />
                        </li>
                    </ul>
                </div>

                <div className="adventy-footer-section adventy-footer-links">
                    <h3 className="adventy-footer-title">Servicios</h3>
                    <ul>
                        <li>
                            <FaPassport className="adventy-footer-link-icon" />
                            <span>{t('footer.visas')}</span>
                            <FaArrowRight className="adventy-footer-arrow-icon" />
                        </li>
                        <li>
                            <FaHeadset className="adventy-footer-link-icon" />
                            <span>{t('footer.customerService')}</span>
                            <FaArrowRight className="adventy-footer-arrow-icon" />
                        </li>
                        <li onClick={() => window.location.href = '/blog'} style={{ cursor: 'pointer' }}>
                            <FaNewspaper className="adventy-footer-link-icon" />
                            <span>{t('footer.blog')}</span>
                            <FaArrowRight className="adventy-footer-arrow-icon" />
                        </li>
                    </ul>
                </div>
            </div>            <div className="adventy-footer-bottom">
                <div className="adventy-footer-copyright">
                    <p>© {new Date().getFullYear()} Adventy Travels. Todos los derechos reservados.</p>                    <div className="adventy-footer-developer-credit">
                        <a 
                            href="https://neftalivergaraportafolio.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="developer-credit-link"
                        >
                            <span className="heart-icon">💻</span>
                            <span>Desarrollador: Neftalí V.</span>
                        </a>
                    </div>
                </div>
            </div>

            <TermsModal show={showModal} handleClose={handleModalClose} />
        </footer>
    );
};

export default FooterComponent;