import './underConstruction.css';

const UnderConstruction = () => {
    return (
        <div className="under-construction">
            <img src="https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/update/web/src/assets/images/LOGOTIPO_OFICIAL.webp" alt="En Construcción" className="construction-logo" />
            <h2 className="construction-title">
                Esta página está en construcción
            </h2>
            <p className="construction-text">
                Estamos trabajando para ofrecerte la mejor experiencia. ¡Vuelve pronto!
            </p>
            <img src="https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/update/web/src/assets/page-construction.gif" alt="Cargando..." className="construction-gif" />
        </div>
    );
};

export default UnderConstruction;
