import './underConstruction.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const UnderConstruction = ({ pageName }) => {
    const { t } = useTranslation();

    return (
        <div className="under-construction">
            <h2 className="construction-title">
                {t('underConstruction.title', { pageName })}
            </h2>
            <img src="https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/LOGOTIPO_OFICIAL.webp" alt="En Construcción" className="construction-logo" />
            <p className="construction-text">
                {t('underConstruction.text')}
            </p>
            <img src="https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/page-construction.gif" alt="Cargando..." className="construction-gif" />
        </div>
    );
};

UnderConstruction.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default UnderConstruction;
