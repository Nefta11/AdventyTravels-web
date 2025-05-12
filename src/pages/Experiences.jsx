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
        image: "https://images.pexels.com/photos/3290067/pexels-photo-3290067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: 1800,
        category: "naturaleza",
        description: "Sumérgete en las aguas cristalinas de Tulum, explora cenotes místicos y descubre las majestuosas ruinas mayas junto al mar Caribe.",
        highlights: ["Ruinas mayas", "Cenotes secretos", "Playas paradisíacas", "Gastronomía local"]
    },
    {
        id: 2,
        title: "Aventura Chiapas y Tren Maya",
        location: "Chiapas, México",
        image: "https://images.pexels.com/photos/5339066/pexels-photo-5339066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "7 días",
        groupSize: "2 personas",
        rating: 4.8,
        price: 2200,
        category: "aventura",
        description: "Viaja a través de la selva chiapaneca en el Tren Maya, descubriendo cascadas, sitios arqueológicos y la rica cultura indígena.",
        highlights: ["Tren Maya", "Cascadas de Agua Azul", "Palenque", "Comunidades indígenas"]
    },
    {
        id: 3,
        title: "Mágico San Miguel de Allende",
        location: "Guanajuato, México",
        image: "https://images.pexels.com/photos/5747136/pexels-photo-5747136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "4 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: 1500,
        category: "cultural",
        description: "Explora los coloridos callejones coloniales de San Miguel de Allende, reconocida como la mejor ciudad pequeña del mundo.",
        highlights: ["Centro histórico", "Galerías de arte", "Viñedos", "Arquitectura colonial"]
    },
    {
        id: 4,
        title: "Lujo en Cancún",
        location: "Quintana Roo, México",
        image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "6 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: 2500,
        category: "naturaleza",
        description: "Disfruta de las mejores playas del Caribe mexicano, resorts de lujo y experiencias exclusivas en el paraíso.",
        highlights: ["Playas premium", "Spa de lujo", "Deportes acuáticos", "Gastronomía gourmet"]
    },
    {
        id: 5,
        title: "Experiencia Hotel Xcaret",
        location: "Riviera Maya, México",
        image: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.8,
        price: 2800,
        category: "aventura",
        description: "Vive la magia de Xcaret con acceso ilimitado a todos sus parques, combinando aventura, cultura y naturaleza.",
        highlights: ["Parques temáticos", "Shows nocturnos", "Río subterráneo", "Cultura maya"]
    },
    {
        id: 6,
        title: "Encanto de Playa del Carmen",
        location: "Quintana Roo, México",
        image: "https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "5 días",
        groupSize: "2 personas",
        rating: 4.7,
        price: 1900,
        category: "naturaleza",
        description: "Descubre la vibrante Quinta Avenida, playas de arena blanca y la vida nocturna más animada de la Riviera Maya.",
        highlights: ["Quinta Avenida", "Playa Mamitas", "Cenotes cercanos", "Vida nocturna"]
    },
    {
        id: 7,
        title: "Cartagena Colonial",
        location: "Cartagena, Colombia",
        image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        duration: "4 días",
        groupSize: "2 personas",
        rating: 4.9,
        price: 1600,
        category: "cultural",
        description: "Explora la ciudad amurallada de Cartagena, sus calles coloniales y disfruta de la mejor gastronomía caribeña.",
        highlights: ["Ciudad amurallada", "Getsemaní", "Islas del Rosario", "Cocina caribeña"]
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