import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppIcon.css'; // Importa el archivo CSS

const WhatsAppIcon = () => {
    return (
        <a
            href="https://wa.me/5217716075321"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-button" // Clases CSS
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppIcon;
