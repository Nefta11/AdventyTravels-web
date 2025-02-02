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
        findFlight: "Encuentra tu vuelo ideal",
        findInsurance: "Encuentra tu seguro ideal",
        findHotel: "Encuentra tu hotel ideal",
        findHotels: "Encuentra tu hotel + vuelo ideal",
        region: "Región",
        cityCountry: "📍 Ciudad, País",
        month: "📅 Mes",
        nights: "🌙 Noches",
        search: "Buscar",
        departureCity: "Ciudad de salida",
        destinationCity: "Ciudad de destino",
        departureDate: "Fecha de salida",
        returnDate: "Fecha de regreso",
        insuranceType: "Tipo de seguro",
        coverageAmount: "Monto de cobertura",
        startDate: "Fecha de inicio",
        endDate: "Fecha de fin",
        checkInDate: "Fecha de entrada",
        checkOutDate: "Fecha de salida",
        guests: "Huéspedes"
      },
      trendingDestinations: "Destinos de Tendencia",
      peopleSearching: "Personas buscando en México también han reservado aquí"
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
        findFlight: "Find your ideal flight",
        findInsurance: "Find your ideal insurance",
        findHotel: "Find your ideal hotel",
        findHotels: "Find your ideal hotel + flight",
        region: "Region",
        cityCountry: "📍 City, Country",
        month: "📅 Month",
        nights: "🌙 Nights",
        search: "Search",
        departureCity: "Departure City",
        destinationCity: "Destination City",
        departureDate: "Departure Date",
        returnDate: "Return Date",
        insuranceType: "Insurance Type",
        coverageAmount: "Coverage Amount",
        startDate: "Start Date",
        endDate: "End Date",
        checkInDate: "Check-in Date",
        checkOutDate: "Check-out Date",
        guests: "Guests"
      },
      trendingDestinations: "Trending Destinations",
      peopleSearching: "People searching in Mexico have also booked here"
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
        findFlight: "Trouvez votre vol idéal",
        findInsurance: "Trouvez votre assurance idéale",
        findHotel: "Trouvez votre hôtel idéal",
        findHotels: "Trouvez votre hôtel + vol idéal",
        region: "Région",
        cityCountry: "📍 Ville, Pays",
        month: "📅 Mois",
        nights: "🌙 Nuits",
        search: "Rechercher",
        departureCity: "Ville de départ",
        destinationCity: "Ville de destination",
        departureDate: "Date de départ",
        returnDate: "Date de retour",
        insuranceType: "Type d'assurance",
        coverageAmount: "Montant de la couverture",
        startDate: "Date de début",
        endDate: "Date de fin",
        checkInDate: "Date d'arrivée",
        checkOutDate: "Date de départ",
        guests: "Invités"
      },
      trendingDestinations: "Destinations Tendance",
      peopleSearching: "Les personnes recherchant au Mexique ont également réservé ici"
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
