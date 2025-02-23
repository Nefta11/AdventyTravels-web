import "./WhoWeAre.css";

const WhoWeAre = () => {
    return (
        <section className="who-we-are">
            <div className="image-container">
                <div className="overlay">
                    <h2>¿Quiénes somos?</h2>
                </div>
            </div>
            <div className="text-container">
                <p>
                    Somos una marca orgullosamente poblana y la primera Agencia de Viajes
                    legalmente registrada en <strong>Xicotepec, Puebla</strong>. Fundada el 27 de marzo de 2019.
                </p>
                <p>
                    Nuestro equipo lo forman jóvenes profesionales mexicanos, comprometidos
                    con mejorar la experiencia de nuestros viajeros innovando y capacitándose constantemente.
                </p>
                <p>
                    <strong>Contamos con más de 5 años de experiencia en el sector</strong>, y estamos
                    registrados ante la Secretaría de Turismo (SECTUR) con el número de
                    identificación <strong>0421197308708</strong>. Operamos bajo la representación legal
                    de Grupo Comercial Barcera. Además, hemos recibido diferentes reconocimientos y
                    capacitaciones en los estados de Puebla e Hidalgo, lo que nos avala como una
                    <strong> agencia segura, confiable, responsable y totalmente legal.</strong>
                </p>
            </div>
        </section>
    );
};

export default WhoWeAre;
