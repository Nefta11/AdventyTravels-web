import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Home, HelpCircle } from 'lucide-react';
import './Error404.css';
import errorGif from './error.gif';

function Error404() {
    const { t } = useTranslation();

    // Variantes para las animaciones de los elementos
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };


    return (
        <div className="error-container">
            {/* Formas decorativas animadas */}
            <div className="error-shapes">
                <motion.div
                    className="shape shape-1"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="shape shape-2"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="shape shape-3"
                    animate={{
                        y: [0, 30, 0],
                        rotate: [45, 90, 45]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="shape shape-4"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 7,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <motion.div
                className="error-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="error-gif-container"
                    variants={itemVariants}
                >
                    <motion.img
                        src={errorGif}
                        alt="Error 404"
                        className="error-gif"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 15,
                            delay: 0.2
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>

                <motion.h1
                    className="error-title"
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        textShadow: "0px 0px 8px rgba(36, 69, 93, 0.3)",
                        transition: { duration: 0.3 }
                    }}
                >
                    {t('error404.title', '404')}
                </motion.h1>

                <motion.p
                    className="error-message"
                    variants={itemVariants}
                >
                    {t('error404.message', 'La página que estás buscando no existe o ha sido movida.')}
                </motion.p>

                <motion.div
                    className="error-action"
                    variants={itemVariants}
                >
                    <motion.a
                        href="/"
                        className="error-link"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(36, 69, 93, 0.25)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Home size={18} />
                        {t('error404.link', 'Volver al inicio')}
                    </motion.a>

                    <motion.a
                        href="/help"
                        className="error-secondary"
                        whileHover={{
                            scale: 1.05,
                            color: 'var(--color5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <HelpCircle size={16} />
                        {t('error404.help', '¿Necesitas ayuda?')}
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Error404;