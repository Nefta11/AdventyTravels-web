import "./ShopButton.css";
import tiendaImg from "../../../assets/images/shop.webp";

const ShopButton = () => {
    return (
        <div className="shop-button-container">
            <a href="https://booking.adventytravels.com/"  rel="noopener noreferrer">
                <img src={tiendaImg} alt="Tienda en Línea" className="shop-button-img" />
            </a>
        </div>
    );
};

export default ShopButton;
    