import { useState, useEffect } from "react";
import NavComponent from '../components/home/nav/navComponent';
import CarouselComponent from "../components/home/carousel/carouselComponent";
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import TravelForm from "../components/generals/form/travelForm";
import TourSearch from "../components/home/searchF/TourSearchComponent";
import PromoBanner from "../components/home/banner/PromoBanner";
import TrendingDestinations from "../components/home/destination/TrendingDestinationsComponent";
import FooterComponent from "../components/home/footer/FooterComponent";
import AdvantagesComponent from "../components/home/advantages/AdvantagesComponent";
import PerfectStay from "../components/home/perfectStay/PerfectStay";
import DiscoverStay from "../components/home/discoverStay/DiscoverStay";
import HotelLogosGrid from "../components/home/banner/HotelLogosGrid";
import SalesChannels from "../components/home/advantages/SalesChannels";
import BankPromotions from "../components/home/banner/BankPromotions";
import TravelOptions from "../components/home/travel Options/TravelOptions";

export default function Home() {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <>
      {showForm && <TravelForm />}
      <NavComponent />
      <CarouselComponent />
      <TourSearch />
      <PromoBanner />
      <TrendingDestinations />
      <PerfectStay />
      <DiscoverStay />
      <HotelLogosGrid />
      <AdvantagesComponent />
      <BankPromotions />
      <SalesChannels />
      <TravelOptions />
      <FooterComponent />
      <WhatsAppIcon />
    </>
  );
}
