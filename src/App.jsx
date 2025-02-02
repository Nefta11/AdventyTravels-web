import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import LenguajeTranslations from './lenguaje/LenguajeTranslations';
import Home from './pages/Home';

function App() {
  return (
    <I18nextProvider i18n={LenguajeTranslations}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
