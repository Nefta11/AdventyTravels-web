import NavComponent from '../components/home/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/home/footer/FooterComponent";
import "./styles/Experiences.css"; // Importa el archivo CSS

export default function Experiences() {
    return (
        <>
            <NavComponent />
            <div className="construction-container">
                <img src="/src/assets/images/LOGOTIPO_OFICIAL.webp" alt="En Construcción" className="construction-logo" />
                <h2 className="construction-title">Esta página está en construcción</h2>
                <p className="construction-text">
                    Estamos trabajando para ofrecerte la mejor experiencia. ¡Vuelve pronto!
                </p>
                <img src="https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/update/web/src/assets/page-construction.gif" alt="Página en construcción" className="construction-gif" />
            </div>
            <FooterComponent />
            <WhatsAppIcon />
        </>
    );
}
