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
        phoneNumber: "Número de teléfono",
        whatsappNumber: "Número de WhatsApp",
        selectState: "Selecciona un estado o región",
        message: "Escribanos aquí su consulta",
        submit: "Enviar"
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
        title: "Otros canales de venta asistida:",
        channels: {
          live: {
            description: "Contactar ahora a tu Asesor",
            buttonText: "Contacta"
          },
          whatsapp: {
            description: "Realiza tus consultas ¡Escríbenos!",
            buttonText: "Escríbenos"
          },
          phone: {
            description: "Llámanos y nuestros ejecutivos te orientarán en todo momento",
            buttonText: "Llámanos"
          },
          store: {
            description: "Visita nuestras sucursales a lo largo del país",
            buttonText: "Ver Sucursales"
          }
        }
      },
      bankPromotions: {
        title: "Promociones bancarias",
        banks: [
          {
            name: "BBVA",
            promotion: "Hasta 18 mensualidades sin intereses",
          },
          {
            name: "Citibanamex",
            promotion: "Hasta 13 mensualidades sin intereses",
          },
          {
            name: "HSBC",
            promotion: "Hasta 12 mensualidades sin intereses",
          },
          {
            name: "AMEX",
            promotion: "Hasta 9 mensualidades sin intereses",
          },
          {
            name: "BANCOAZTECA",
            promotion: "Hasta 18 mensualidades sin intereses"
          },
          {
            name: "SANTANDER",
            promotion: "Hasta 6 mensualidades sin intereses"
          }
        ]
      },
      certifications: {
        secureText: "Registros gubernamentales",
      },
      termsAndConditions: {
        iHaveRead: "He leído y acepto",
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
      },
      sweetAlert: {
        successTitle: "Tu información se ha enviado con éxito",
        successText: "En breve recibirás atención de nuestros asesores",
        errorTitle: "Hubo un error",
        errorText: "Intente de nuevo"
      },
      underConstruction: {
        title: "La sección de {{pageName}} está en construcción",
        text: "Estamos trabajando para ofrecerte la mejor experiencia. ¡Vuelve pronto!"
      },
      whoWeAre: {
        title: "¿Quiénes somos?",
        description1: "<strong>Adventy Travels</strong> es una agencia de viajes 100% poblana, orgullosamente mexicana y legalmente constituida, <strong>con más de 6 años de experiencia en el sector turístico</strong>. Somos la primera agencia de viajes registrada legalmente ante la Secretaría de Turismo en <strong>Xicotepec de Juárez</strong>, Puebla, desde nuestra <strong>fundación el 27 de marzo de 2019</strong>.",
        description2: "Nos destacamos por ofrecer experiencias de viaje personalizadas y de alta calidad, <strong>con un equipo conformado por jóvenes profesionales comprometidos con la excelencia, la innovación y la capacitación constante</strong>. A lo largo de nuestra trayectoria, hemos recibido múltiples reconocimientos y certificaciones en los estados de Puebla e Hidalgo, que nos avalan como una agencia segura, confiable, responsable y totalmente legal.",
        description3: "Operamos bajo la representación legal de <strong>GRUPO COMERCIAL BRACARDA</strong>, lo que nos permite ampliar nuestra red de servicios, garantizar el respaldo legal y operativo de nuestra empresa."
      },
      aboutUsHeader: "Nosotros",
      ourServices: "Nuestros Servicios",
      services: {
        hotelBooking: {
          title: "Reserva de Hoteles",
          description: "Gestionamos la reserva de hoteles alrededor del mundo, desde alojamientos económicos hasta lujosos resorts."
        },
        flightTickets: {
          title: "Venta de Boletos Aéreos Nacionales e Internacionales",
          description: "Compra y reserva de boletos aéreos con opciones personalizadas para encontrar las mejores tarifas."
        },
        packages: {
          title: "Paquetes (Hotel + Tours) Nacional e Internacional",
          description: "Combinamos hospedaje con tours y actividades en destinos nacionales e internacionales."
        },
        tours: {
          title: "Tours y Actividades",
          description: "Visitas guiadas, excursiones y actividades adaptadas a tus intereses en diferentes destinos."
        },
        transfers: {
          title: "Traslados Privados o Compartidos",
          description: "Coordinamos traslados desde y hacia aeropuertos, asegurando comodidad y puntualidad."
        },
        carRental: {
          title: "Renta de Autos",
          description: "Alquiler de vehículos en tus destinos de viaje con opciones variadas y flexibles."
        },
        cruises: {
          title: "Cruceros",
          description: "Reserva de cruceros con diferentes rutas y líneas de navegación para unas vacaciones en alta mar."
        },
        travelInsurance: {
          title: "Seguro de Viajes",
          description: "Seguros de viaje que cubren emergencias médicas, cancelaciones y pérdida de equipaje."
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
        phoneNumber: "Phone Number",
        whatsappNumber: "WhatsApp Number",
        selectState: "Select a state or region",
        message: "Write your inquiry here",
        submit: "Send"
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
        title: "Other assisted sales channels:",
        channels: {
          live: {
            description: "Contact your Advisor now",
            buttonText: "Contact"
          },
          whatsapp: {
            description: "Make your inquiries, write to us!",
            buttonText: "Write to us"
          },
          phone: {
            description: "Call us and our executives will guide you at all times",
            buttonText: "Call us"
          },
          store: {
            description: "Visit our branches throughout the country",
            buttonText: "View Branches"
          }
        }
      },
      bankPromotions: {
        title: "Bank promotions",
        banks: [
          {
            name: "BBVA",
            promotion: "Up to 18 interest-free installments",
          },
          {
            name: "Citibanamex",
            promotion: "Up to  13 interest-free installments",
          },
          {
            name: "HSBC",
            promotion: "Up to 12 interest-free installments",
          },
          {
            name: "AMEX",
            promotion: "Up to 9 interest-free installments",
          },
          {
            name: "BANCOAZTECA",
            promotion: "Up to 18 interest-free installments"
          },
          {
            name: "SANTANDER",
            promotion: "Up to 6 interest-free installments"
          }
        ]
      },
      certifications: {
        secureText: "Government records",
      },
      termsAndConditions: {
        iHaveRead: "I have read and accept",
        title: "GENERAL TERMS AND CONDITIONS OF ADVENTY TRAVELS",
        lastUpdate: "Last update: 02/15/2025",
        intro: "This document sets forth the terms and conditions under which Adventy Travels, legally operated by Grupo Comercial Bracarda, offers its services as an intermediary in the marketing of travel and tourism services. By contracting our services, the client expressly and unconditionally accepts these terms and conditions.",
        sections: {
          contractPurpose: {
            title: "PURPOSE OF THE CONTRACT",
            content: "Adventy Travels acts as an intermediary between the client and the providers of tourism services, including but not limited to:",
            items: [
              "Flights: domestic and international airline tickets.",
              "Lodging: reservations in hotels and tourist accommodations.",
              "Transfers and transportation: private or shared services.",
              "Tourist packages and cruises.",
              "Experiences and guided tours.",
              "Visa processing and travel insurance."
            ],
            note: "The client acknowledges that the services are provided by third parties and that Adventy Travels is not responsible for the direct execution of such services, but for the correct intermediation between the provider and the client."
          },
          bookingAndPayment: {
            title: "BOOKING AND PAYMENT PROCESS",
            content: "To guarantee the contracting of any service, the client must comply with the following steps:",
            items: [
              "Reservation request: the client must provide correct and complete data.",
              "Confirmation and payment: once the availability confirmation is received, the client must make the payment as indicated by the agency.",
              "Delivery of documents: after payment is made, the corresponding tickets, vouchers or receipts will be provided."
            ],
            paymentMethods: {
              title: "Payment methods",
              content: "Adventy Travels accepts the following payment methods:",
              items: [
                "Bank transfer.",
                "Credit and debit cards.",
                "Cash payments at authorized establishments.",
                "Other methods that will be indicated at the time of purchase."
              ],
              note: "Important: In case of card payments, the client must ensure sufficient balance and bank authorization."
            }
          },
          cancellationsAndModifications: {
            title: "CANCELLATIONS AND MODIFICATIONS",
            clientSide: {
              title: "By the client",
              items: [
                "Cancellations: Must be requested in writing. Penalties will apply depending on each provider's policies.",
                "Modifications: Any change will be subject to availability and may incur additional costs.",
                "No-show: If the client does not show up on the agreed date and time, they will lose the right to the service and there will be no refund."
              ]
            },
            agencySide: {
              title: "By Adventy Travels",
              items: [
                "The agency reserves the right to modify or cancel services in case of force majeure, committing to offer equivalent alternatives or refunds, as appropriate."
              ]
            }
          },
          clientResponsibilities: {
            title: "CLIENT DOCUMENTATION AND RESPONSIBILITIES",
            content: "The client is solely responsible for having the required documentation for their trip, including:",
            items: [
              "Valid passport.",
              "Corresponding visa (if necessary).",
              "Special permits or health requirements (vaccines, COVID tests, etc.)."
            ],
            note: "If the client does not present the appropriate documentation, they will lose their right to the contracted services without the possibility of a refund."
          },
          refunds: {
            title: "REFUNDS",
            content: "Refunds will depend on each provider's policies. Some services are non-refundable, while others may be subject to administrative charges or penalties.",
            note: "Adventy Travels can only manage refunds when providers allow it."
          },
          specificConditions: {
            title: "SPECIFIC CONDITIONS BY TYPE OF SERVICE",
            flights: {
              title: "6.1 FLIGHTS",
              items: [
                "Airfare rates are subject to change without notice.",
                "Airlines establish their own baggage, change, and cancellation policies.",
                "Adventy Travels is not responsible for flight delays, cancellations, or modifications."
              ]
            },
            transfers: {
              title: "6.2 TRANSFERS AND OTHER SERVICES",
              items: [
                "Clients must show up punctually at the indicated meeting points.",
                "Any modification must be requested in advance and is subject to availability.",
                "The agency is not responsible for delays due to traffic, mechanical failures, or weather conditions."
              ]
            },
            lodging: {
              title: "6.3 LODGING",
              items: [
                "Check-in and check-out conditions depend on each hotel.",
                "Any damage to the facilities is the guest's responsibility.",
                "In case of overbooking or cancellation by the hotel, the agency will manage a similar alternative but is not responsible for external decisions."
              ]
            }
          },
          advertisingAndPromotions: {
            title: "ADVERTISING AND PROMOTIONS",
            items: [
              "Promotions are subject to availability and may have specific terms.",
              "Adventy Travels reserves the right to correct errors in advertising, prices, and availability."
            ]
          },
          intellectualProperty: {
            title: "INTELLECTUAL PROPERTY",
            content: "All content of Adventy Travels (logos, images, texts, promotions) is protected by copyright and cannot be used without authorization."
          },
          termsModification: {
            title: "MODIFICATIONS TO THE TERMS AND CONDITIONS",
            content: "Adventy Travels may update these terms at any time. The current version will always be available on our website."
          },
          applicableLaw: {
            title: "APPLICABLE LAW AND JURISDICTION",
            content: "This contract is governed by the laws in force in Mexico. Any dispute will be resolved in the courts of Mexico City."
          },
          qualityControl: {
            title: "QUALITY CONTROL AND ACCEPTANCE",
            items: [
              "The client may send complaints and suggestions within 15 days after the service.",
              "By making a reservation, the client accepts all the terms and conditions described herein."
            ]
          },
          contact: {
            title: "CONTACT AND CUSTOMER SERVICE",
            content: "For any query, complaint, or clarification, you can contact Adventy Travels:",
            items: [
              "Email: administracion@adventytravels.com",
              "Phone: 7716075321",
              "Address: Galerías De Vega, local #5, planta alta, Avenida 5 de Mayo, Colonia Centro, Xicotepec de Juárez, Puebla."
            ],
            note: "By contracting any service with Adventy Travels, the client declares to have read, understood, and accepted these Terms and Conditions in their entirety."
          }
        }
      },
      sweetAlert: {
        successTitle: "Your information has been sent successfully",
        successText: "You will receive attention from our advisors shortly",
        errorTitle: "There was an error",
        errorText: "Please try again"
      },
      underConstruction: {
        title: "{{pageName}} section is under construction",
        text: "We are working to offer you the best experience. Come back soon!"
      },
      whoWeAre: {
        title: "Who We Are ?",
        description1: "<strong>Adventy Travels</strong> is a 100% Pueblan travel agency, proudly Mexican and legally constituted, <strong>with more than 6 years of experience in the tourism sector</strong>. We are the first travel agency legally registered with the Ministry of Tourism in <strong>Xicotepec de Juárez</strong>, Puebla, since our <strong>foundation on March 27, 2019</strong>.",
        description2: "We stand out for offering personalized and high-quality travel experiences, <strong>with a team made up of young professionals committed to excellence, innovation, and constant training</strong>. Throughout our trajectory, we have received multiple recognitions and certifications in the states of Puebla and Hidalgo, which endorse us as a safe, reliable, responsible, and fully legal agency.",
        description3: "We operate under the legal representation of <strong>GRUPO COMERCIAL BRACARDA</strong>, which allows us to expand our service network, guaranteeing the legal and operational support of our company."
      },
      aboutUsHeader: "About Us",
      ourServices: "Our Services",
      services: {
        hotelBooking: {
          title: "Hotel Booking",
          description: "We manage hotel reservations around the world, from budget accommodations to luxurious resorts."
        },
        flightTickets: {
          title: "National and International Flight Tickets",
          description: "Purchase and book airline tickets with personalized options to find the best rates."
        },
        packages: {
          title: "Packages (Hotel + Tours) National and International",
          description: "We combine lodging with tours and activities in national and international destinations."
        },
        tours: {
          title: "Tours and Activities",
          description: "Guided tours, excursions, and activities tailored to your interests in different destinations."
        },
        transfers: {
          title: "Private or Shared Transfers",
          description: "We coordinate transfers to and from airports, ensuring comfort and punctuality."
        },
        carRental: {
          title: "Car Rental",
          description: "Vehicle rental at your travel destinations with varied and flexible options."
        },
        cruises: {
          title: "Cruises",
          description: "Cruise reservations with different routes and cruise lines for a vacation at sea."
        },
        travelInsurance: {
          title: "Travel Insurance",
          description: "Travel insurance covering medical emergencies, cancellations, and lost luggage."
        }
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
        title: "Vous cherchez vos prochaines vacances ?",
        description: "Remplissez le formulaire et obtenez jusqu'à 10 % de réduction.",
        firstName: "Prénom",
        lastName: "Nom de famille",
        phoneNumber: "Numéro de téléphone",
        whatsappNumber: "Numéro WhatsApp",
        selectState: "Sélectionnez un état ou une région",
        message: "Écrivez votre demande ici",
        submit: "Envoyer"
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
        title: "Autres canaux de vente assistée:",
        channels: {
          live: {
            description: "Contactez votre conseiller maintenant",
            buttonText: "Contactez"
          },
          whatsapp: {
            description: "Faites vos demandes, écrivez-nous!",
            buttonText: "Écrivez-nous"
          },
          phone: {
            description: "Appelez-nous et nos cadres vous guideront à tout moment",
            buttonText: "Appelez-nous"
          },
          store: {
            description: "Visitez nos succursales à travers le pays",
            buttonText: "Voir les succursales"
          }
        }
      },
      bankPromotions: {
        title: "Promotions bancaires",
        banks: [
          {
            name: "BBVA",
            promotion: "Jusqu'à 18 mensualités sans intérêt",
          },
          {
            name: "Citibanamex",
            promotion: "Jusqu'à 13 mensualités sans intérêt",
          },
          {
            name: "HSBC",
            promotion: "Jusqu'à 12 mensualités sans intérêt",
          },
          {
            name: "AMEX",
            promotion: "Jusqu'à 9 mensualités sans intérêt",
          },
          {
            name: "BANCOAZTECA",
            promotion: "Jusqu'à 18 mensualités sans intérêt"
          },
          {
            name: "SANTANDER",
            promotion: "Jusqu'à 6 mensualités sans intérêt"
          }
        ]
      },
      certifications: {
        secureText: "Registres gouvernementaux",
      },
      "termsAndConditions": {
        "iHaveRead": "J'ai lu et j'accepte",
        "title": "CONDITIONS GÉNÉRALES D'ADVENTY TRAVELS",
        "lastUpdate": "Dernière mise à jour : 15/02/2025",
        "intro": "Le présent document établit les conditions générales selon lesquelles Adventy Travels, exploitée légalement par Grupo Comercial Bracarda, offre ses services d'intermédiation dans la commercialisation de voyages et services touristiques. En contractant nos services, le client accepte expressément et inconditionnellement ces termes et conditions.",
        "sections": {
          "contractPurpose": {
            "title": "OBJET DU CONTRAT",
            "content": "Adventy Travels agit en tant qu'intermédiaire entre le client et les fournisseurs de services touristiques, y compris mais sans s'y limiter :",
            "items": [
              "Vols : billets d'avion nationaux et internationaux.",
              "Hébergement : réservations dans des hôtels et logements touristiques.",
              "Transferts et transports : services privés ou partagés.",
              "Forfaits touristiques et croisières.",
              "Expériences et visites guidées.",
              "Démarches de visa et assurances voyage."
            ],
            "note": "Le client reconnaît que les services sont fournis par des tiers et qu'Adventy Travels n'est pas responsable de l'exécution directe de ces services, mais de la bonne intermédiation entre le prestataire et le client."
          },
          "bookingAndPayment": {
            "title": "PROCESSUS DE RÉSERVATION ET DE PAIEMENT",
            "content": "Pour garantir la réservation de tout service, le client doit suivre les étapes suivantes :",
            "items": [
              "Demande de réservation : le client doit fournir des informations correctes et complètes.",
              "Confirmation et paiement : après réception de la confirmation de disponibilité, le client doit effectuer le paiement selon les indications de l'agence.",
              "Remise des documents : après paiement, les billets, reçus ou bons correspondants seront fournis."
            ],
            "paymentMethods": {
              "title": "Modes de paiement",
              "content": "Adventy Travels accepte les modes de paiement suivants :",
              "items": [
                "Virement bancaire.",
                "Cartes de crédit et de débit.",
                "Paiements en espèces dans les établissements autorisés.",
                "Autres méthodes qui seront indiquées au moment de l'achat."
              ],
              "note": "Important : En cas de paiement par carte, le client doit s'assurer d'avoir un solde suffisant et une autorisation bancaire."
            }
          },
          "cancellationsAndModifications": {
            "title": "ANNULATIONS ET MODIFICATIONS",
            "clientSide": {
              "title": "Par le client",
              "items": [
                "Annulations : doivent être demandées par écrit. Des pénalités s'appliqueront selon les politiques de chaque fournisseur.",
                "Modifications : tout changement sera soumis à disponibilité et pourra entraîner des coûts supplémentaires.",
                "Non-présentation : si le client ne se présente pas à la date et à l'heure convenues, il perdra son droit au service sans remboursement."
              ]
            },
            "agencySide": {
              "title": "Par Adventy Travels",
              "items": [
                "L'agence se réserve le droit de modifier ou d'annuler des services en cas de force majeure, en s'engageant à proposer des alternatives équivalentes ou des remboursements, selon le cas."
              ]
            }
          },
          "clientResponsibilities": {
            "title": "DOCUMENTATION ET RESPONSABILITÉS DU CLIENT",
            "content": "Le client est seul responsable d'avoir la documentation requise pour son voyage, y compris :",
            "items": [
              "Passeport valide.",
              "Visa correspondant (si nécessaire).",
              "Autorisations spéciales ou exigences sanitaires (vaccins, tests COVID, etc.)."
            ],
            "note": "Si le client ne présente pas la documentation adéquate, il perdra son droit aux services réservés sans possibilité de remboursement."
          },
          "refunds": {
            "title": "REMBOURSEMENTS",
            "content": "Les remboursements dépendront des politiques de chaque fournisseur. Certains services ne sont pas remboursables, tandis que d'autres peuvent être soumis à des frais administratifs ou pénalités.",
            "note": "Adventy Travels ne pourra traiter les remboursements que lorsque les fournisseurs l'autorisent."
          },
          "specificConditions": {
            "title": "CONDITIONS SPÉCIFIQUES PAR TYPE DE SERVICE",
            "flights": {
              "title": "6.1 VOLS",
              "items": [
                "Les tarifs des billets d'avion sont sujets à modification sans préavis.",
                "Les compagnies aériennes établissent leurs propres politiques en matière de bagages, de modifications et d'annulations.",
                "Adventy Travels n'est pas responsable des retards, annulations ou modifications de vols."
              ]
            },
            "transfers": {
              "title": "6.2 TRANSFERTS ET AUTRES SERVICES",
              "items": [
                "Les clients doivent se présenter ponctuellement aux points de rencontre indiqués.",
                "Toute modification doit être demandée à l'avance et est soumise à disponibilité.",
                "L'agence n'est pas responsable des retards dus à la circulation, aux pannes mécaniques ou aux conditions météorologiques."
              ]
            },
            "lodging": {
              "title": "6.3 HÉBERGEMENT",
              "items": [
                "Les conditions de check-in et check-out dépendent de chaque hôtel.",
                "Tout dommage aux installations est sous la responsabilité du client.",
                "En cas de surréservation ou d'annulation par l'hôtel, l'agence gérera une alternative similaire, mais ne sera pas responsable des décisions des fournisseurs."
              ]
            }
          },
          "advertisingAndPromotions": {
            "title": "PUBLICITÉ ET PROMOTIONS",
            "items": [
              "Les promotions sont soumises à disponibilité et peuvent avoir des conditions spécifiques.",
              "Adventy Travels se réserve le droit de corriger toute erreur dans la publicité, les prix et la disponibilité."
            ]
          },
          "intellectualProperty": {
            "title": "PROPRIÉTÉ INTELLECTUELLE",
            "content": "Tout le contenu d'Adventy Travels (logos, images, textes, promotions) est protégé par des droits d'auteur et ne peut être utilisé sans autorisation."
          },
          "termsModification": {
            "title": "MODIFICATIONS DES CONDITIONS GÉNÉRALES",
            "content": "Adventy Travels peut mettre à jour ces conditions à tout moment. La version en vigueur sera toujours disponible sur notre site web."
          },
          "applicableLaw": {
            "title": "LÉGISLATION APPLICABLE ET JURIDICTION",
            "content": "Ce contrat est régi par les lois en vigueur au Mexique. Tout litige sera résolu devant les tribunaux de Mexico."
          },
          "qualityControl": {
            "title": "CONTRÔLE DE QUALITÉ ET ACCEPTATION",
            "items": [
              "Le client peut soumettre des plaintes et suggestions dans les 15 jours suivant le service.",
              "En effectuant une réservation, le client accepte tous les termes et conditions décrits ici."
            ]
          },
          "contact": {
            "title": "CONTACT ET SERVICE CLIENT",
            "content": "Pour toute question, plainte ou clarification, veuillez contacter Adventy Travels :",
            "items": [
              "E-mail : administracion@adventytravels.com",
              "Téléphone : 7716075321",
              "Adresse : Galerías De Vega, local #5, étage supérieur, Avenue 5 de Mayo, Colonia Centro, Xicotepec de Juárez, Puebla."
            ],
            "note": "En contractant tout service avec Adventy Travels, le client déclare avoir lu, compris et accepté intégralement ces conditions générales."
          }
        }
      },
      sweetAlert: {
        successTitle: "Vos informations ont été envoyées avec succès",
        successText: "Vous recevrez bientôt l'attention de nos conseillers",
        errorTitle: "Il y a eu une erreur",
        errorText: "Veuillez réessayer"
      },
      underConstruction: {
        title: "La section {{pageName}} est en construction",
        text: "Nous travaillons pour vous offrir la meilleure expérience. Revenez bientôt!"
      },
      whoWeAre: {
        title: "Qui sommes-nous?",
        description1: "<strong>Adventy Travels</strong> est une agence de voyages 100% poblana, fièrement mexicaine et légalement constituée, <strong>avec plus de 6 ans d'expérience dans le secteur touristique</strong>. Nous sommes la première agence de voyages légalement enregistrée auprès du Secrétariat du Tourisme à <strong>Xicotepec de Juárez</strong>, Puebla, depuis notre <strong>fondation le 27 mars 2019</strong>.",
        description2: "Nous nous distinguons par offrir des expériences de voyage personnalisées et de haute qualité, <strong>avec une équipe composée de jeunes professionnels engagés dans l'excellence, l'innovation et la formation continue</strong>. Tout au long de notre trajectoire, nous avons reçu de nombreuses reconnaissances et certifications dans les états de Puebla et Hidalgo, qui nous approuvent comme une agence sûre, fiable, responsable et totalement légale.",
        description3: "Nous opérons sous la représentation légale de <strong>GRUPO COMERCIAL BRACARDA</strong>, ce qui nous permet d'élargir notre réseau de services, garantissant le soutien légal et opérationnel de notre entreprise."
      },
      aboutUsHeader: "À propos de nous",
      ourServices: "Nos Services",
      services: {
        hotelBooking: {
          title: "Réservation d'Hôtels",
          description: "Nous gérons la réservation d'hôtels dans le monde entier, des hébergements économiques aux complexes de luxe."
        },
        flightTickets: {
          title: "Billets d'Avion Nationaux et Internationaux",
          description: "Achat et réservation de billets d'avion avec des options personnalisées pour trouver les meilleurs tarifs."
        },
        packages: {
          title: "Forfaits (Hôtel + Tours) Nationaux et Internationaux",
          description: "Nous combinons l'hébergement avec des visites et des activités dans des destinations nationales et internationales."
        },
        tours: {
          title: "Tours et Activités",
          description: "Visites guidées, excursions et activités adaptées à vos intérêts dans différentes destinations."
        },
        transfers: {
          title: "Transferts Privés ou Partagés",
          description: "Nous coordonnons les transferts depuis et vers les aéroports, assurant confort et ponctualité."
        },
        carRental: {
          title: "Location de Voitures",
          description: "Location de véhicules dans vos destinations de voyage avec des options variées et flexibles."
        },
        cruises: {
          title: "Croisières",
          description: "Réservation de croisières avec différentes routes et compagnies de navigation pour des vacances en mer."
        },
        travelInsurance: {
          title: "Assurance Voyage",
          description: "Assurances voyage couvrant les urgences médicales, les annulations et la perte de bagages."
        }
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
