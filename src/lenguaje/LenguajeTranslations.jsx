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
        region: "🌍 Región",
        cityCountry: "📍 Ciudad, País",
        month: "📅 Mes",
        nights: "🌙 Noches",
        search: "Buscar",
        departureCity: "🚀 Ciudad de salida",
        destinationCity: "🎯 Ciudad de destino",
        departureDate: "📅 Fecha de salida",
        returnDate: "📅 Fecha de regreso",
        insuranceType: "🛡️ Tipo de seguro",
        coverageAmount: "💰 Monto de cobertura",
        startDate: "📅 Fecha de inicio",
        endDate: "📅 Fecha de fin",
        checkInDate: "📅 Fecha de entrada",
        checkOutDate: "📅 Fecha de salida",
        guests: "👥 Huéspedes"
      },
      advantages: {
        title: "Conoce las ventajas de viajar con Mundo Joven",
        items: [
          {
            title: "Compra fácil y rápido",
            description: "Reservar tus vacaciones y ofertas de viaje es muy sencillo. Lo puedes hacer desde nuestra página web, llamándonos al 7716075321 o visitando tu sucursal Good Travel más cercana."
          },
          {
            title: "Formas de pago",
            description: "Ofrecemos formas de pago que se ajustan a tus necesidades. Puedes pagar en efectivo, tarjeta de débito o a meses con tu tarjeta de crédito para que disfrutes tus vacaciones con toda la tranquilidad que necesitas."
          },
          {
            title: "Nunca te abandonamos",
            description: "Te asesoramos desde el momento en que cotizas tu viaje a cualquier parte del mundo. Estaremos contigo desde el proceso de tu reserva y te apoyaremos en todo momento en caso de cualquier incidencia o retraso."
          }
        ]
      },
      trendingDestinations: "Destinos de Tendencia",
      peopleSearching: "Personas buscando en México también han reservado aquí",
      footer: {
        aboutUs: "¿Quiénes Somos?",
        privacyPolicy: "Políticas de Privacidad",
        franchises: "Franquicias",
        groups: "Grupos",
        financing: "Financiamiento",
        jobBoard: "Bolsa de trabajo",
        travelLeaders: "Líderes viajeros",
        visas: "Visas",
        customerService: "Atención al cliente",
        blog: "Blog"
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
        findFlight: "Find your ideal flight",
        findInsurance: "Find your ideal insurance",
        findHotel: "Find your ideal hotel",
        findHotels: "Find your ideal hotel + flight",
        region: "🌍 Region",
        cityCountry: "📍 City, Country",
        month: "📅 Month",
        nights: "🌙 Nights",
        search: "Search",
        departureCity: "🚀 Departure City",
        destinationCity: "🎯 Destination City",
        departureDate: "📅 Departure Date",
        returnDate: "📅 Return Date",
        insuranceType: "🛡️ Insurance Type",
        coverageAmount: "💰 Coverage Amount",
        startDate: "📅 Start Date",
        endDate: "📅 End Date",
        checkInDate: "📅 Check-in Date",
        checkOutDate: "📅 Check-out Date",
        guests: "👥 Guests"
      },
      advantages: {
        title: "Discover the advantages of traveling with Mundo Joven",
        items: [
          {
            title: "Easy and fast purchase",
            description: "Booking your vacations and travel deals is very simple. You can do it from our website, by calling us at 7716075321 or by visiting your nearest Good Travel branch."
          },
          {
            title: "Payment methods",
            description: "We offer payment methods that suit your needs. You can pay in cash, debit card or in installments with your credit card so you can enjoy your vacation with all the peace of mind you need."
          },
          {
            title: "We never abandon you",
            description: "We advise you from the moment you quote your trip to any part of the world. We will be with you from the booking process and support you at all times in case of any incident or delay."
          }
        ]
      },
      trendingDestinations: "Trending Destinations",
      peopleSearching: "People searching in Mexico have also booked here",
      footer: {
        aboutUs: "About Us",
        privacyPolicy: "Privacy Policy",
        franchises: "Franchises",
        groups: "Groups",
        financing: "Financing",
        jobBoard: "Job Board",
        travelLeaders: "Travel Leaders",
        visas: "Visas",
        customerService: "Customer Service",
        blog: "Blog"
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
        findFlight: "Trouvez votre vol idéal",
        findInsurance: "Trouvez votre assurance idéale",
        findHotel: "Trouvez votre hôtel idéal",
        findHotels: "Trouvez votre hôtel + vol idéal",
        region: "🌍 Région",
        cityCountry: "📍 Ville, Pays",
        month: "📅 Mois",
        nights: "🌙 Nuits",
        search: "Rechercher",
        departureCity: "🚀 Ville de départ",
        destinationCity: "🎯 Ville de destination",
        departureDate: "📅 Date de départ",
        returnDate: "📅 Date de retour",
        insuranceType: "🛡️ Type d'assurance",
        coverageAmount: "💰 Montant de la couverture",
        startDate: "📅 Date de début",
        endDate: "📅 Date de fin",
        checkInDate: "📅 Date d'arrivée",
        checkOutDate: "📅 Date de départ",
        guests: "👥 Invités"
      },
      advantages: {
        title: "Découvrez les avantages de voyager avec Mundo Joven",
        items: [
          {
            title: "Achat facile et rapide",
            description: "Réserver vos vacances et offres de voyage est très simple. Vous pouvez le faire depuis notre site web, en nous appelant au 7716075321 ou en visitant votre succursale Good Travel la plus proche."
          },
          {
            title: "Moyens de paiement",
            description: "Nous proposons des moyens de paiement adaptés à vos besoins. Vous pouvez payer en espèces, par carte de débit ou en plusieurs fois avec votre carte de crédit pour profiter de vos vacances en toute tranquillité."
          },
          {
            title: "Nous ne vous abandonnons jamais",
            description: "Nous vous conseillons dès le moment où vous demandez un devis pour votre voyage dans n'importe quelle partie du monde. Nous serons avec vous dès le processus de réservation et vous soutiendrons à tout moment en cas d'incident ou de retard."
          }
        ]
      },
      trendingDestinations: "Destinations Tendance",
      peopleSearching: "Les personnes recherchant au Mexique ont également réservé ici",
      footer: {
        aboutUs: "Qui sommes-nous?",
        privacyPolicy: "Politique de confidentialité",
        franchises: "Franchises",
        groups: "Groupes",
        financing: "Financement",
        jobBoard: "Offres d'emploi",
        travelLeaders: "Leaders de voyage",
        visas: "Visas",
        customerService: "Service client",
        blog: "Blog"
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
