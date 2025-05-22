import HeroSection from '../../components/adventyPay/hero/HeroSection';
import WhatIs from '../../components/adventyPay/WhatIs/WhatIs';
import HowItWorks from '../../components/adventyPay/HowItWorks/HowItWorks';
import Services from '../../components/adventyPay/services/Services';
import Advantages from '../../components/adventyPay/Advantage/Advantages';
import Attention from '../../components/adventyPay/Attention/Attention';
import PaymentMethods from '../../components/adventyPay/PaymentMethods/PaymentMethods';
import NavComponent from '../../components/generals/nav/navComponent';
import FooterComponent from "../../components/generals/footer/FooterComponent";
import './AdventyPay.css';

const AdventyPay = () => {
    return (
        <>
            <NavComponent />
            <HeroSection />
            <WhatIs />
            <HowItWorks />
            <Services />
            <Advantages />
            <Attention />
            <PaymentMethods />
            <FooterComponent />
        </>
    );
};

export default AdventyPay;