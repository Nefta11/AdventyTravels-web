import { motion } from 'framer-motion';
import NavComponent from '../components/home/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/home/footer/FooterComponent";
import UnderConstruction from '../components/underConstruction/UnderConstruction';

export default function Blog() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <UnderConstruction pageName="Blog" />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
}
