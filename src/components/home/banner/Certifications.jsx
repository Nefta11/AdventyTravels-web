import { useTranslation } from 'react-i18next';
import "./Certifications.css";
import BlurText from '../../reactbitsComponents/BlurText';

const partners = [
    { name: "SAT", logo: "../../../../public/images/logosCert/sat.webp" },
    { name: "IMPI", logo: "../../../../public/images/logosCert/impi.webp" },
    { name: "TURISMO", logo: "../../../../public/images/logosCert/turismo.webp" },
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
