import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import LenguajeTranslations from './lenguaje/LenguajeTranslations';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Error404 from './pages/pagError/Error404';
import { SpeedInsights } from "@vercel/speed-insights/react"; // Importar SpeedInsights correctamente

function App() {
  return (
    <I18nextProvider i18n={LenguajeTranslations}>
      <BrowserRouter>
        <div className="container">
          <SpeedInsights /> {/* Agregar SpeedInsights */}
          <AnimatePresence exitBeforeEnter>
            <RoutesWithAnimation />
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/experiencias" element={<Experiences />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
