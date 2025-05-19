import { useState } from 'react';
import NavComponent from '../components/generals/nav/navComponent';
import ExperienceHero from '../components/experiencies/ExperienceHero';
import ExperienceFilters from '../components/experiencies/ExperienceFilters';
import ExperienceCard from '../components/experiencies/ExperienceCard';
import ExperienceCTA from '../components/experiencies/ExperienceCTA';
import FooterComponent from "../components/generals/footer/FooterComponent";
import '../components/experiencies/Experiences.css';

const experiences = [
    {
        id: 1,
        title: "Paraíso Tulum",
        location: "Quintana Roo, México",
        image: "https://dynamic-media.tacdn.com/media/photo-o/2e/a9/ac/8c/caption.jpg?w=1100&h=800&s=1",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: "7,098",
        category: "naturaleza",
        description: "Sumérgete en las aguas cristalinas de Tulum, explora cenotes místicos y descubre las majestuosas ruinas mayas junto al mar Caribe.",
        highlights: ["Ruinas mayas", "Cenotes secretos", "Playas paradisíacas", "Gastronomía local"]
    },
    {
        id: 2,
        title: "Aventura Chiapas y Tren Maya",
        location: "Chiapas, México",
        image: "https://one.cdnmega.com/images/viajes/covers/40493-aventuramaya-en-tren-1024x575_67ed54ad86aeb.webp",
        duration: "7 días",
        groupSize: "2 personas",
        rating: 4.8,
        price: "10,000",
        category: "aventura",
        description: "Viaja a través de la selva chiapaneca en el Tren Maya, descubriendo cascadas, sitios arqueológicos y la rica cultura indígena.",
        highlights: ["Tren Maya", "Cascadas de Agua Azul", "Palenque", "Comunidades indígenas"]
    },
    {
        id: 3,
        title: "Mágico San Miguel de Allende",
        location: "Guanajuato, México",
        image: "https://media.ambito.com/p/b3aa3738485643ee77b7991770acdd6d/adjuntos/360/imagenes/041/408/0041408466/655x368/smart/san-miguel-allende.png",
        duration: "4 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: "12,300",
        category: "cultural",
        description: "Explora los coloridos callejones coloniales de San Miguel de Allende, reconocida como la mejor ciudad pequeña del mundo.",
        highlights: ["Centro histórico", "Galerías de arte", "Viñedos", "Arquitectura colonial"]
    },
    {
        id: 4,
        title: "Lujo en Cancún",
        location: "Quintana Roo, México",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/bc/2c/39/hyatt-ziva-cancun.jpg?w=1600&h=900&s=1",
        duration: "6 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: "21,786",
        category: "naturaleza",
        description: "Disfruta de las mejores playas del Caribe mexicano, resorts de lujo y experiencias exclusivas en el paraíso.",
        highlights: ["Playas premium", "Spa de lujo", "Deportes acuáticos", "Gastronomía gourmet"]
    },
    {
        id: 5,
        title: "Experiencia Hotel Xcaret",
        location: "Riviera Maya, México",
        image: "https://www.europeanceo.com/wp-content/uploads/2018/09/Experiencias_Xcaret_Mexico.jpg",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.8,
        price: "28,000",
        category: "aventura",
        description: "Vive la magia de Xcaret con acceso ilimitado a todos sus parques, combinando aventura, cultura y naturaleza.",
        highlights: ["Parques temáticos", "Shows nocturnos", "Río subterráneo", "Cultura maya"]
    },
    {
        id: 6,
        title: "Encanto de Playa del Carmen",
        location: "Quintana Roo, México",
        image: "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2017/10/41787392400_eca30235eb_b.jpg",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.7,
        price: "16,536",
        category: "naturaleza",
        description: "Descubre la vibrante Quinta Avenida, playas de arena blanca y la vida nocturna más animada de la Riviera Maya.",
        highlights: ["Quinta Avenida", "Playa Mamitas", "Cenotes cercanos", "Vida nocturna"]
    },
    {
        id: 7,
        title: "Cartagena Colonial",
        location: "Cartagena, Colombia",
        image: "https://ca-times.brightspotcdn.com/dims4/default/6b81f1b/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
        duration: "4 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: "3,342",
        category: "cultural",
        description: "Explora la ciudad amurallada de Cartagena, sus calles coloniales y disfruta de la mejor gastronomía caribeña.",
        highlights: ["Ciudad amurallada", "Getsemaní", "Islas del Rosario", "Cocina caribeña"]
    },
    {
        id: 8,
        title: "Encanto de Oaxaca",
        location: "Oaxaca, México",
        image: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/ciudad-de-oaxaca-900x641.jpeg",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.8,
        price: "18,000",
        category: "cultural",
        description: "Sumérgete en la riqueza cultural de Oaxaca, explorando sus mercados vibrantes, arquitectura colonial y la deliciosa gastronomía local.",
        highlights: ["Monte Albán", "Mercado 20 de Noviembre", "Templo de Santo Domingo", "Mezcal artesanal"]
    },
    {
        id: 9,
        title: "Descanso en Holbox",
        location: "Quintana Roo, México",
        image: "https://zoeviajando.com/wp-content/uploads/2020/06/holbox-mx3-1536x864.jpg",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: "16,078",
        category: "naturaleza",
        description: "Relájate en las playas vírgenes de Holbox, disfruta de su ambiente tranquilo y observa el espectáculo del bioluminiscente.",
        highlights: ["Playa Punta Cocos", "Bioluminiscencia", "Avistamiento de flamencos", "Paseos en bicicleta"]
    },
    {
        id: 10,
        title: "Explorando San Cristóbal",
        location: "Chiapas, México",
        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/245000/245511-Chiapas.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.8,
        price: "12,000",
        category: "cultural",
        description: "Descubre la magia de San Cristóbal de las Casas, con sus calles empedradas, iglesias coloniales y mercados artesanales.",
        highlights: ["Catedral de San Cristóbal", "Mercado de Dulces y Artesanías", "Museo del Ámbar", "Cañón del Sumidero"]
    },
    {
        id: 11,
        title: "Ruta del Tequila",
        location: "Jalisco, México",
        image: "https://i0.wp.com/tequilatourguadalajara.com/wp-content/uploads/2024/08/Tren-Jose-Cuervo-9.jpg?w=1350&ssl=1",
        duration: "3 días",
        groupSize: "2 personas",
        rating: 4.7,
        price: "12,000",
        category: "cultural",
        description: "Embárcate en la Ruta del Tequila, visitando destilerías tradicionales y disfrutando de catas en el corazón de Jalisco.",
        highlights: ["Destilerías de Tequila", "Campos de agave", "Pueblo Mágico de Tequila", "Museo Nacional del Tequila"]
    }

];


const Experiences = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredExperiences = activeFilter === 'all'
        ? experiences
        : experiences.filter(exp => exp.category === activeFilter);

    return (
        <div className="experiences-page">
            <NavComponent />
            <ExperienceHero />

            <section className="experiences-filter section">
                <div className="container">
                    <ExperienceFilters
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                    />

                    <div className="experiences-grid">
                        {filteredExperiences.map((experience) => (
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))}
                    </div>
                </div>
            </section>

            <ExperienceCTA />
            <FooterComponent />
        </div>
    );
};

export default Experiences;