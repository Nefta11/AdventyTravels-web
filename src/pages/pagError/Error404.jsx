import { motion } from 'framer-motion';
import './Error404.css';

function Error404() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="error-container"
        >
            <h1 className="error-title">Error 404</h1>
            <p className="error-message">La página que estás buscando no existe.</p>
            <motion.a
                href="/"
                className="error-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Volver al inicio
            </motion.a>
        </motion.div>
    );
}

export default Error404;
