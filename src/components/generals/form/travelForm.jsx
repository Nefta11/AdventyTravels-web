import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./travelForm.css";
import BlurText from "../../reactbitsComponents/BlurText";

const TravelForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { t } = useTranslation();

    const today = new Date().toISOString().split('T')[0];

    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="form-container">
                <button className="close-button" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <BlurText
                    text={t('travelForm.title')}
                    delay={100}
                    animateBy='words'
                    direction='top'
                    className="title"
                />
                <form>
                    <div className="input-group">
                        <input type="text" placeholder={t('travelForm.firstName')} required />
                        <input type="text" placeholder={t('travelForm.lastName')} />
                    </div>
                    <div className="input-group email-phone-group">
                        <input type="email" className="email-input" placeholder={t('travelForm.email')} required />
                        <PhoneInput
                            country={'mx'}
                            maxLength={10}
                            placeholder={t('travelForm.phonePlaceholder')}
                            containerClass="phone-input"
                        />
                    </div>
                    <div className="input-group">
                        <input type="date" placeholder={t('travelForm.arrivalDate')} max={today} />
                        <input type="number" placeholder={t('travelForm.numberOfTravelers')} />
                    </div>
                    <textarea placeholder={t('travelForm.message')} required></textarea>
                    <button type="submit" className="submit-button">
                        {t('travelForm.submit')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TravelForm;
