import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from '../components/generals/footer/FooterComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import UnderConstruction from '../components/underConstruction/UnderConstruction';

const Distribuidor = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <UnderConstruction pageName="Distribuidor" />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
};

export default Distribuidor;
