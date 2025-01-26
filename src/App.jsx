import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './pages/Home';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
