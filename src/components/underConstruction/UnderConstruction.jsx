import './underConstruction.css';
import PropTypes from 'prop-types';

const UnderConstruction = ({ pageName }) => {
    return (
        <div className="under-construction">
            <h2 className="construction-title">
                La sección de {pageName} está en construcción
            </h2>
            <img src="https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/update/web/src/assets/images/LOGOTIPO_OFICIAL.webp" alt="En Construcción" className="construction-logo" />
            <p className="construction-text">
                Estamos trabajando para ofrecerte la mejor experiencia. ¡Vuelve pronto!
            </p>
            <img src="https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/update/web/src/assets/page-construction.gif" alt="Cargando..." className="construction-gif" />
        </div>
    );
};
UnderConstruction.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default UnderConstruction;
