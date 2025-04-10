import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from '../components/generals/footer/FooterComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import PartnerHeader from "../components/Partners/PartnerHeader";

const Partners = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <PartnerHeader />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
};

export default Partners;
