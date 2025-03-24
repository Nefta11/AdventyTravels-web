import "./MissionVision.css";
const officeImage = "https://raw.githubusercontent.com/Nefta11/AdventyTravels-web/refs/heads/main/src/assets/images/aboutUs/adventy.webp";
import { useTranslation } from 'react-i18next';

const MissionVision = () => {
    const { t } = useTranslation();

    return (
        <section className="mission-vision">
            <div className="mission-vision-container">
                <img src={officeImage} alt="Oficina" className="mission-vision-image" />
                <div className="mission-vision-text">
                    <h2 className="mission-title">{t('missionVision.missionTitle')}</h2>
                    <p>{t('missionVision.missionText')}</p>
                    <h2 className="vision-title">{t('missionVision.visionTitle')}</h2>
                    <p>{t('missionVision.visionText')}</p>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
