import NavComponent from '../components/home/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/home/footer/FooterComponent";
import UnderConstruction from '../components/underConstruction/UnderConstruction';

export default function AboutUs() {

    return (
        <>
            <NavComponent />
            <UnderConstruction />
            <FooterComponent />
            <WhatsAppIcon />
        </>
    );
}
