import { useState, useEffect } from "react";
import NavComponent from '../components/home/nav/navComponent';
import CarouselComponent from "../components/home/carousel/carouselComponent";
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import TravelForm from "../components/generals/form/travelForm";
import TourSearch from "../components/home/searchF/TourSearchComponent";
import PromoBanner from "../components/home/banner/PromoBanner";
import TrendingDestinations from "../components/home/destination/TrendingDestinationsComponent";
import FooterComponent from "../components/home/footer/FooterComponent";

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
      <FooterComponent />
      <WhatsAppIcon />
    </>
  );
}
