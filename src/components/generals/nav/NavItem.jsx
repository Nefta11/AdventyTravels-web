import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import "./NavItem.css";

const NavItem = ({ to, icon: Icon, label, menuOpen, submenu }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleSubmenuToggle = () => {
        setSubmenuOpen(!submenuOpen);
    };

    useEffect(() => {
        if (!menuOpen) {
            setSubmenuOpen(false);
        }
    }, [menuOpen]);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        setIsMobile(/android|iPad|iPhone|iPod/.test(userAgent.toLowerCase()));
    }, []);

    return (
        <li className="nav-item">
            {menuOpen && <Icon style={{ marginLeft: '10px', marginRight: '8px' }} />}
            <Link to={to} onClick={submenu ? handleSubmenuToggle : null}>
                {label}
                {submenu && (submenuOpen ? <FaChevronUp style={{ marginLeft: '5px', fontSize: '0.7em', position: 'relative', top: '2px' }} /> : <FaChevronDown style={{ marginLeft: '5px', fontSize: '0.7em', position: 'relative', top: '2px' }} />)}
            </Link>
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
                        <a href={isMobile ? "fb-messenger://user/108316027661637" : "https://www.facebook.com/messages/t/108316027661637?locale=es_LA"} target="_blank" rel="noopener noreferrer">
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

