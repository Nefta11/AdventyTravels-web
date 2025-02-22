import NavComponent from '../components/home/nav/navComponent';
import WhatsAppIcon from "../components/generals/whatsAppComponent/WhatsAppIcon";
import FooterComponent from "../components/home/footer/FooterComponent";

export default function Experiences() {
    return (
        <>
            <NavComponent />
            <div style={styles.container}>
                <img src="/src/assets/images/LOGOTIPO_OFICIAL.webp" alt="En Construcción" style={styles.logo} />
                <h2 style={styles.title}>Esta página está en construcción</h2>
                <p style={styles.text}>
                    Estamos trabajando para ofrecerte la mejor experiencia. ¡Vuelve pronto!
                </p>
                <img src="/src/assets/page-construction.gif" alt="Página en construcción" style={styles.gif} />
            </div>
            <FooterComponent />
            <WhatsAppIcon />
        </>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
        padding: "20px"
    },
    logo: {
        width: "50%",
        maxWidth: "500px",
        marginBottom: "20px"
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333"
    },
    text: {
        fontSize: "1.2rem",
        color: "#666",
        maxWidth: "600px",
        lineHeight: "1.6",
        marginBottom: "20px"
    },
    gif: {
        width: "40%",
        maxWidth: "400px"
    },
    "@media (max-width: 768px)": {
        container: {
            height: "auto",
            padding: "40px 20px"
        },
        logo: {
            width: "70%"
        },
        title: {
            fontSize: "1.8rem"
        },
        text: {
            fontSize: "1rem",
            maxWidth: "90%"
        },
        gif: {
            width: "60%"
        }
    }
};
