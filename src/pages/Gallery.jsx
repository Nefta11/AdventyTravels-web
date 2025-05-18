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
            src: "https://images.pexels.com/photos/3290067/pexels-photo-3290067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Ruinas de Tulum",
            category: "cultural",
            location: "Tulum, Quintana Roo",
            date: "2024-02-15",
            photographer: "Carlos Rodríguez"
        },
        {
            id: 2,
            src: "https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Cenote Cristalino",
            category: "naturaleza",
            location: "Riviera Maya, Quintana Roo",
            date: "2024-01-20",
            photographer: "María González"
        },
        {
            id: 3,
            src: "https://images.pexels.com/photos/5339066/pexels-photo-5339066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Pirámide de Chichén Itzá",
            category: "cultural",
            location: "Chichén Itzá, Yucatán",
            date: "2024-03-05",
            photographer: "Ana Martínez"
        },
        {
            id: 4,
            src: "https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Playa Paraíso",
            category: "playas",
            location: "Tulum, Quintana Roo",
            date: "2024-02-28",
            photographer: "Pedro Silva"
        },
        {
            id: 5,
            src: "https://images.pexels.com/photos/5747136/pexels-photo-5747136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Calles de San Miguel de Allende",
            category: "cultural",
            location: "San Miguel de Allende, Guanajuato",
            date: "2024-01-15",
            photographer: "Luis Ramírez"
        },
        {
            id: 6,
            src: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Parque Xcaret",
            category: "aventura",
            location: "Playa del Carmen, Quintana Roo",
            date: "2024-03-10",
            photographer: "Isabel Torres"
        },
        {
            id: 7,
            src: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Playa en Cancún",
            category: "playas",
            location: "Cancún, Quintana Roo",
            date: "2024-02-10",
            photographer: "Diego Sánchez"
        },
        {
            id: 8,
            src: "https://images.pexels.com/photos/12861657/pexels-photo-12861657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Desierto de Sonora",
            category: "naturaleza",
            location: "Sonora",
            date: "2024-01-25",
            photographer: "Roberto Álvarez"
        },
        {
            id: 9,
            src: "https://images.pexels.com/photos/13090617/pexels-photo-13090617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Cascadas de Agua Azul",
            category: "naturaleza",
            location: "Chiapas",
            date: "2024-03-15",
            photographer: "Carmen Vega"
        },
        {
            id: 10,
            src: "https://images.pexels.com/photos/3987927/pexels-photo-3987927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Día de los Muertos",
            category: "cultural",
            location: "Ciudad de México",
            date: "2024-02-20",
            photographer: "Juan Mendoza"
        },
        {
            id: 11,
            src: "https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Mariachis en Garibaldi",
            category: "cultural",
            location: "Ciudad de México",
            date: "2024-01-30",
            photographer: "Pablo Morales"
        },
        {
            id: 12,
            src: "https://images.pexels.com/photos/13397460/pexels-photo-13397460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Barrancas del Cobre",
            category: "montañas",
            location: "Chihuahua",
            date: "2024-03-01",
            photographer: "Andrea Castro"
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