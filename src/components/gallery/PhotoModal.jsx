import { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import './PhotoModal.css';

const PhotoModal = ({ photo, onClose }) => {
    const modalRef = useRef(null);
    const [startY, setStartY] = useState(0);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose, handleClose]);

    // Evita scroll del body cuando el modal está abierto
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleModalClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    };

    // Eventos táctiles para deslizar y cerrar en móviles
    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const modalContent = modalRef.current;

        if (currentY - startY > 100) {
            handleClose();
        }

        // Efecto visual durante el arrastre
        if (currentY > startY && modalContent) {
            const translateY = Math.min(currentY - startY, 100);
            const opacity = 1 - (translateY / 200);
            modalContent.style.transform = `translateY(${translateY}px)`;
            modalContent.style.opacity = opacity;
        }
    };

    const handleTouchEnd = () => {
        const modalContent = modalRef.current;
        if (modalContent) {
            modalContent.style.transform = '';
            modalContent.style.opacity = '';
        }
    };

    return (
        <div className={`photo-modal ${isClosing ? 'closing' : ''}`} onClick={handleModalClick}>
            <div
                className="modal-content"
                ref={modalRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <button className="close-modal" onClick={handleClose}>
                    <X size={20} />
                </button>

                <div className="modal-image">
                    <img src={photo.src} alt={photo.alt} />
                </div>

                <div className="photo-details">
                    <div className="details-header">
                        <h2>{photo.alt}</h2>
                    </div>

                    <div className="category-tag">{photo.category}</div>

                    <div className="details-grid">
                        <div className="detail-item">
                            <span className="label">Ubicación</span>
                            <span className="value">{photo.location}</span>
                        </div>

                        <div className="detail-item">
                            <span className="label">Fecha</span>
                            <span className="value">{new Date(photo.date).toLocaleDateString()}</span>
                        </div>

                        <div className="detail-item">
                            <span className="label">Fotógrafo</span>
                            <span className="value">{photo.photographer}</span>
                        </div>

                        <div className="detail-item">
                            <span className="label">Categoría</span>
                            <span className="value">{photo.category}</span>
                        </div>
                    </div>
                </div>

                <div className="swipe-indicator">
                    <div className="swipe-line"></div>
                    <span>Desliza hacia abajo para cerrar</span>
                </div>
            </div>
        </div>
    );
};

PhotoModal.propTypes = {
    photo: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        location: PropTypes.string,
        date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        photographer: PropTypes.string,
        category: PropTypes.string,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PhotoModal;