import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>GOOD TRAVEL® </h2>
                    <p>Agencia de viajes</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/adventytravels/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/goodtravelmx23?locale=es_LA" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="whatsapp://send?phone=5217716075321" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
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
                        <i className="fas fa-map-marker-alt"></i>📍Av.5 de Mayo Local 5PA, Xicotepec de Juárez, Pue.
                    </p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>¿Quiénes Somos?</li>
                        <li>Políticas de Privacidad</li>
                        <li>Franquicias</li>
                        <li>Grupos</li>
                        <li>Financiamiento</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>Bolsa de trabajo</li>
                        <li>Líderes viajeros</li>
                        <li>Visas</li>
                        <li>Atención al cliente</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
