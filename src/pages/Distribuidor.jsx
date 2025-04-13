import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from '../components/generals/footer/FooterComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import AdventyDistribuidorasHeader from '../components/distribuidora/header/AdventyDistribuidorasHeader';
import AdventyWomenCampaign from '../components/distribuidora/womencam/AdventyWomenCampaign';
import AdventyDistributorSection from '../components/distribuidora/adventyDis/AdventyDistributorSection';

const Distribuidor = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <AdventyDistribuidorasHeader />
            <AdventyWomenCampaign />
            <AdventyDistributorSection />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
};

export default Distribuidor;
