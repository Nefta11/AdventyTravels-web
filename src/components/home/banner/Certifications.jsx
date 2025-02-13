import "./Certifications.css";

const partners = [
    { name: "Tripadvisor", logo: "/src/assets/images/logosCert/TripAdvisor.png", large: true },
    { name: "Facebook", logo: "/src/assets/images/logosCert/facebook.png", small: true },
    { name: "Google", logo: "/src/assets/images/logosCert/Google_Chrome_icon2.png", small: true },
    { name: "Bodas.com.mx", logo: "/src/assets/images/logosCert/bodas-removebg.png", large: true },
    { name: "Secure SSL", logo: "/src/assets/images/logosCert/secure.png", large: true },
    { name: "Kueski Pay", logo: "/src/assets/images/logosCert/kueskipay.png", large: true },
    { name: "Openpay", logo: "/src/assets/images/logosCert/openpay.webp", large: true },
    { name: "Paynet", logo: "/src/assets/images/logosCert/images.png", large: true }
];

const Certifications = () => {
    return (
        <div className="certifications-container">
            <p className="secure-text">AGENCIA SEGURA, COMPRA SEGURA</p>
            <h2 className="certifications-title">Certificaciones, aliados y cuentas oficiales</h2>
            <div className="tabs">
                <p>Compras Seguras</p>
                <p>Aliados</p>
            </div>
            <div className="logos-container">
                <div className="logos-row">
                    {partners.slice(0, 5).map((partner, index) => (
                        <div key={index} className="logo-item">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={partner.small ? "small-logo" : partner.large ? "large-logo" : ""}
                            />
                        </div>
                    ))}
                </div>
                <div className="logos-row">
                    {partners.slice(5).map((partner, index) => (
                        <div key={index} className="logo-item">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={partner.small ? "small-logo" : partner.large ? "large-logo" : ""}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
