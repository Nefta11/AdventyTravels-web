import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from "../components/generals/footer/FooterComponent";
import XicotepecHero from '../components/xicotepec/hero/XicotepecHero';
import AdventureSelector from '../components/xicotepec/adventure/AdventureSelector';
import DestinationInfo from '../components/xicotepec/destinationInfo/DestinationInfo';

export default function Xicotepec() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <XicotepecHero />
            <AdventureSelector />
            <DestinationInfo />
            <FooterComponent />
        </motion.div>
    );
}
