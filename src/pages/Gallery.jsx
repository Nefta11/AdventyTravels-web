import { useState, useEffect } from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryFilters from '../components/gallery/GalleryFilters';
import PhotoGrid from '../components/gallery/PhotoGrid';
import PhotoModal from '../components/gallery/PhotoModal';
import NavComponent from '../components/generals/nav/navComponent';
import FooterComponent from "../components/generals/footer/FooterComponent";
import '../components/gallery/Gallery.css';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const photos = [
        {
            id: 1,
            src: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2021/02/riviera-maya-tulum-castillo-888.jpg",
            alt: "Ruinas de Tulum",
            category: "cultural",
            location: "Tulum, Quintana Roo",
            date: "2024-02-15",
            photographer: "Carlos Rodríguez"
        },
        {
            id: 2,
            src: "https://cenotecristalino.com/wp-content/uploads/2023/08/cenote-cristalino.jpeg",
            alt: "Cenote Cristalino",
            category: "naturaleza",
            location: "Riviera Maya, Quintana Roo",
            date: "2024-01-20",
            photographer: "María González"
        },
        {
            id: 3,
            src: "https://cdn.sanity.io/images/atvntylo/production/c5523e15a9221746d44966d37ad0a38071ebe244-1080x720.webp?w=1080&q=65&fit=clip&auto=format",
            alt: "Pirámide de Chichén Itzá",
            category: "cultural",
            location: "Chichén Itzá, Yucatán",
            date: "2024-03-05",
            photographer: "Ana Martínez"
        },
        {
            id: 4,
            src: "https://icdn.descubro.mx/uploads/2017/08/Coba-Tulum-Playa-Paraiso-Maya-Vacanze-1024x768.jpg?strip=all&lossy=1&ssl=1",
            alt: "Playa Paraíso",
            category: "playas",
            location: "Tulum, Quintana Roo",
            date: "2024-02-28",
            photographer: "Pedro Silva"
        },
        {
            id: 5,
            src: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/04/Lugares-cautivadores-para-conocer-en-San-Miguel-de-Allende.png",
            alt: "Calles de San Miguel de Allende",
            category: "cultural",
            location: "San Miguel de Allende, Guanajuato",
            date: "2024-01-15",
            photographer: "Luis Ramírez"
        },
        {
            id: 6,
            src: "https://venues.com.mx/wp-content/uploads/2024/05/Parque-Xcaret-Entradas-15.jpeg",
            alt: "Parque Xcaret",
            category: "aventura",
            location: "Playa del Carmen, Quintana Roo",
            date: "2024-03-10",
            photographer: "Isabel Torres"
        },
        {
            id: 7,
            src: "https://randomtrip.es/wp-content/uploads/2024/07/zz-portada-cancun-playa-2.jpg",
            alt: "Playa en Cancún",
            category: "playas",
            location: "Cancún, Quintana Roo",
            date: "2024-02-10",
            photographer: "Diego Sánchez"
        },
        {
            id: 8,
            src: "https://energiatoday.com/wp-content/uploads/2022/05/Desierto-de-Sonora.jpg",
            alt: "Desierto de Sonora",
            category: "naturaleza",
            location: "Sonora",
            date: "2024-01-25",
            photographer: "Roberto Álvarez"
        },
        {
            id: 9,
            src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/99/ae/ef/varais-piscinas-naturais.jpg?w=700&h=400&s=1",
            alt: "Cascadas de Agua Azul",
            category: "naturaleza",
            location: "Chiapas",
            date: "2024-03-15",
            photographer: "Carmen Vega"
        },
        {
            id: 10,
            src: "https://demo.clevercloudapp.com/repo/public/Noche-de-muertos_15_blog_b7f669cf80d15a807c0f1f469eabe6a5.webp",
            alt: "Día de los Muertos",
            category: "cultural",
            location: "Ciudad de México",
            date: "2024-02-20",
            photographer: "Juan Mendoza"
        },
        {
            id: 11,
            src: "https://tecolotito.elsiglodetorreon.com.mx/cdn-cgi/image/format=webp,width=773,quality=75/i/2020/06/1319646.jpeg",
            alt: "Mariachis en Garibaldi",
            category: "cultural",
            location: "Ciudad de México",
            date: "2024-01-30",
            photographer: "Pablo Morales"
        },
        {
            id: 12,
            src: "https://www.aletazulcompany.com/cdn/shop/articles/urique.jpg?v=1632841652&width=1000",
            alt: "Barrancas del Cobre",
            category: "montañas",
            location: "Chihuahua",
            date: "2024-03-01",
            photographer: "Andrea Castro"
        },
        {
            id: 13,
            src: "https://wp.rutopia.com/wp-content/uploads/2021/11/Mexico-agave-fields.jpeg",
            alt: "Campos de Agave",
            category: "cultural",
            location: "Tequila, Jalisco",
            date: "2024-04-05",
            photographer: "Rafael Méndez"
        },
        {
            id: 14,
            src: "https://queretaro.quadratin.com.mx/www/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-08-at-4.17.59-PM-1160x700.jpeg",
            alt: "Centro Histórico de Oaxaca",
            category: "cultural",
            location: "Oaxaca de Juárez, Oaxaca",
            date: "2024-03-20",
            photographer: "Lucía Hernández"
        },
        {
            id: 15,
            src: "https://cdn.sanity.io/images/atvntylo/production/4512065539db3fcdbc34cf03f59e90ff386d1c76-1080x720.webp?w=1080&q=65&fit=clip&auto=format",
            alt: "Playa del Carmen",
            category: "playas",
            location: "Playa del Carmen, Quintana Roo",
            date: "2024-02-12",
            photographer: "Miguel Ángel Torres"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const filteredPhotos = photos.filter(photo => {
        const matchesFilter = activeFilter === 'all' || photo.category === activeFilter;
        const matchesSearch = photo.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            photo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            photo.photographer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const openPhotoModal = (photo) => {
        setSelectedPhoto(photo);
        document.body.style.overflow = 'hidden';
    };

    const closePhotoModal = () => {
        setSelectedPhoto(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="gallery-page">
            <NavComponent />
            <GalleryHero />

            <section className="gallery-section">
                <div className="gallery-container">
                    <GalleryFilters
                        activeFilter={activeFilter}
                        searchQuery={searchQuery}
                        onFilterChange={setActiveFilter}
                        onSearchChange={setSearchQuery}
                    />

                    <PhotoGrid
                        photos={filteredPhotos}
                        onPhotoClick={openPhotoModal}
                        isLoading={isLoading}
                    />
                </div>
            </section>

            {selectedPhoto && (
                <PhotoModal
                    photo={selectedPhoto}
                    onClose={closePhotoModal}
                />
            )}
            <FooterComponent />
        </div>
    );
};

export default Gallery;