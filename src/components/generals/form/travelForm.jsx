import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';
import "./travelForm.css";

const TravelForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        // Asegúrate de que el ID de la plantilla sea correcto
        emailjs.sendForm('service_zmd74hu', 'template_nkyigza', e.target, '9CUfOoMbPp6o8R4bH')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again.');
            });
    };

    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="form-container">
                <button className="close-button" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <h2 className="title">{t('travelForm.title')}</h2>
                <p className="subtitle">{t('travelForm.description')}</p>
                <form onSubmit={sendEmail}>
                    <div className="input-group">
                        <input type="text" name="firstName" placeholder={t('travelForm.firstName')} required />
                        <input type="text" name="lastName" placeholder={t('travelForm.lastName')} />
                    </div>
                    <div className="input-group">
                        <input type="date" name="arrivalDate" placeholder={t('travelForm.arrivalDate')} />
                        <PhoneInput
                            country={'mx'}
                            maxLength={10}
                            placeholder={t('travelForm.phonePlaceholder')}
                            containerClass="phone-input"
                            inputProps={{
                                name: 'phone'
                            }}
                        />
                    </div>
                    <div className="input-group">
                        <input type="number" name="numberOfTravelers" placeholder={t('travelForm.numberOfTravelers')} />
                        <textarea name="message" placeholder={t('travelForm.message')} required></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        {t('travelForm.submit')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TravelForm;
