import "./HotelLogosGrid.css";

const hotelLogos = [
    { src: "/src/assets/images/hotels/marriot.png", alt: "Marriott International" },
    { src: "/src/assets/images/hotels/fietaAme.png", alt: "Fiesta Americana" },
    { src: "/src/assets/images/hotels/kristal.png", alt: "Krystal Hotels & Resorts" },
    { src: "/src/assets/images/hotels/oasis.png", alt: "Oasis Hotels & Resorts" },
    { src: "/src/assets/images/hotels/RIU_Hotels_logo.svg.png", alt: "RIU Hotels & Resorts" },
    { src: "/src/assets/images/hotels/palaceResorts.png", alt: "Palace Resorts" },
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
