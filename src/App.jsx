import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import LenguajeTranslations from './lenguaje/LenguajeTranslations';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';

function App() {
  return (
    <I18nextProvider i18n={LenguajeTranslations}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiencias" element={<Experiences />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
