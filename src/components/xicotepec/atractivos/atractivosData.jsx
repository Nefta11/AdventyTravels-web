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
        "description": "Inaugurado en 1959 en la casa del Sr. Juan Córdoba y Gómez, este museo honra a don José Venustiano Carranza de la Garza. Aquí llegaron sus restos el 21 de mayo de 1920 alrededor de las 4:20 de la mañana, cuando Villa Juárez (ahora Xicotepec) se convirtió temporalmente en capital de la República Mexicana. En esta casa se le realizó la autopsia y su cuerpo permaneció del 21 al 23 de mayo antes de ser trasladado a la Ciudad de México.",
        "type": "Museo Histórico",
        "founded": "1959",
        "attractions": [
            "Casa histórica donde fue velado Venustiano Carranza",
            "Urna con las vísceras de Carranza conservadas desde 1920",
            "Fotografías históricas de la época",
            "Foto de la choza donde fue asesinado en Tlaxcalantongo",
            "Acta de defunción original expedida en Xicotepec",
            "Casquillo de cañón de 75 milímetros percutido",
            "Museografía sobre 'El Barón de Cuatro Ciénegas'",
            "Historia de cuando Xicotepec fue capital de México"
        ],
        "features": {
            "historical": true,
            "educational": true,
            "cultural": true,
            "revolutionary_history": true
        },
        "historical_facts": {
            "carranza_birth": "29 de diciembre de 1859, Cuatro Ciénegas, Coahuila",
            "carranza_death": "21 de mayo de 1920, Tlaxcalantongo, Puebla",
            "body_arrival": "4:20 AM del 21 de mayo de 1920",
            "stay_duration": "21, 22 y 23 de mayo de 1920",
            "temporary_capital": "Xicotepec fue capital de la República Mexicana",
            "nicknames": ["El Barón de Cuatro Ciénegas", "El hijo predilecto de Coahuila"]
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
        "description": "Conocida anteriormente como la Parroquia del Calvario, fue fundada en 1571 por los monjes agustinos. Este bellísimo edificio de arquitectura religiosa se asemeja a la Catedral de Notre Dame en París, siendo considerado la más valiosa joya arquitectónica que distingue orgullosamente a Xicotepec de Juárez. Historia cronológica: 1544 - Llegada de los primeros monjes agustinos; 1570 - Aparece como Parroquia de la Diócesis de Tlaxcala; 1571 - Fundación oficial de la parroquia; 1491 - Reconstrucción bajo Prior Fray Francisco de Céspedes; 1754 - Secularización del templo; 1786 - Terminación de la reconstrucción final. El primer párroco fue Francisco León Carvajal (también poeta). El convento original estaba donde hoy se encuentra el restaurante (ex-cine Garza), hasta que un incendio lo destruyó y se trasladaron al cementerio agustino entre las calles Zaragoza, 2 de Abril y Leona Vicario.",
        "type": "Templo Religioso",
        "founded": "1571",
        "attractions": [
            "Arquitectura gótica similar a Notre Dame de París",
            "Catacumbas con cientos de moradores siglos XVI-XVII",
            "Estilo gótico y neoclásico predominante",
            "Fachada y torres reformadas por arquitecto Lozada (años 60)",
            "Placa de piedra histórica 'Xico 1786'",
            "Capilla de la Virgen de Guadalupe",
            "Cementerio agustino histórico",
            "Patrimonio arquitectónico universal"
        ],
        "features": {
            "religious": true,
            "architectural": true,
            "historical": true,
            "cultural": true,
            "gothic_style": true
        },
        "historical_period": "Fundada en 1571",
        "architectural_style": "Gótico y Neoclásico"
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
