import "./HotelLogosGrid.css";

const hotelLogos = [
    { src: "../../../../public/images/hotels/marriot.webp", alt: "Marriott International" },
    { src: "../../../../public/images/hotels/fietaAme.webp", alt: "Fiesta Americana" },
    { src: "../../../../public/images/hotels/kristal.webp", alt: "Krystal Hotels & Resorts" },
    { src: "../../../../public/images/hotels/oasis.webp", alt: "Oasis Hotels & Resorts" },
    { src: "../../../../public/images/hotels/RIU_Hotels.webp", alt: "RIU Hotels & Resorts" },
    { src: "../../../../public/images/hotels/palaceResorts.webp", alt: "Palace Resorts" },
    { src: "../../../../public/images/hotels/hilton.webp", alt: "Hilton Hotels & Resorts" },
    { src: "../../../../public/images/hotels/ihg.webp", alt: "IHG Hotels & Resorts" },
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
