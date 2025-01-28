import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    return (
        <a
            href="https://wa.me/5217716075321"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.floatingButton}
        >
            <FaWhatsapp style={styles.icon} />
        </a>
    );
};

const styles = {
    floatingButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '10px',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
        zIndex: 1000,
    },
    icon: {
        fontSize: '2rem', // Tamaño por defecto
    },
    '@media (max-width: 768px)': {
        icon: {
            fontSize: '1.5rem', // Tamaño para pantallas pequeñas
        },
    },
};

export default WhatsAppIcon;
