import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      home: "Inicio",
      experiences: "Experiencias",
      about: "Nosotros",
      blog: "Blog",
      gallery: "Galeria",
      contact: "Contacto"
    }
  },
  en: {
    translation: {
      home: "Home",
      experiences: "Experiences",
      about: "About Us",
      blog: "Blog",
      gallery: "Gallery",
      contact: "Contact"
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      experiences: "Expériences",
      about: "À propos de nous",
      blog: "Blog",
      gallery: "Galerie",
      contact: "Contact"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
