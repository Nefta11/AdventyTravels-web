import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import LenguajeTranslations from './lenguaje/LenguajeTranslations';
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Error404 from './pages/pagError/Error404';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Distribuidor from './pages/Distribuidor';
import Partners from './pages/Partners';
import VerifyDistributor from './pages/VerifyDistributor';
import AdventyPay from './pages/adventyPay/AdventyPay';
import Xicotepec from './pages/Xicotepec';
import FestivalDetailPage from './pages/xicotepec/FestivalDetailPage';
import HotelDetail from './pages/xicotepec/HotelDetail';
import RestaurantDetail from './pages/xicotepec/RestaurantDetail';
import AtractivoDetail from './pages/xicotepec/AtractivoDetail';
import TourDetail from './pages/xicotepec/TourDetail';

function RoutesWithAnimation() {
  const location = useLocation();
  // Rutas normales cuando no está en mantenimiento
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/experiencias" element={<Experiences />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/distribuidor" element={<Distribuidor />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/verify-distributor" element={<VerifyDistributor />} />
      <Route path="/AdventyPay" element={<AdventyPay />} />
      <Route path='/xicotepec' element={<Xicotepec />} />
      <Route path='/festival/:id' element={<FestivalDetailPage />} />
      <Route path='/hotel/:slug' element={<HotelDetail />} />
      <Route path='/restaurant/:slug' element={<RestaurantDetail />} />
      <Route path='/atractivo/:slug' element={<AtractivoDetail />} />
      <Route path='/xicotepec/tour/:slug' element={<TourDetail />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

function App() {
  return (
    <I18nextProvider i18n={LenguajeTranslations}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="container">
          <SpeedInsights />
          <Analytics />
          <AnimatePresence exitBeforeEnter>
            <RoutesWithAnimation />
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
