import "./carousel.css";
import usaImage1 from "../../../assets/images/usa.webp";
import usaImage2 from "../../../assets/images/usa.webp";
import usaImage3 from "../../../assets/images/usa.webp";
import usaImage4 from "../../../assets/images/usa.webp";
import usaImage5 from "../../../assets/images/usa.webp";

const images = [usaImage1, usaImage2, usaImage3, usaImage4, usaImage5]; // Añade tus imágenes aquí

const CarouselComponent = () => {
    return (
        <section className="carousel">
            <ol className="viewport" tabIndex="1">
                {images.map((image, index) => (
                    <li className="slide" key={index}>
                        <div
                            className="snapper"
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default CarouselComponent;
