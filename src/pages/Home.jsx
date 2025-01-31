import { useState, useEffect } from "react";
import NavComponent from '../components/home/nav/navComponent';
import CarouselComponent from "../components/home/carousel/carouselComponent";
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import TravelForm from "../components/generals/form/travelForm";
import TourSearch from "../components/home/searchF/TourSearch";

export default function Home() {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <div>
      {showForm && <TravelForm />}
      <NavComponent />
      <CarouselComponent />
      <TourSearch />
      <WhatsAppIcon />
    </div>
  );
}
