import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/generals/footer/FooterComponent";
import About from "../components/aboutUs/headerWelcome/About";
import WhoWeAre from '../components/aboutUs/WhoWeAre/WhoWeAre';
import OurServices from '../components/aboutUs/OurServices/OurServices';

export default function AboutUs() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <About />
            <WhoWeAre />
            <OurServices />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
}
