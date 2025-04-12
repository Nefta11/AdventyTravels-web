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
                <h2 className="adventy-modal-title">Solicitud de alta de Registro de Distribuidor</h2>
                <form className="adventy-modal-form">
                    <input
                        type="text"
                        className="adventy-modal-input"
                        placeholder="Nombre"
                    />
                    <input
                        type="email"
                        className="adventy-modal-input"
                        placeholder="Email"
                    />
                    <input
                        type="tel"
                        className="adventy-modal-input"
                        placeholder="Whatsapp"
                    />
                    <div className="adventy-modal-row">
                        <input
                            type="text"
                            className="adventy-modal-input"
                            placeholder="País"
                        />
                        <input
                            type="text"
                            className="adventy-modal-input"
                            placeholder="Ciudad"
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
