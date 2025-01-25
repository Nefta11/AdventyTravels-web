import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaHome, FaSuitcase, FaInfoCircle, FaBlog, FaImages, FaEnvelope } from 'react-icons/fa';
import colors from '../../utils/colors';
import logo from '../../assets/images/goodTravel.png';
import './navComponent.css';

const NavComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-container" style={{ backgroundColor: colors.color1 }}>
            <div className="nav-content">
                <div className="nav-header">
                    <img src={logo} alt="logo app" className="nav-logo" />
                    <div className="nav-menu-icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </div>
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li className="nav-item">
                        {menuOpen && <FaHome />} <Link to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaSuitcase />} <Link to="/experiencias">Experiencias</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaInfoCircle />} <Link to="/nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaBlog />} <Link to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaImages />} <Link to="/galeria">Galeria</Link>
                    </li>
                    <li className="nav-item">
                        {menuOpen && <FaEnvelope />} <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavComponent;
