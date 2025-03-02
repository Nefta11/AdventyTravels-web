import "./MissionVision.css";
import officeImage from "../../../assets/images/aboutUs/oficce.webp"; // Reemplaza con la ruta de tu imagen
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
