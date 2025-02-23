import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/generals/footer/FooterComponent";
import About from "../components/aboutUs/headerWelcome/About";

export default function AboutUs() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <About />
            <FooterComponent />
            <WhatsAppIcon />
        </motion.div>
    );
}
