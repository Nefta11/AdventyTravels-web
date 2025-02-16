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
        title: "¿Buscando tus próximas vacaciones?",
        description: "Llena el formulario y llévate hasta un 10% de descuento.",
        firstName: "Nombres",
        lastName: "Apellidos",
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
      perfectStay: {
        title: "¿Buscas la estancia perfecta?",
        subtitle: "Hoteles reservados después de búsquedas similares"
      },
      discoverStay: {
        title: "Descubre hospedajes en los destinos más buscados"
      },
      advantages: {
        title: "Conoce las ventajas de viajar con Adventy Travels",
        items: [
          {
            title: "Compra fácil y rápido",
            description: "Reservar tus vacaciones y ofertas de viaje es muy sencillo. Lo puedes hacer desde nuestra página web, llamándonos al 7716075321 o visitando tu sucursal Adventy Travels más cercana."
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
        financing: "Financiamiento",
        jobBoard: "Bolsa de trabajo",
        visas: "Visas",
        customerService: "Atención al cliente",
        blog: "Blog"
      },
      salesChannels: {
        title: "Otros canales de venta asistida:"
      },
      travelOptions: {
        title: "Todo lo que buscas en un solo lugar",
        description: "Vuelos a todo el mundo, múltiples opciones de paquetes vuelo + hotel, la asistencia de viaje más completa y la mejor experiencia en tours lo encuentras en Adventy Travel. No importa el tipo de viajero que seas, tu edad o cuántos integrantes de tu familia vayan de vacaciones siempre tendremos la mejor atención para que tu aventura sea tal y como tú lo deseas.",
        tabs: [
          { name: "Seguros", content: ["Seguro de viaje Internacional", "Seguro de viaje España", "Seguro de viaje Europa", "Seguro de viaje Canadá", "Seguro de viaje Estados Unidos"] },
          { name: "Hoteles", content: ["Hotel en Cancún", "Hotel en Madrid", "Hotel en París", "Hotel en Nueva York"] },
          { name: "Tours Internacionales", content: ["Tour por Asia", "Tour por Europa", "Tour por Sudamérica"] },
          { name: "Vuelos", content: ["Vuelos nacionales", "Vuelos internacionales", "Vuelos económicos"] },
          { name: "Paquetes", content: ["Paquete todo incluido", "Paquete de aventura", "Paquete de lujo"] },
        ]
      },
      bankPromotions: {
        banks: [
          {
            name: "BBVA",
            promotion: "Hasta 13 mensualidades sin intereses con",
          },
          {
            name: "Citibanamex",
            promotion: "Hasta 6 mensualidades sin intereses con",
          },
          {
            name: "HSBC",
            promotion: "Hasta 6 mensualidades sin intereses con",
          },
          {
            name: "AMEX",
            promotion: "Hasta 6 mensualidades sin intereses con",
          },
        ]
      },
      certifications: {
        secureText: "Agencia Segura, Compra Segura",
      },
      termsAndConditions: {
        title: "TÉRMINOS Y CONDICIONES GENERALES DE ADVENTY TRAVELS",
        lastUpdate: "Última actualización: 15/02/2025",
        intro: "El presente documento establece los términos y condiciones bajo los cuales Adventy Travels, operada legalmente por Grupo Comercial Bracarda, ofrece sus servicios de intermediación en la comercialización de viajes y servicios turísticos. Al contratar nuestros servicios, el cliente acepta de manera expresa e incondicional estos términos y condiciones.",
        sections: {
          contractPurpose: {
            title: "OBJETO DEL CONTRATO",
            content: "Adventy Travels actúa como intermediario entre el cliente y los proveedores de servicios turísticos, incluyendo pero no limitándose a:",
            items: [
              "Vuelos: boletos de avión nacionales e internacionales.",
              "Hospedaje: reservaciones en hoteles y alojamientos turísticos.",
              "Traslados y transportes: servicios privados o compartidos.",
              "Paquetes turísticos y cruceros.",
              "Experiencias y tours guiados.",
              "Trámites de visa y seguros de viaje."
            ],
            note: "El cliente reconoce que los servicios son proporcionados por terceros y que Adventy Travels no es responsable de la ejecución directa de dichos servicios, sino de la correcta intermediación entre el proveedor y el cliente."
          },
          bookingAndPayment: {
            title: "PROCESO DE RESERVA Y PAGO",
            content: "Para garantizar la contratación de cualquier servicio, el cliente deberá cumplir con los siguientes pasos:",
            items: [
              "Solicitud de reservación: el cliente debe proporcionar datos correctos y completos.",
              "Confirmación y pago: una vez recibida la confirmación de disponibilidad, el cliente deberá realizar el pago según lo indicado por la agencia.",
              "Entrega de documentos: después de efectuado el pago, se proporcionarán los boletos, comprobantes o vouchers correspondientes."
            ],
            paymentMethods: {
              title: "Formas de pago",
              content: "Adventy Travels acepta los siguientes métodos de pago:",
              items: [
                "Transferencia bancaria.",
                "Tarjetas de crédito y débito.",
                "Pagos en efectivo en establecimientos autorizados.",
                "Otros métodos que se indicarán en el momento de la compra."
              ],
              note: "Importante: En caso de pagos con tarjeta, el cliente debe asegurarse de contar con saldo suficiente y autorización bancaria."
            }
          },
          cancellationsAndModifications: {
            title: "CANCELACIONES Y MODIFICACIONES",
            clientSide: {
              title: "Por parte del cliente",
              items: [
                "Cancelaciones: Deben solicitarse por escrito. Se aplicarán penalizaciones dependiendo de las políticas de cada proveedor.",
                "Modificaciones: Cualquier cambio estará sujeto a disponibilidad y podrá generar costos adicionales.",
                "No presentación: Si el cliente no se presenta en la fecha y hora pactada, perderá el derecho al servicio y no habrá reembolso."
              ]
            },
            agencySide: {
              title: "Por parte de Adventy Travels",
              items: [
                "La agencia se reserva el derecho de modificar o cancelar servicios en caso de fuerza mayor, comprometiéndose a ofrecer alternativas equivalentes o reembolsos, según corresponda."
              ]
            }
          },
          clientResponsibilities: {
            title: "DOCUMENTACIÓN Y RESPONSABILIDADES DEL CLIENTE",
            content: "El cliente es único responsable de contar con la documentación requerida para su viaje, incluyendo:",
            items: [
              "Pasaporte vigente.",
              "Visa correspondiente (en caso de ser necesaria).",
              "Permisos especiales o requisitos sanitarios (vacunas, pruebas COVID, etc.)."
            ],
            note: "Si el cliente no presenta la documentación adecuada, perderá su derecho a los servicios contratados sin posibilidad de reembolso."
          },
          refunds: {
            title: "DEVOLUCIONES",
            content: "Las devoluciones dependerán de las políticas de cada proveedor. Algunos servicios son no reembolsables, mientras que otros pueden estar sujetos a cargos administrativos o penalizaciones.",
            note: "Adventy Travels solo podrá gestionar devoluciones cuando los proveedores lo permitan."
          },
          specificConditions: {
            title: "CONDICIONES ESPECÍFICAS POR TIPO DE SERVICIO",
            flights: {
              title: "6.1 VUELOS",
              items: [
                "Las tarifas de boletos aéreos están sujetas a cambios sin previo aviso.",
                "Las aerolíneas establecen sus propias políticas de equipaje, cambios y cancelaciones.",
                "Adventy Travels no se hace responsable por retrasos, cancelaciones o modificaciones de vuelos."
              ]
            },
            transfers: {
              title: "6.2 TRASLADOS Y OTROS SERVICIOS",
              items: [
                "Los clientes deben presentarse puntualmente en los puntos de encuentro indicados.",
                "Cualquier modificación debe solicitarse con anticipación y está sujeta a disponibilidad.",
                "La agencia no es responsable por retrasos por tráfico, fallas mecánicas o condiciones climáticas."
              ]
            },
            lodging: {
              title: "6.3 HOSPEDAJE",
              items: [
                "Las condiciones de check-in y check-out dependen de cada hotel.",
                "Cualquier daño en las instalaciones es responsabilidad del huésped.",
                "En caso de sobreventa o cancelación por parte del hotel, la agencia gestionará una alternativa similar, pero no se hace responsable de decisiones ajenas."
              ]
            }
          },
          advertisingAndPromotions: {
            title: "PUBLICIDAD Y PROMOCIONES",
            items: [
              "Las promociones están sujetas a disponibilidad y pueden tener términos específicos.",
              "Adventy Travels se reserva el derecho de corregir errores en publicidad, precios y disponibilidad."
            ]
          },
          intellectualProperty: {
            title: "PROPIEDAD INTELECTUAL",
            content: "Todo el contenido de Adventy Travels (logos, imágenes, textos, promociones) está protegido por derechos de autor y no puede ser utilizado sin autorización."
          },
          termsModification: {
            title: "MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES",
            content: "Adventy Travels podrá actualizar estos términos en cualquier momento. La versión vigente estará siempre disponible en nuestro sitio web."
          },
          applicableLaw: {
            title: "LEGISLACIÓN APLICABLE Y JURISDICCIÓN",
            content: "Este contrato se rige por las leyes vigentes en México. Cualquier disputa será resuelta en los tribunales de la Ciudad de México."
          },
          qualityControl: {
            title: "CONTROL DE CALIDAD Y ACEPTACIÓN",
            items: [
              "El cliente podrá enviar quejas y sugerencias dentro de los 15 días posteriores al servicio.",
              "Al realizar una reservación, el cliente acepta todos los términos y condiciones aquí descritos."
            ]
          },
          contact: {
            title: "CONTACTO Y ATENCIÓN AL CLIENTE",
            content: "Para cualquier consulta, queja o aclaración, puede comunicarse con Adventy Travels:",
            items: [
              "Correo electrónico: administracion@adventytravels.com",
              "Teléfono: 7716075321",
              "Dirección: Galerías De Vega, local #5, planta alta, Avenida 5 de Mayo, Colonia Centro, Xicotepec de Juárez, Puebla."
            ],
            note: "Al contratar cualquier servicio con Adventy Travels, el cliente declara haber leído, comprendido y aceptado estos Términos y Condiciones en su totalidad."
          }
        }
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
        title: "Looking for your next vacation?",
        description: "Fill out the form and get up to 10% discount.",
        firstName: "First Name",
        lastName: "Last Name",
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
      perfectStay: {
        title: "Looking for the Perfect Stay?",
        subtitle: "Hotels booked after similar searches"
      },
      discoverStay: {
        title: "Discover stays in the most sought-after destinations"
      },
      advantages: {
        title: "Discover the advantages of traveling with Adventy Travels",
        items: [
          {
            title: "Easy and fast purchase",
            description: "Booking your vacations and travel deals is very simple. You can do it from our website, by calling us at 7716075321 or by visiting your nearest Adventy Travels branch."
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
        financing: "Financing",
        jobBoard: "Job Board",
        visas: "Visas",
        customerService: "Customer Service",
        blog: "Blog"
      },
      salesChannels: {
        title: "Other assisted sales channels:"
      },
      travelOptions: {
        title: "Everything you are looking for in one place",
        description: "Flights around the world, multiple flight + hotel package options, the most complete travel assistance and the best experience in tours can be found at Advendty Travel. No matter what type of traveler you are, your age or how many family members are going on vacation, we will always have the best attention so that your adventure is just as you want it.",
        tabs: [
          { name: "Insurance", content: ["International Travel Insurance", "Spain Travel Insurance", "Europe Travel Insurance", "Canada Travel Insurance", "United States Travel Insurance"] },
          { name: "Hotels", content: ["Hotel in Cancun", "Hotel in Madrid", "Hotel in Paris", "Hotel in New York"] },
          { name: "International Tours", content: ["Tour of Asia", "Tour of Europe", "Tour of South America"] },
          { name: "Flights", content: ["Domestic flights", "International flights", "Cheap flights"] },
          { name: "Packages", content: ["All-inclusive package", "Adventure package", "Luxury package"] },
        ]
      },
      bankPromotions: {
        banks: [
          {
            name: "BBVA",
            promotion: "Up to 13 interest-free installments with",
          },
          {
            name: "Citibanamex",
            promotion: "Up to  6 interest-free installments with",
          },
          {
            name: "HSBC",
            promotion: "Up to 6 interest-free installments with",
          },
          {
            name: "AMEX",
            promotion: "Up to 6 interest-free installments with",
          },
        ]
      },
      certifications: {
        secureText: "Safe Agency, Safe Purchase",
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
        title: "Vous cherchez vos prochaines vacances?",
        description: "Remplissez le formulaire et obtenez jusqu'à 10% de réduction.",
        firstName: "Prénom",
        lastName: "Nom de famille",
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
      perfectStay: {
        title: "Vous cherchez le séjour parfait?",
        subtitle: "Hôtels réservés après des recherches similaires"
      },
      discoverStay: {
        title: "Découvrez des séjours dans les destinations les plus recherchées"
      },
      advantages: {
        title: "Découvrez les avantages de voyager avec Adventy Travels",
        items: [
          {
            title: "Achat facile et rapide",
            description: "Réserver vos vacances et offres de voyage est très simple. Vous pouvez le faire depuis notre site web, en nous appelant au 7716075321 ou en visitant votre succursale Adventy Travels la plus proche."
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
        financing: "Financement",
        jobBoard: "Offres d'emploi",
        visas: "Visas",
        customerService: "Service client",
        blog: "Blog"
      },
      salesChannels: {
        title: "Autres canaux de vente assistée:"
      },
      travelOptions: {
        title: "Tout ce que vous cherchez en un seul endroit",
        description: "Des vols autour du monde, de multiples options de forfaits vol + hôtel, l'assistance de voyage la plus complète et la meilleure expérience en tours se trouvent chez Adventy Travel. Peu importe le type de voyageur que vous êtes, votre âge ou le nombre de membres de votre famille qui partent en vacances, nous aurons toujours la meilleure attention pour que votre aventure soit exactement comme vous le souhaitez.",
        tabs: [
          { name: "Assurances", content: ["Assurance voyage internationale", "Assurance voyage Espagne", "Assurance voyage Europe", "Assurance voyage Canada", "Assurance voyage États-Unis"] },
          { name: "Hôtels", content: ["Hôtel à Cancun", "Hôtel à Madrid", "Hôtel à Paris", "Hôtel à New York"] },
          { name: "Tours internationaux", content: ["Tour d'Asie", "Tour d'Europe", "Tour d'Amérique du Sud"] },
          { name: "Vols", content: ["Vols domestiques", "Vols internationaux", "Vols pas chers"] },
          { name: "Forfaits", content: ["Forfait tout compris", "Forfait aventure", "Forfait de luxe"] },
        ]
      },
      bankPromotions: {
        banks: [
          {
            name: "BBVA",
            promotion: "Jusqu'à 13 mensualités sans intérêt avec",
          },
          {
            name: "Citibanamex",
            promotion: "Jusqu'à 6 mensualités sans intérêt avec",
          },
          {
            name: "HSBC",
            promotion: "Jusqu'à 6 mensualités sans intérêt avec",
          },
          {
            name: "AMEX",
            promotion: "Jusqu'à 6 mensualités sans intérêt avec",
          },
        ]
      },
      certifications: {
        secureText: "Agence Sécurisée, Achat Sécurisé",
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
