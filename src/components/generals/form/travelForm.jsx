import  { useState } from "react";
import "./travelForm.css";

const travelForm = () => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="form-container">
                <button className="close-button" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <h2>
                    ¿Le ayudamos a hacer realidad su viaje?
                </h2>
                <p>
                    <span role="img" aria-label="Mexico flag">🇲🇽</span> 55 4161 1796
                </p>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Nombres *" required />
                        <input type="text" placeholder="Apellidos" />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email *" required />
                        <div className="phone-input">
                            <span>🇲🇽 +52</span>
                            <input type="tel" placeholder="Teléfono de Contacto" />
                        </div>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Fecha de llegada DD/MM/YYYY" />
                        <input type="number" placeholder="Número de Viajeros" />
                    </div>
                    <textarea placeholder="Escribanos aquí su consulta *" required></textarea>
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" /> Suscríbete y ¡Entérate de todo!
                        </label>
                        <label>
                            <input type="checkbox" /> Procesamos sus datos de acuerdo a nuestra <a href="#">Política de Privacidad</a>
                        </label>
                    </div>
                    <button type="submit" className="submit-button">
                        ¡Consulte Ahora!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default travelForm;
