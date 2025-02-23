import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./NavItem.css";
const NavItem = ({ to, icon: Icon, label, menuOpen }) => {
    return (
        <li className="nav-item">
            {menuOpen && <Icon style={{ marginLeft: '10px', marginRight: '8px' }} />}
            <Link to={to}>{label}</Link>
        </li>
    );
};
NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    menuOpen: PropTypes.bool.isRequired,
};

export default NavItem;

