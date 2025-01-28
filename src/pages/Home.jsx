import NavComponent from '../components/home/nav/navComponent';
import CarouselComponent from "../components/home/carousel/carouselComponent";
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";

export default function Home() {
  return (
    <div>
      <NavComponent />
      <CarouselComponent />
      <WhatsAppIcon />
    </div>
  );
}
