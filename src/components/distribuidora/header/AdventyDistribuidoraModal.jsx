import './AdventyDistribuidoraModal.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AdventyDistribuidoraModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        country: "",
        city: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    if (!isOpen) return null;

    const validateField = (name, value) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'El nombre es requerido';
                } else if (value.length < 2) {
                    newErrors.name = 'El nombre debe tener al menos 2 caracteres';
                } else {
                    delete newErrors.name;
                }
                break;
            case 'email': {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    newErrors.email = 'El email es requerido';
                } else if (!emailRegex.test(value)) {
                    newErrors.email = 'Ingrese un email válido';
                } else {
                    delete newErrors.email;
                }
                break;
            }
            case 'whatsapp': {
                const phoneRegex = /^[0-9+\-\s()]{8,15}$/;
                if (!value.trim()) {
                    newErrors.whatsapp = 'El WhatsApp es requerido';
                } else if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                    newErrors.whatsapp = 'Ingrese un número válido';
                } else {
                    delete newErrors.whatsapp;
                }
                break;
            }
            case 'country':
                if (!value.trim()) {
                    newErrors.country = 'El país es requerido';
                } else {
                    delete newErrors.country;
                }
                break;
            case 'city':
                if (!value.trim()) {
                    newErrors.city = 'La ciudad es requerida';
                } else {
                    delete newErrors.city;
                }
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const isValid = Object.keys(formData).every(key =>
            validateField(key, formData[key])
        );

        if (!isValid) return;

        setIsSubmitting(true);

        try {
            // Simulate processing time
            await new Promise(resolve => setTimeout(resolve, 1500));

            const phone = '5217716075321';
            const text = `✨ Nueva solicitud de Embajadora ✨\n\n👤 Nombre: ${formData.name}\n📧 Email: ${formData.email}\n📱 WhatsApp: ${formData.whatsapp}\n🌍 País: ${formData.country}\n🏙️ Ciudad: ${formData.city}\n\n¡Esperamos trabajar contigo! 💜`;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

            setShowSuccess(true);
            setTimeout(() => {
                window.open(url, '_blank');
                setShowSuccess(false);
                setIsSubmitting(false);
                onClose();
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    whatsapp: "",
                    country: "",
                    city: ""
                });
            }, 2000);

        } catch (error) {
            setIsSubmitting(false);
            console.error('Error:', error);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="adventy-modal-overlay" onClick={handleOverlayClick}>
            <div className="adventy-modal-container">
                <div className="adventy-modal-header">
                    <button className="adventy-modal-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    <div className="adventy-modal-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 8V14M17 11H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2 className="adventy-modal-title">¡Únete como Embajadora!</h2>
                    <p className="adventy-modal-subtitle">Completa tus datos y te contactaremos pronto</p>
                </div>

                {showSuccess ? (
                    <div className="adventy-success-animation">
                        <div className="adventy-success-icon">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3>¡Solicitud Enviada!</h3>
                        <p>Te redirigiremos a WhatsApp...</p>
                    </div>
                ) : (
                    <form className="adventy-modal-form" onSubmit={handleSubmit}>
                        <div className="adventy-input-group">
                            <div className="adventy-input-container">
                                <div className="adventy-input-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className={`adventy-modal-input ${errors.name ? 'error' : ''}`}
                                    placeholder="Nombre completo"
                                    maxLength="70"
                                    value={formData.name}
                                    onChange={e => handleInputChange('name', e.target.value)}
                                    required
                                />
                                {errors.name && <span className="adventy-error-message">{errors.name}</span>}
                            </div>
                        </div>

                        <div className="adventy-input-group">
                            <div className="adventy-input-container">
                                <div className="adventy-input-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    className={`adventy-modal-input ${errors.email ? 'error' : ''}`}
                                    placeholder="Correo electrónico"
                                    maxLength="40"
                                    value={formData.email}
                                    onChange={e => handleInputChange('email', e.target.value)}
                                    required
                                />
                                {errors.email && <span className="adventy-error-message">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="adventy-input-group">
                            <div className="adventy-input-container">
                                <div className="adventy-input-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92V19.92C22 20.42 21.78 20.91 21.39 21.24C21 21.57 20.5 21.73 19.99 21.73C15.43 21.23 11.07 19.68 7.38 17.18C4.09 14.99 1.4 12.3 1 9.01C1 8.5 1.16 8 1.49 7.61C1.82 7.22 2.31 7 2.81 7H5.81C6.54 7 7.15 7.54 7.25 8.26C7.35 9.02 7.52 9.76 7.75 10.47C7.95 11.06 7.8 11.72 7.35 12.17L6.09 13.43C8.07 16.99 11.01 19.93 14.57 21.91L15.83 20.65C16.28 20.2 16.94 20.05 17.53 20.25C18.24 20.48 18.98 20.65 19.74 20.75C20.46 20.85 21 21.46 21 22.19V22.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input
                                    type="tel"
                                    className={`adventy-modal-input ${errors.whatsapp ? 'error' : ''}`}
                                    placeholder="Número de WhatsApp"
                                    maxLength="15"
                                    value={formData.whatsapp}
                                    onChange={e => handleInputChange('whatsapp', e.target.value)}
                                    required
                                />
                                {errors.whatsapp && <span className="adventy-error-message">{errors.whatsapp}</span>}
                            </div>
                        </div>

                        <div className="adventy-modal-row">
                            <div className="adventy-input-container">
                                <div className="adventy-input-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className={`adventy-modal-input ${errors.country ? 'error' : ''}`}
                                    placeholder="País"
                                    maxLength="50"
                                    value={formData.country}
                                    onChange={e => handleInputChange('country', e.target.value)}
                                    required
                                />
                                {errors.country && <span className="adventy-error-message">{errors.country}</span>}
                            </div>
                            <div className="adventy-input-container">
                                <div className="adventy-input-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 12L5 10H10L12 12H17L19 10V18H5C3.89543 18 3 17.1046 3 16V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 12V6L10 4H5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className={`adventy-modal-input ${errors.city ? 'error' : ''}`}
                                    placeholder="Ciudad"
                                    maxLength="50"
                                    value={formData.city}
                                    onChange={e => handleInputChange('city', e.target.value)}
                                    required
                                />
                                {errors.city && <span className="adventy-error-message">{errors.city}</span>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`adventy-modal-submit ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting || Object.keys(errors).length > 0}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="adventy-spinner"></div>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.01 6.64C21.66 6.64 22.21 7.19 22.21 7.84V16.17C22.21 16.82 21.66 17.37 21.01 17.37H2.99C2.34 17.37 1.79 16.82 1.79 16.17V7.84C1.79 7.19 2.34 6.64 2.99 6.64H21.01ZM20.67 8.5L12.07 12.5C12.03 12.52 11.97 12.52 11.93 12.5L3.33 8.5V15.64H20.67V8.5Z" fill="currentColor" />
                                    </svg>
                                    ENVIAR SOLICITUD
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

AdventyDistribuidoraModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AdventyDistribuidoraModal;