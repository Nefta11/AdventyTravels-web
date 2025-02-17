import './TermsModal.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const TermsModal = ({ show, handleClose }) => {
    const { t } = useTranslation();

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={handleClose}>×</button>
                <h2>{t('termsAndConditions.title')}</h2>
                <p>{t('termsAndConditions.lastUpdate')}</p>
                <p>{t('termsAndConditions.intro')}</p>
                <h3>{t('termsAndConditions.sections.contractPurpose.title')}</h3>
                <p>{t('termsAndConditions.sections.contractPurpose.content')}</p>
                <ul>
                    {t('termsAndConditions.sections.contractPurpose.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('termsAndConditions.sections.contractPurpose.note')}</p>
                <h3>{t('termsAndConditions.sections.bookingAndPayment.title')}</h3>
                <p>{t('termsAndConditions.sections.bookingAndPayment.content')}</p>
                <ul>
                    {t('termsAndConditions.sections.bookingAndPayment.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>{t('termsAndConditions.sections.bookingAndPayment.paymentMethods.title')}</h3>
                <p>{t('termsAndConditions.sections.bookingAndPayment.paymentMethods.content')}</p>
                <ul>
                    {t('termsAndConditions.sections.bookingAndPayment.paymentMethods.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('termsAndConditions.sections.bookingAndPayment.paymentMethods.note')}</p>
                <h3>{t('termsAndConditions.sections.cancellationsAndModifications.title')}</h3>
                <h4>{t('termsAndConditions.sections.cancellationsAndModifications.clientSide.title')}</h4>
                <ul>
                    {t('termsAndConditions.sections.cancellationsAndModifications.clientSide.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h4>{t('termsAndConditions.sections.cancellationsAndModifications.agencySide.title')}</h4>
                <ul>
                    {t('termsAndConditions.sections.cancellationsAndModifications.agencySide.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>{t('termsAndConditions.sections.clientResponsibilities.title')}</h3>
                <p>{t('termsAndConditions.sections.clientResponsibilities.content')}</p>
                <ul>
                    {t('termsAndConditions.sections.clientResponsibilities.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('termsAndConditions.sections.clientResponsibilities.note')}</p>
                <h3>{t('termsAndConditions.sections.refunds.title')}</h3>
                <p>{t('termsAndConditions.sections.refunds.content')}</p>
                <p>{t('termsAndConditions.sections.refunds.note')}</p>
                <h3>{t('termsAndConditions.sections.specificConditions.title')}</h3>
                <h4>{t('termsAndConditions.sections.specificConditions.flights.title')}</h4>
                <ul>
                    {t('termsAndConditions.sections.specificConditions.flights.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h4>{t('termsAndConditions.sections.specificConditions.transfers.title')}</h4>
                <ul>
                    {t('termsAndConditions.sections.specificConditions.transfers.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h4>{t('termsAndConditions.sections.specificConditions.lodging.title')}</h4>
                <ul>
                    {t('termsAndConditions.sections.specificConditions.lodging.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>{t('termsAndConditions.sections.advertisingAndPromotions.title')}</h3>
                <ul>
                    {t('termsAndConditions.sections.advertisingAndPromotions.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>{t('termsAndConditions.sections.intellectualProperty.title')}</h3>
                <p>{t('termsAndConditions.sections.intellectualProperty.content')}</p>
                <h3>{t('termsAndConditions.sections.termsModification.title')}</h3>
                <p>{t('termsAndConditions.sections.termsModification.content')}</p>
                <h3>{t('termsAndConditions.sections.applicableLaw.title')}</h3>
                <p>{t('termsAndConditions.sections.applicableLaw.content')}</p>
                <h3>{t('termsAndConditions.sections.qualityControl.title')}</h3>
                <ul>
                    {t('termsAndConditions.sections.qualityControl.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>{t('termsAndConditions.sections.contact.title')}</h3>
                <p>{t('termsAndConditions.sections.contact.content')}</p>
                <ul>
                    {t('termsAndConditions.sections.contact.items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t('termsAndConditions.sections.contact.note')}</p>
                <button className="accept-button" onClick={handleClose}>{t('termsAndConditions.iHaveRead')}</button>
            </div>
        </div>
    );
};

TermsModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default TermsModal;
