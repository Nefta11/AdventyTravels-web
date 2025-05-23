import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from "../components/generals/footer/FooterComponent";
import UnderConstruction from '../components/underConstruction/UnderConstruction';

export default function Xicotepec() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <UnderConstruction pageName="Xicotepec" />
            <FooterComponent />
        </motion.div>
    );
}
