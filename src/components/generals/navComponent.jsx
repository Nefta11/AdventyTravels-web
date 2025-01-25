import { Link } from 'react-router-dom';
import colors from '../../utils/colors';
import logo from '../../assets/images/goodTravel.png'; // Asegúrate de que la ruta al logo sea correcta

const NavComponent = () => {
    return (
        <nav style={{ backgroundColor: colors.color1, padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <img src={logo} alt="logo app" style={{ height: '50px' }} />
                </div>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/experiencias">Experiencias</Link>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/nosotros">Nosotros</Link>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/galeria">Galería</Link>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavComponent;
