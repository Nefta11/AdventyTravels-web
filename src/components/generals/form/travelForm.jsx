import { useState } from "react";
import { useTranslation } from "react-i18next";
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';
import "./travelForm.css";

const estadosMexico = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const TravelForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

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
                <h2 className="title">{t('travelForm.title')}</h2>
                <h3 className="subtitle">{t('travelForm.description')}</h3>
                <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
                <form onSubmit={sendEmail}>
                    <div className="input-group">
                        <input type="text" name="firstName" placeholder={t('travelForm.firstName')} required />
                        <input type="text" name="lastName" placeholder={t('travelForm.lastName')} required />

                    </div>
                    <div className="input-group">
                        <input type="text" name="phoneNumber" placeholder={t('travelForm.phoneNumber')} />
                        <input type="text" name="whatsappNumber" placeholder={t('travelForm.whatsappNumber')} />
                    </div>
                    <div className="input-group">
                        <select name="estado" required>
                            <option value="">{t('travelForm.selectState')}</option>
                            {estadosMexico.map((estado, index) => (
                                <option key={index} value={estado}>{estado}</option>
                            ))}
                        </select>
                        <textarea name="comments" placeholder={t('travelForm.message')} required></textarea>
                    </div>
                    <button type="submit" className="submit-button">{t('travelForm.submit')}</button>
                </form>
            </div>
        </div>
    );
};

export default TravelForm;
