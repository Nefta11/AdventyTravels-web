// Datos centralizados de tours de Xicotepec
export const toursData = [
  {
    id: 1,
    slug: "tour-del-cafe-y-catacion",
    title: "Tour del café y catación",
    provider: "Román Valderrabano Sampallo",
    category: "Tour Gastronómico",
    image: "https://mexicotrip.mx/uploads/images/202302/image_870x_63f3d0a960d1a.jpg",
    shortDescription: "Experiencia única en el mundo del café con catación profesional",
    longDescription: "Sumérgete en una experiencia única donde el café cobra vida desde su cultivo hasta la taza. Con más de años de experiencia, Román Valderrabano te guiará a través de un viaje sensorial inolvidable donde aprenderás el arte de la catación profesional, nuestro producto diferenciador que hace de cada visita una experiencia auténtica y educativa.",
    
    // Información básica
    duration: "4-6 horas",
    groupSize: "2-40 personas",
    difficulty: "Fácil",
    basePrice: 350,
    location: "Dos caminos, Xicotepec",
    
    // Servicios ofrecidos
    tourTypes: [
      "Ruta del café",
      "Experiencia de licor o destilados", 
      "Caminatas guiadas",
      "Recorridos gastronómicos",
      "Tours de naturaleza (ríos, cascadas, montañas)"
    ],
    
    // Lo que incluye
    includes: [
      "Recorrido por plantación de café",
      "Proceso de tostado artesanal",
      "Catación profesional guiada",
      "Degustación de productos locales",
      "Experiencia de destilados regionales",
      "Guía especializado certificado"
    ],
    
    // Características únicas
    highlights: [
      "Catación profesional - nuestro diferenciador",
      "Experiencia auténtica del café de montaña",
      "Conocimiento de destilados tradicionales",
      "Conexión directa con productores locales",
      "Recorridos por naturaleza pristina",
      "Degustación de gastronomía regional"
    ],
    
    // Público objetivo
    targetAudience: [
      "Familias",
      "Parejas", 
      "Aventureros",
      "Adultos mayores",
      "Grupos escolares",
      "Empresas e incentivos"
    ],
    
    // Información de contacto
    contact: {
      responsiblePerson: "Román Valderrabano Sampallo",
      phone: "7641057461",
      whatsapp: "7641057461", 
      email: "romanval64@gmail.com",
      socialMedia: {
        facebook: "Tour del café y catación"
      },
      baseOperation: "Dos caminos Xicotepec",
      serviceAreas: ["Dos caminos"]
    },
    
    // Información comercial
    businessInfo: {
      agenciesGroups: true,
      specialPricesGroups: true,
      worksWithAgencies: true,
      paymentMethods: ["Efectivo", "Transferencia", "Tarjeta"],
      description: "Ofrecemos precios especiales para grupos y agencias, trabajamos con agencias de viajes"
    },
    
    // Galería de imágenes
    gallery: [
      "https://mexicotrip.mx/uploads/images/202302/image_870x_63f3d0a960d1a.jpg",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 2,
    slug: "yolilistli-recorridos",
    title: "Yolilistli Recorridos",
    provider: "María Natividad Galindo Castro",
    category: "Ecoturismo y Cultura",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
    shortDescription: "Tours culturales e históricos con experiencias vivenciales auténticas",
    longDescription: "Descubre Xicotepec a través de los ojos de una cronista oficial del Estado de Puebla. María Natividad, psicóloga y promotora cultural, te llevará por un recorrido único que combina historia, cultura y tradiciones vivas. Con conexiones auténticas con artesanas, cocineras tradicionales y grupos de danza, cada tour es una ventana genuina a la esencia de este pueblo mágico.",
    
    // Información básica  
    duration: "3-8 horas",
    groupSize: "2-40 personas",
    difficulty: "Fácil a Moderado",
    basePrice: 200,
    location: "Centro de Xicotepec",
    
    // Servicios ofrecidos
    tourTypes: [
      "Ruta del café",
      "Tours turísticos o culturales", 
      "Recorridos gastronómicos",
      "Clases o experiencias vivenciales"
    ],
    
    // Lo que incluye
    includes: [
      "City tour cultural e histórico completo",
      "Visita al Palacio Municipal y murales",
      "Centro Ceremonial Xochipila",
      "Museo Carranza y Parroquia San Juan Bautista",
      "Plazuela San José y Virgen monumental",
      "Sendero de la Cruz",
      "Talleres de panadería tradicional",
      "Experiencias gastronómicas auténticas"
    ],
    
    // Características únicas
    highlights: [
      "Guía cronista oficial del Estado de Puebla",
      "Conexión con artesanas locales",
      "Talleres con cocineras tradicionales", 
      "Vinculación con danzas autóctonas",
      "Experiencia psicológica y cultural profunda",
      "Talleres vivenciales de panadería",
      "Recorridos por esculturas históricas"
    ],
    
    // Público objetivo
    targetAudience: [
      "Familias",
      "Parejas",
      "Adultos mayores", 
      "Niños",
      "Grupos escolares"
    ],
    
    // Información de contacto
    contact: {
      responsiblePerson: "María Natividad Galindo Castro",
      phone: "7751586034",
      whatsapp: "7751586034",
      email: "yolilistli08@gmail.com", 
      socialMedia: {
        facebook: "Yolilistli Recorridos",
        instagram: "yolilistli_recorridos"
      },
      baseOperation: "Centro de Xicotepec",
      serviceAreas: ["Centro de Xicotepec", "colonias"]
    },
    
    // Información comercial
    businessInfo: {
      agenciesGroups: false,
      specialPricesGroups: true,
      worksWithAgencies: false,
      paymentMethods: ["Efectivo", "Transferencia", "Pago con anticipación"],
      description: "No trabajamos con agencias por el momento, pero ofrecemos precios especiales para grupos"
    },
    
    // Precios detallados
    pricing: {
      workshops: {
        bakeryWorkshop: {
          minPrice: 250,
          maxPrice: 300,
          capacity: "5 a 15 personas"
        }
      },
      cityTour: {
        "1-5 personas": 200,
        "6-10 personas": 180, 
        "11-30 personas": 150,
        notes: "No incluye transporte para la virgen monumental y Sendero de la Cruz"
      }
    },
    
    // Galería de imágenes
    gallery: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=800&h=600&fit=crop"
    ]
  }
];

// Función para obtener tour por slug
export const getTourBySlug = (slug) => {
  return toursData.find(tour => tour.slug === slug);
};

// Función para obtener todos los tours
export const getAllTours = () => {
  return toursData;
};
