import NavComponent from '../components/home/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/home/footer/FooterComponent";

export default function Experiences() {

    return (
        <>
            <NavComponent />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
                textAlign: "center",
                padding: "20px"
            }}>
                <img src="/src/assets/images/LOGOTIPO_OFICIAL.webp" alt="En Construcción" style={{ width: "50%", maxWidth: "500px", marginBottom: "20px" }} />
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
                    Esta página está en construcción
                </h2>
                <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", lineHeight: "1.6" }}>
                    Estamos trabajando para ofrecerte la mejor experiencia. ¡Vuelve pronto!
                </p>
            </div>
            <FooterComponent />
            <WhatsAppIcon />
        </>
    );
}
