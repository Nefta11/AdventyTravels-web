import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const FooterComponent = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>ADVENTY TRAVELS® </h2>
                    <p>Agencia de viajes</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/adventytravels/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/adventytravels?locale=es_LA" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="whatsapp://send?phone=5217716075321" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.tiktok.com/@adventytravels?_t=ZM-8ttXPrhii7p&_r=1" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </a>
                    </div>
                </div>
                <div className="footer-contact">
                    <p>
                        <i className="fas fa-phone-alt"></i> (+52) 776 607 5321
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> administracion@adventytravels.com
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>Av.5 de Mayo Local 5PA, Xicotepec de Juárez, Pue.
                    </p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>{t('footer.aboutUs')}</li>
                        <li>{t('footer.privacyPolicy')}</li>
                        <li>{t('footer.financing')}</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>{t('footer.jobBoard')}</li>
                        <li>{t('footer.visas')}</li>
                        <li>{t('footer.customerService')}</li>
                        <li>{t('footer.blog')}</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
