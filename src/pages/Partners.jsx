import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from '../components/generals/footer/FooterComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import PartnerHeader from "../components/partners/header/PartnerHeader.jsx";
import PartnerBenefits from '../components/partners/benefits/PartnerBenefits.jsx';
import PartnerProcess from '../components/partners/process/PartnerProcess.jsx';
import ContentCreatorSection from '../components/partners/ContentCreatorSection/ContentCreatorSection.jsx';
import RegistrationFAQ from '../components/partners/RegistrationFAQ/RegistrationFAQ.jsx';

const Partners = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <PartnerHeader />
            <PartnerProcess />
            <PartnerBenefits />
            <ContentCreatorSection />
            <RegistrationFAQ />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
};

export default Partners;
