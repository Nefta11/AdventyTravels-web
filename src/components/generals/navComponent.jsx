import { Link } from 'react-router-dom';
import colors from '../../utils/colors';
import logo from '../../assets/images/goodTravel.png'; // Asegúrate de que la ruta al logo sea correcta
import './navComponent.css';

const NavComponent = () => {
    return (
        <nav className="nav-container" style={{ backgroundColor: colors.color1 }}>
            <div className="nav-content">
                <div>
                    <img src={logo} alt="logo app" className="nav-logo" />
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/experiencias">Experiencias</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/galeria">Galería</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavComponent;
