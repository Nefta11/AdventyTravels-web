import "./HotelLogosGrid.css";

const hotelLogos = [
    { src: "/src/assets/images/hotels/marriott.webp", alt: "Marriott International" },
    { src: "/src/assets/images/hotels/Fiesta_Americana.webp", alt: "Fiesta Americana" },
    { src: "/src/assets/images/hotels/krystal_1.webp", alt: "Krystal Hotels & Resorts" },
    { src: "/src/assets/images/hotels/oases.webp", alt: "Oasis Hotels & Resorts" },
    { src: "/src/assets/images/hotels/Riu_hotels_and_resorts.webp", alt: "RIU Hotels & Resorts" },
    { src: "/src/assets/images/hotels/palace-resorts-logo_1.webp", alt: "Palace Resorts" },
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
