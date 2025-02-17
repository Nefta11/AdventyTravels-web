import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';
import "./travelForm.css";

const TravelForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { t } = useTranslation();
    const [phone, setPhone] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        // Debug: Verificar los datos antes de enviarlos
        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        emailjs.sendForm('service_zmd74hu', 'template_nkyigza', e.target, '9CUfOoMbPp6o8R4bH')
            .then((result) => {
                console.log("Success:", result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log("Error:", error.text);
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
                        <input type="text" name="lastName" placeholder={t('travelForm.lastName')} required />
                    </div>
                    <div className="input-group">
                        <input type="date" name="arrivalDate" placeholder={t('travelForm.arrivalDate')} required />
                        <PhoneInput
                            country={'mx'}
                            value={phone}
                            onChange={setPhone}
                            containerClass="phone-input"
                        />
                        {/* Campo oculto para asegurar que el teléfono se envíe */}
                        <input type="hidden" name="phone" value={phone} />
                    </div>
                    <div className="input-group">
                        <input type="number" name="numberOfTravelers" placeholder={t('travelForm.numberOfTravelers')} required />
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
