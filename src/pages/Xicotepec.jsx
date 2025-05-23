import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from "../components/generals/footer/FooterComponent";
import XicotepecHero from '../components/xicotepec/hero/XicotepecHero';
import AdventureSelector from '../components/xicotepec/adventure/AdventureSelector';

export default function Xicotepec() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <XicotepecHero />
            <AdventureSelector/>
            <FooterComponent />
        </motion.div>
    );
}
