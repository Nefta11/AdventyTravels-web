import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaHome, FaSuitcase, FaInfoCircle, FaBlog, FaImages, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import colors from '../../../utils/colors';
import logo from '../../../assets/images/goodTravel.png';
import LanguageSelector from '../lenguaje/LanguageSelector';
import './navComponent.css';

const NavComponent = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-container fixed-nav" style={{ backgroundColor: colors.color1 }}>
            <div className="nav-content">
                <div className="nav-header">
                    {/* Ícono del menú al inicio */}
                    <div className="nav-menu-icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                    {/* Logo de la aplicación */}
                    <img src={logo} alt="logo app" className="nav-logo" />

                    {/* Selector de idioma al final */}
                    <LanguageSelector className="language-selector-desktop" />
                </div>

                {/* Lista de navegación */}
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li className="nav-item">
                        {menuOpen && <FaHome style={{ marginLeft: '10px', marginRight: '8px' }} />}
                        <Link to="/">{t('home')}</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaSuitcase style={{ marginLeft: '10px', marginRight: '8px' }} />}
                        <Link to="/experiencias">{t('experiences')}</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaInfoCircle style={{ marginLeft: '10px', marginRight: '8px' }} />}
                        <Link to="/nosotros">{t('about')}</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaBlog style={{ marginLeft: '10px', marginRight: '8px' }} />}
                        <Link to="/blog">{t('blog')}</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaImages style={{ marginLeft: '10px', marginRight: '8px' }} />}
                        <Link to="/galeria">{t('gallery')}</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaEnvelope style={{ marginLeft: '10px', marginRight: '8px' }} />}
                        <Link to="/contacto">{t('contact')}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavComponent;
