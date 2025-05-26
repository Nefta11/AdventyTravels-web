import './AdventyDistribuidoraModal.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AdventyDistribuidoraModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = '5217716075321'; // Número de WhatsApp destino
        const text = `Hola, quiero registrarme como Embajadora.\nNombre: ${name}\nEmail: ${email}\nWhatsapp: ${whatsapp}\nPaís: ${country}\nCiudad: ${city}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="adventy-modal-overlay">
            <div className="adventy-modal-container">
                <button className="adventy-modal-close" onClick={onClose}>
                    ✕
                </button>
                <h2 className="adventy-modal-title">Solicitud de alta de Registro de Embajadora</h2>
                <form className="adventy-modal-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="adventy-modal-input"
                        placeholder="Nombre"
                        maxLength="70"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="adventy-modal-input"
                        placeholder="Email"
                        maxLength="40"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
                        title="Por favor, ingrese un correo electrónico válido."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        className="adventy-modal-input"
                        placeholder="Whatsapp"
                        maxLength="12"
                        pattern="[0-9]{1,12}"
                        title="Por favor, ingrese hasta 12 caracteres numéricos."
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        required
                    />
                    <div className="adventy-modal-row">
                        <input
                            type="text"
                            className="adventy-modal-input"
                            placeholder="País"
                            maxLength="50"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="adventy-modal-input"
                            placeholder="Ciudad"
                            maxLength="50"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="adventy-modal-submit">
                        SOLICITAR REGISTRO
                    </button>
                </form>
            </div>
        </div>
    );
};
AdventyDistribuidoraModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AdventyDistribuidoraModal;
