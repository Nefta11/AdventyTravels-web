import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';

const PhotoModal = ({ photo, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleModalClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div className="photo-modal" onClick={handleModalClick}>
            <div className="modal-content" ref={modalRef}>
                <button className="close-modal" onClick={onClose}>
                    <X size={24} />
                </button>
                <div className="modal-image">
                    <img src={photo.src} alt={photo.alt} />
                </div>
                <div className="photo-details">
                    <h2>{photo.alt}</h2>
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
                            <span className="value category-tag">{photo.category}</span>
                        </div>
                    </div>
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
