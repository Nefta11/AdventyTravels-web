import { useState, useEffect } from 'react';
import { FaBars, FaHome, FaSuitcase, FaInfoCircle, FaBlog, FaImages, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import colors from '../../../utils/colors';
import logo from '../../../assets/images/LOGOTIPO_OFICIAL.webp';
import LanguageSelector from '../lenguaje/LanguageSelector';
import NavItem from './NavItem';
import './navComponent.css';

const NavComponent = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                    {/* Selector de idioma fuera de la lista en pantallas pequeñas */}
                    {isMobile && <LanguageSelector className="language-selector-mobile" />}
                </div>

                {/* Lista de navegación */}
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <NavItem to="/" icon={FaHome} label={t('home')} menuOpen={menuOpen} />
                    <NavItem to="/experiencias" icon={FaSuitcase} label={t('experiences')} menuOpen={menuOpen} />
                    <NavItem to="/nosotros" icon={FaInfoCircle} label={t('about')} menuOpen={menuOpen} />
                    <NavItem to="/blog" icon={FaBlog} label={t('blog')} menuOpen={menuOpen} />
                    <NavItem to="/galeria" icon={FaImages} label={t('gallery')} menuOpen={menuOpen} />
                    <NavItem to="/contacto" icon={FaEnvelope} label={t('contact')} menuOpen={menuOpen} />
                    {/* Selector de idioma dentro de la lista en pantallas grandes */}
                    {!isMobile && <LanguageSelector className="language-selector-desktop" />}
                </ul>
            </div>
        </nav>
    );
};

export default NavComponent;
