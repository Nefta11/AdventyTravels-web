// Datos centralizados de atractivos de Xicotepec

const atractivosData = [
    {
        "id": 1,
        "slug": "la-xochipila",
        "image": "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/Xicotepec_Xochipila_MF_md_ok-scaled.jpg",
        "title": "La Xochipila",
        "location": "XICOTEPEC",
        "address": "Xochipila, Colonia Centro, Xicotepec de Juárez, Puebla, México",
        "description": "Es una peña que desde siempre ha fungido como centro ceremonial para los habitantes de Xicotepec. Aquí se concentra toda la energía de un pueblo deseoso de renovarse y agradecer lo recibido cada año. Un sitio místico y lleno de sincretismos, donde quizá no se olvide el orden establecido por el catolicismo, pero al que se superpone la creencia en la magia y los antiguos dioses.",
        "type": "Centro Ceremonial",
        "attractions": [
            "Centro ceremonial prehispánico",
            "Sitio místico con sincretismo religioso",
            "Celebración anual el 24 de junio",
            "Ceremonia a San Juan Bautista y Xochipilli"
        ],
        "features": {
            "cultural": true,
            "religious": true,
            "mystical": true,
            "historical": true
        }
    },
    {
        "id": 2,
        "slug": "mirador-cruz-celestial",
        "image": "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2022/11/mirador-de-la-cruz-celestial-portada.jpg",
        "title": "Mirador de la Cruz Celestial, un encantador lugar en Puebla",
        "location": "XICOTEPEC",
        "address": "Majestuosa Cruz Celestial, Nactanca, Xicotepec de Juárez, Pue., México",
        "description": "Un espectacular mirador en la Sierra Norte de Puebla ubicado en lo alto del cerro del Cojolico (Coxolitepetl). El mirador cuenta con una altura de 30 metros, una extensión de 15 metros y pesa más de 100 toneladas.",
        "type": "Mirador Natural",
        "attractions": [
            "Vistas panorámicas de Xicotepec y la región",
            "Sendero empedrado de 1,400 metros",
            "750 escalones hasta la cima",
            "Bosque mesófilo de montaña",
            "Flora y fauna del bosque de niebla",
            "Tres miradores en el sendero"
        ],
        "features": {
            "hiking": true,
            "nature": true,
            "photography": true,
            "adventure": true
        },
        "specifications": {
            "height": "30 metros",
            "width": "15 metros",
            "weight": "100+ toneladas",
            "trail_distance": "1,400 metros",
            "steps": 750
        }
    },
    {
        "id": 3,
        "slug": "museo-casa-carranza",
        "image": "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/museo-casa-carranza_md_ok.jpg",
        "title": "Museo Casa Carranza",
        "location": "XICOTEPEC",
        "address": "5 de Mayo, Colonia Centro, Xicotepec de Juárez, Puebla, México",
        "phone": "764 764 0072",
        "description": "La antigua casa donde fue velado el cuerpo de Venustiano Carranza antes de ser llevado a la Ciudad de México es ahora el museo dispuesto a recordarlo. Aquí quedaron guardadas sus vísceras, en una urna que participa cada año de la ceremonia luctuosa celebrada por sus descendientes.",
        "type": "Museo Histórico",
        "attractions": [
            "Casa histórica donde fue velado Venustiano Carranza",
            "Museografía sobre la muerte del caudillo",
            "Urna con las vísceras de Carranza",
            "Fotos históricas del pueblo",
            "Video sobre el asesinato de Carranza",
            "Mural de la Fundación Arellano",
            "Historia de la Revolución Mexicana"
        ],
        "features": {
            "historical": true,
            "educational": true,
            "cultural": true,
            "revolutionary_history": true
        }
    },
    {
        "id": 4,
        "slug": "palacio-municipal",
        "image": "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/3226_GEMD_PUE_Xicotepec_Palacio-municipal_MF.jpg",
        "title": "Palacio Municipal de Xicotepec",
        "location": "XICOTEPEC",
        "address": "Plaza de La Constitución, Colonia Centro, Xicotepec de Juárez, Pue., México",
        "description": "El sur de la plaza está reservado para el Palacio Municipal, donde se guarda el significativo y prehispánico teponaxtle, un instrumento de madera de ébano utilizado en la ceremonia que cada 24 de junio se realiza en La Xochipila.",
        "type": "Edificio Gubernamental",
        "attractions": [
            "Teponaxtle prehispánico de madera de ébano",
            "Murales del maestro Felipe Castellanos",
            "Historia de Xicotepec representada en arte",
            "Arquitectura colonial",
            "Ubicación central en la plaza principal"
        ],
        "features": {
            "architectural": true,
            "cultural": true,
            "historical": true,
            "art": true
        },
        "special_items": {
            "teponaxtle": "Instrumento prehispánico de ébano usado en ceremonias"
        }
    },
    {
        "id": 5,
        "slug": "parroquia-san-juan-bautista",
        "image": "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/Xicotepec_Parroquia-San-Juan-Bautista_MF_md-ok-scaled.jpg",
        "title": "Parroquia de San Juan Bautista",
        "location": "XICOTEPEC",
        "address": "Iturbide, Colonia Centro, Xicotepec de Juárez, Puebla, México",
        "phone": "764 764 0031",
        "description": "Antes conocida como la Parroquia del Calvario. Se trata de una construcción erigida en el siglo XVI por los agustinos, y se ha ido modificando hasta adquirir ese aspecto neogótico en su fachada.",
        "type": "Templo Religioso",
        "attractions": [
            "Arquitectura neogótica en fachada",
            "Interior neoclásico",
            "Catacumbas de moradores de los siglos XVI y XVII",
            "Portón de madera con arcos ojivales",
            "Altar con Cristo, San Juan Bautista y San José",
            "Historia agustina del siglo XVI"
        ],
        "features": {
            "religious": true,
            "architectural": true,
            "historical": true,
            "cultural": true
        },
        "historical_period": "Siglo XVI",
        "architectural_style": "Neogótico y Neoclásico"
    },
    {
        "id": 6,
        "slug": "tlaxcalantongo",
        "image": "https://images.milenio.com/gjEGlwii9mnNLh0bQ1PDdh5yr3k=/942x532/uploads/media/2020/11/21/mural-tlaxcalantongo-venustiano-carranza-andres.jpg",
        "title": "Visita Tlaxcalantongo",
        "location": "XICOTEPEC",
        "address": "Xicotepec, Pue., México (25 km de Xicotepec)",
        "phone": "52 764 109 1249",
        "description": "La comunidad de Tlaxcalantongo, a 25 kilómetros de Xicotepec, es el sitio donde un gran monumento de piedra y una escultura de bronce recuerdan que ahí fue asesinado Venustiano Carranza.",
        "type": "Destino Natural e Histórico",
        "attractions": [
            "Monumento de piedra a Venustiano Carranza",
            "Escultura de bronce conmemorativa",
            "Cascadas Barbas de Carranza",
            "Río Cilima con puente colgante",
            "Rafting en época de lluvias",
            "Dos caídas de agua espectaculares",
            "Senderos entre árboles y juegos de luz"
        ],
        "features": {
            "nature": true,
            "adventure": true,
            "historical": true,
            "waterfalls": true,
            "rafting": true
        },
        "distance_from_xicotepec": "25 kilómetros",
        "activities": [
            "Senderismo",
            "Fotografía",
            "Rafting (época de lluvias)",
            "Visita a cascadas",
            "Turismo histórico"
        ]
    }
];

// Función para obtener todos los atractivos
export const getAllAtractivos = () => atractivosData;

// Función para obtener un atractivo por slug
export const getAtractivoBySlug = (slug) => {
    return atractivosData.find(atractivo => atractivo.slug === slug);
};

// Función para obtener atractivos por tipo
export const getAtractivosByType = (type) => {
    return atractivosData.filter(atractivo => atractivo.type === type);
};

export default atractivosData;
