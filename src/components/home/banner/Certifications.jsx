import { useTranslation } from 'react-i18next';
import "./Certifications.css";
import BlurText from '../../reactbitsComponents/BlurText';

const partners = [
    { name: "Tripadvisor", logo: "/src/assets/images/logosCert/TripAdvisor.webp" },
    { name: "Bodas.com.mx", logo: "/src/assets/images/logosCert/bodas-removebg.webp" },
    { name: "Secure SSL", logo: "/src/assets/images/logosCert/secure.webp" },
    { name: "Kueski Pay", logo: "/src/assets/images/logosCert/kueskipay.webp" },
    { name: "Openpay", logo: "/src/assets/images/logosCert/openpay.webp" },
    { name: "Paynet", logo: "/src/assets/images/logosCert/images.webp" },
    { name: "Facebook", logo: "/src/assets/images/logosCert/facebook.webp" },
    { name: "Google", logo: "/src/assets/images/logosCert/chrome.webp" },
];

const Certifications = () => {
    const { t } = useTranslation();

    return (
        <div className="certifications-container">
            <BlurText
                text={t('certifications.secureText')}
                delay={100}
                animateBy='words'
                direction='top'
                className="secure-text"
            />
            <h2 className="certifications-title">{t('certifications.title')}</h2>
            <div className="tabs">
                <p>{t('certifications.safePurchases')}</p>
                <p>{t('certifications.allies')}</p>
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
