import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaWhatsapp, FaFacebookMessenger, FaPhone } from 'react-icons/fa';
import "./NavItem.css";

const NavItem = ({ to, icon: Icon, label, menuOpen, submenu }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const handleSubmenuToggle = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <li className="nav-item">
            {menuOpen && <Icon style={{ marginLeft: '10px', marginRight: '8px' }} />}
            <Link to={to} onClick={submenu ? handleSubmenuToggle : null}>{label}</Link>
            {submenu && (
                <ul className={`dropdown-menu ${submenuOpen ? 'open' : ''}`}>
                    <li>
                        <a href="tel:+5217716075321">
                        Via Llamada<FaPhone className="submenu-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="whatsapp://send?phone=5217716075321" target="_blank" rel="noopener noreferrer">
                            Via WhatsApp <FaWhatsapp className="submenu-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/messages/t/108316027661637?locale=es_LA" target="_blank" rel="noopener noreferrer">
                            Via Messenger <FaFacebookMessenger className="submenu-icon" />
                        </a>
                    </li>
                </ul>
            )}
        </li>
    );
};

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    menuOpen: PropTypes.bool.isRequired,
    submenu: PropTypes.bool,
};

export default NavItem;

