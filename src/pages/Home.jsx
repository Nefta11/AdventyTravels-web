import { useState, useEffect } from "react";
import NavComponent from '../components/home/nav/navComponent';
import CarouselComponent from "../components/home/carousel/carouselComponent";
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import TravelForm from "../components/generals/form/travelForm";
import TourSearch from "../components/home/searchF/TourSearch";
import PromoBanner from "../components/home/banner/PromoBanner";

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
      <WhatsAppIcon />
    </>
  );
}
