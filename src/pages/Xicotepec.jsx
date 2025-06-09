import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import XicotepecFooter from '../components/xicotepec/footer/XicotepecFooter';
import XicotepecHero from '../components/xicotepec/hero/XicotepecHero';
import AdventureSelector from '../components/xicotepec/adventure/AdventureSelector';
import DestinationInfo from '../components/xicotepec/destinationInfo/DestinationInfo';
import Atractivos from '../components/xicotepec/atractivos/Atractivos';
import Celebrations from '../components/xicotepec/celebrations/Festivals';
import Hotels from '../components/xicotepec/hotels/Hotels'
import Tours from '../components/xicotepec/tours/Tours';
import Restaurants from '../components/xicotepec/restaurants/Restaurants';

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
            <Atractivos />
            <Celebrations />
            <Hotels />
            <Tours />
            <Restaurants />
            <XicotepecFooter />
        </motion.div>
    );
}
