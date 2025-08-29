import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import LenguajeTranslations from './lenguaje/LenguajeTranslations';
import ScrollToTop from './utils/ScrollToTop';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import RouterStack from './stack/RouterStack';

function App() {
  return (
    <I18nextProvider i18n={LenguajeTranslations}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="container">
          <SpeedInsights />
          <Analytics />
          <AnimatePresence exitBeforeEnter>
            <RouterStack />
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
