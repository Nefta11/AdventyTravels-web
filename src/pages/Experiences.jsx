import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/generals/footer/FooterComponent";
import UnderConstruction from '../components/underConstruction/UnderConstruction';

export default function Experiences() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <UnderConstruction pageName="Experiencias" />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
}
