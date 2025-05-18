import PropTypes from 'prop-types';

const PhotoGrid = ({ photos, onPhotoClick, isLoading }) => {
    if (isLoading) {
        return (
            <div className="loading-grid">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="photo-skeleton" />
                ))}
            </div>
        );
    }
    if (photos.length === 0) {
        return (
            <div className="no-photos">
                <h3>No se encontraron fotos</h3>
                <p>Intenta con otros filtros o términos de búsqueda</p>
            </div>
        );
    }
    return (
        <div className="photo-grid">
            {photos.map((photo) => (
                <div
                    className="photo-item"
                    key={photo.id}
                    onClick={() => onPhotoClick(photo)}
                >
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                    <div className="photo-overlay">
                        <h3>{photo.alt}</h3>
                        <p>{photo.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

PhotoGrid.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            location: PropTypes.string,
        })
    ).isRequired,
    onPhotoClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default PhotoGrid;