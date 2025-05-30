import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from "../components/generals/footer/FooterComponent";
import WhoWeAre from '../components/aboutUs/WhoWeAre/WhoWeAre';
import OurServices from '../components/aboutUs/OurServices/OurServices';
import LocationMap from '../components/aboutUs/locationMap/LocationMap';
import MoreAboutUs from '../components/aboutUs/moreAboutUs/MoreAboutUs';
//import TeamSection from '../components/aboutUs/teamMem/TeamSection';
import MissionVision from '../components/aboutUs/moreAboutUs/MissionVision';
import ValuesSection from '../components/aboutUs/ValuesSection/ValuesSection';
import Certifications from '../components/home/banner/Certifications';

export default function AboutUs() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <NavComponent />
            <WhoWeAre />
            <MoreAboutUs />
            {/*<TeamSection />*/}
            <MissionVision />
            <ValuesSection />
            <OurServices />
            <Certifications />
            <LocationMap />
            <FooterComponent />
        </motion.div>
    );
}
