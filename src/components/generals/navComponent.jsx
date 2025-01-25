import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
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
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/seguridad">Seguridad</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pago">Pago en Línea</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/viajeros">Viajeros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/productos">Servicios / Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/lanzamientos">Nuevos lanzamientos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavComponent;
