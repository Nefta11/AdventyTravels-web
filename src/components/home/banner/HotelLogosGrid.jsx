import "./HotelLogosGrid.css";

const hotelLogos = [
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/marriot.webp", alt: "Marriott International" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/fietaAme.webp", alt: "Fiesta Americana" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/kristal.webp", alt: "Krystal Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/oasis.webp", alt: "Oasis Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/RIU_Hotels.webp", alt: "RIU Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/palaceResorts.webp", alt: "Palace Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/hilton.webp", alt: "Hilton Hotels & Resorts" },
    { src: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/hotels/ihg.webp", alt: "IHG Hotels & Resorts" },
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
