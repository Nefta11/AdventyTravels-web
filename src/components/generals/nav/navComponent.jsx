import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaSuitcase, FaInfoCircle, FaBlog, FaImages, FaEnvelope, FaUsers, FaHandshake, FaFemale, FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/LOGOTIPO_OFICIAL.webp';
import LanguageSelector from '../lenguaje/LanguageSelector';
import NavItem from './NavItem';
import './NavComponent.css';

const NavComponent = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
            if (window.innerWidth > 800) {
                setMenuOpen(false);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const newsSubmenuItems = [
        {
            label: 'Distribuidoras Adventy',
            href: '/distribuidor',
            icon: FaFemale
        },
        {
            label: 'Adventy Partners',
            href: '/partners',
            icon: FaHandshake
        }
    ];

    return (
        <nav className={`nav-container fixed-nav ${isScrolled ? 'scrolled' : ''} ${isDark ? 'dark' : ''}`}>
            <div className="nav-content">
                {/* Mobile hamburger button */}
                {isMobile && (
                    <div className="mobile-menu-btn" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                )}

                {/* Logo */}
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Adventy Travels" className="nav-logo" />
                </Link>

                {/* Main navigation */}
                <div className="nav-menu-container">
                    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                        <NavItem
                            to="/"
                            icon={isMobile ? FaHome : null}
                            label={t('home')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/'}
                        />
                        <NavItem
                            to="/experiencias"
                            icon={isMobile ? FaSuitcase : null}
                            label={t('experiences')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/experiencias'}
                        />
                        <NavItem
                            to="/nosotros"
                            icon={isMobile ? FaInfoCircle : null}
                            label={t('about')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/nosotros'}
                        />
                        <NavItem
                            to="/blog"
                            icon={isMobile ? FaBlog : null}
                            label={t('blog')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/blog'}
                        />
                        <NavItem
                            to="/galeria"
                            icon={isMobile ? FaImages : null}
                            label={t('gallery')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/galeria'}
                        />
                        <NavItem
                            icon={isMobile ? FaEnvelope : null}
                            label={t('contact')}
                            menuOpen={menuOpen}
                            submenu
                        />
                        <NavItem
                            icon={isMobile ? FaUsers : null}
                            label="News"
                            menuOpen={menuOpen}
                            submenu
                            submenuItems={newsSubmenuItems}
                        />

                        {/* Theme toggle button (desktop) */}
                        {!isMobile && (
                            <li className="nav-item theme-toggle-item">
                                <button onClick={toggleTheme} className="theme-toggle-btn">
                                    {isDark ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Controls container (always visible) */}
                <div className="controls-container">
                    {/* Desktop language selector */}
                    {!isMobile && (
                        <div className="language-selector-desktop-container">
                            <LanguageSelector />
                        </div>
                    )}

                    {/* Mobile theme toggle */}
                    {isMobile && (
                        <button onClick={toggleTheme} className="theme-toggle-mobile-btn">
                            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                    )}

                    {/* Mobile language selector */}
                    {isMobile && (
                        <div className="language-selector-mobile-container">
                            <LanguageSelector />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavComponent;