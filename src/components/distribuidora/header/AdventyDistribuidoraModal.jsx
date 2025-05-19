import './AdventyDistribuidoraModal.css';
import PropTypes from 'prop-types';

const AdventyDistribuidoraModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="adventy-modal-overlay">
            <div className="adventy-modal-container">
                <button className="adventy-modal-close" onClick={onClose}>
                    ✕
                </button>
                <h2 className="adventy-modal-title">Solicitud de alta de Registro de Embajadora</h2>
                <form className="adventy-modal-form">
                    <input
                        type="text"
                        className="adventy-modal-input"
                        placeholder="Nombre"
                        maxLength="70"
                    />
                    <input
                        type="email"
                        className="adventy-modal-input"
                        placeholder="Email"
                        maxLength="40"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Por favor, ingrese un correo electrónico válido."
                    />
                    <input
                        type="tel"
                        className="adventy-modal-input"
                        placeholder="Whatsapp"
                        maxLength="12"
                        pattern="\d{1,12}"
                        title="Por favor, ingrese hasta 12 caracteres numéricos."
                    />
                    <div className="adventy-modal-row">
                        <input
                            type="text"
                            className="adventy-modal-input"
                            placeholder="País"
                            maxLength="50"
                        />
                        <input
                            type="text"
                            className="adventy-modal-input"
                            placeholder="Ciudad"
                            maxLength="50"
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
