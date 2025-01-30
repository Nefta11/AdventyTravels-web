import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./travelForm.css";

const travelForm = () => {
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
                <h2 className="title">{t('travelForm.title')}</h2>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder={t('travelForm.firstName')} required />
                        <input type="text" placeholder={t('travelForm.lastName')} />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder={t('travelForm.email')} required />
                        <div className="phone-input">
                            <span>🇲🇽 +52</span>
                            <input type="tel" placeholder={t('travelForm.phonePlaceholder')} />
                        </div>
                    </div>
                    <div className="input-group">
                        <input type="date" placeholder={t('travelForm.arrivalDate')} max={today} />
                        <input type="number" placeholder={t('travelForm.numberOfTravelers')} max="11" />
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

export default travelForm;
