import { useState, useEffect } from 'react';


const ExperienceHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const heroImages = [
        "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5992273/pexels-photo-5992273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="experiences-hero">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
            <div className="hero-content">
                <h1>Nuestras Experiencias</h1>
                <p>Descubre aventuras únicas diseñadas para explorar los lugares más impresionantes de México y el mundo</p>
            </div>
            <div className="hero-dots">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceHero;