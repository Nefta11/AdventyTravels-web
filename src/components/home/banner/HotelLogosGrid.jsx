import "./HotelLogosGrid.css";

const hotelLogos = [
    { src: "/src/assets/images/hotels/marriot.webp", alt: "Marriott International" },
    { src: "/src/assets/images/hotels/fietaAme.webp", alt: "Fiesta Americana" },
    { src: "/src/assets/images/hotels/kristal.webp", alt: "Krystal Hotels & Resorts" },
    { src: "/src/assets/images/hotels/oasis.webp", alt: "Oasis Hotels & Resorts" },
    { src: "/src/assets/images/hotels/RIU_Hotels.webp", alt: "RIU Hotels & Resorts" },
    { src: "/src/assets/images/hotels/palaceResorts.webp", alt: "Palace Resorts" },
];

const HotelLogosGrid = () => {
    return (
        <div className="hotel-logos-grid">
            {hotelLogos.map((logo, index) => (
                <div key={index} className="hotel-logo-item">
                    <img src={logo.src} alt={logo.alt} />
                </div>
            ))}
        </div>
    );
};

export default HotelLogosGrid;
