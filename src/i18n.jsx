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
      contact: "Contacto",
      travelForm: {
        title: "¿Le ayudamos a hacer realidad su viaje?",
        firstName: "Nombres",
        lastName: "Apellidos",
        email: "Email",
        phonePlaceholder: "Teléfono de Contacto",
        arrivalDate: "Fecha de llegada DD/MM/YYYY",
        numberOfTravelers: "Número de Viajeros",
        message: "Escribanos aquí su consulta *",
        submit: "¡Consulte Ahora!"
      },
      tourSearch: {
        tours: "Tours",
        flights: "Vuelos",
        insurance: "Seguros",
        hotel: "Hotel",
        hotels: "Hotel + Vuelo",
        findTour: "Encuentra tu tour ideal",
        region: "Región",
        cityCountry: "📍 Ciudad, País",
        month: "📅 Mes",
        nights: "🌙 Noches",
        search: "Buscar"
      }
    }
  },
  en: {
    translation: {
      home: "Home",
      experiences: "Experiences",
      about: "About Us",
      blog: "Blog",
      gallery: "Gallery",
      contact: "Contact",
      travelForm: {
        title: "Can we help you make your trip a reality?",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phonePlaceholder: "Contact Phone",
        arrivalDate: "Arrival Date DD/MM/YYYY",
        numberOfTravelers: "Number of Travelers",
        message: "Write your query here *",
        submit: "Consult Now!"
      },
      tourSearch: {
        tours: "Tours",
        flights: "Flights",
        insurance: "Insurance",
        hotel: "Hotel",
        hotels: "Hotel + Flight",
        findTour: "Find your ideal tour",
        region: "Region",
        cityCountry: "📍 City, Country",
        month: "📅 Month",
        nights: "🌙 Nights",
        search: "Search"
      }
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      experiences: "Expériences",
      about: "À propos de nous",
      blog: "Blog",
      gallery: "Galerie",
      contact: "Contact",
      travelForm: {
        title: "Pouvons-nous vous aider à réaliser votre voyage?",
        firstName: "Prénom",
        lastName: "Nom de famille",
        email: "Email",
        phonePlaceholder: "Téléphone de contact",
        arrivalDate: "Date d'arrivée JJ/MM/AAAA",
        numberOfTravelers: "Nombre de voyageurs",
        message: "Écrivez votre question ici *",
        submit: "Consultez maintenant!"
      },
      tourSearch: {
        tours: "Tours",
        flights: "Vols",
        insurance: "Assurances",
        hotel: "Hôtel",
        hotels: "Hôtel + Vol",
        findTour: "Trouvez votre tour idéal",
        region: "Région",
        cityCountry: "📍 Ville, Pays",
        month: "📅 Mois",
        nights: "🌙 Nuits",
        search: "Rechercher"
      }
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
