import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import NavComponent from '../components/generals/nav/navComponent';
import CarouselComponent from "../components/home/carousel/carouselComponent";
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import TravelForm from "../components/generals/form/travelForm";
import PromoBanner from "../components/home/banner/PromoBanner";
import TrendingDestinations from "../components/home/destination/TrendingDestinationsComponent";
import FooterComponent from "../components/generals/footer/FooterComponent";
import AdvantagesComponent from "../components/home/advantages/AdvantagesComponent";
import DiscoverStay from "../components/home/discoverStay/DiscoverStay";
import HotelLogosGrid from "../components/home/banner/HotelLogosGrid";
import SalesChannels from "../components/home/advantages/SalesChannels";
import BankPromotions from "../components/home/banner/BankPromotions";
import Certifications from "../components/home/banner/Certifications";
import ShopButton from "../components/home/searchF/ShopButton";
import AdventyPayButton from "../components/adventyPay/button/AdventyPayButton";

export default function Home() {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {showForm && <TravelForm />}
      <NavComponent />
      <CarouselComponent />
      <ShopButton />
      <PromoBanner />
      <TrendingDestinations />
      <DiscoverStay />
      <HotelLogosGrid />
      <AdvantagesComponent />
      <BankPromotions />
      <SalesChannels />
      <Certifications />
      <FooterComponent />
      <AdventyPayButton />
      <WhatsAppIcon />
    </motion.div>
  );
}
