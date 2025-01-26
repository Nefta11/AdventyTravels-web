import "./carousel.css";

const images = ["../../../assets/images/usa.png", "../../../assets/images/usa.png", "../../../assets/images/usa.png"]; // Añade tus imágenes aquí

const carouselComponent = () => {
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

export default carouselComponent;
