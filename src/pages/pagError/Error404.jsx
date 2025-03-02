import { motion } from 'framer-motion';
import './Error404.css';
import errorGif from './error.gif'; // Asegúrate de tener el archivo error.gif en la misma carpeta

function Error404() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="error-container"
        >
            <motion.img
                src={errorGif}
                alt="Error 404"
                className="error-gif"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
            />
            <motion.h1
                className="error-title"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                Error 404
            </motion.h1>
            <motion.p
                className="error-message"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
            >
                La página que estás buscando no existe.
            </motion.p>
            <motion.a
                href="/"
                className="error-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Volver al inicio
            </motion.a>
        </motion.div>
    );
}

export default Error404;
