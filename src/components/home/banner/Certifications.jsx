import { useTranslation } from 'react-i18next';
import "./Certifications.css";

const partners = [
    { name: "SAT", logo: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/logosCert/sat.webp" },
    { name: "IMPI", logo: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/logosCert/impi.webp" },
    { name: "TURISMO", logo: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/logosCert/turismo.webp" },
];

const Certifications = () => {
    const { t } = useTranslation();

    return (
        <div className="certifications-container">
            <p className='secure-text'>{t('certifications.secureText')}</p>
            <div className="logos-container">
                <div className="logos-row">
                    {partners.map((partner, index) => (
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
