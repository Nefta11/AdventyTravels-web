import './TermsModal.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { FaTimes, FaCheckCircle, FaChevronUp, FaArrowLeft } from 'react-icons/fa';

const TermsModal = ({ show, handleClose }) => {
    const { t } = useTranslation();
    const modalRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    useEffect(() => {
        const handleScroll = () => {
            if (modalRef.current) {
                const position = modalRef.current.scrollTop;
                setScrollPosition(position);
                setShowScrollTop(position > 300);
            }
        };

        const modalElement = modalRef.current;
        if (modalElement) {
            modalElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, [show]);

    const scrollToTop = () => {
        if (modalRef.current) {
            modalRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    if (!show) return null;

    // Helper function to create section IDs
    const getSectionId = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    // Sections for the table of contents
    const sections = [
        'termsAndConditions.sections.contractPurpose.title',
        'termsAndConditions.sections.bookingAndPayment.title',
        'termsAndConditions.sections.cancellationsAndModifications.title',
        'termsAndConditions.sections.clientResponsibilities.title',
        'termsAndConditions.sections.refunds.title',
        'termsAndConditions.sections.specificConditions.title',
        'termsAndConditions.sections.advertisingAndPromotions.title',
        'termsAndConditions.sections.intellectualProperty.title',
        'termsAndConditions.sections.termsModification.title',
        'termsAndConditions.sections.applicableLaw.title',
        'termsAndConditions.sections.qualityControl.title',
        'termsAndConditions.sections.contact.title'
    ];

    return (
        <div className="terms-modal-overlay">
            <div className="terms-modal-container">
                <div className="terms-modal-content" ref={modalRef}>
                    <button
                        className="terms-close-button"
                        onClick={handleClose}
                        aria-label="Cerrar términos y condiciones"
                    >
                        <FaTimes />
                    </button>

                    <div className="terms-header">
                        <h2>{t('termsAndConditions.title')}</h2>
                        <p className="terms-last-update">{t('termsAndConditions.lastUpdate')}</p>
                    </div>

                    <p className="terms-intro">{t('termsAndConditions.intro')}</p>

                    {/* Section: Contract Purpose */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.contractPurpose.title'))}>
                        <h3>{t('termsAndConditions.sections.contractPurpose.title')}</h3>
                        <p>{t('termsAndConditions.sections.contractPurpose.content')}</p>
                        <ul className="terms-list">
                            {t('termsAndConditions.sections.contractPurpose.items', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="terms-note">{t('termsAndConditions.sections.contractPurpose.note')}</p>
                    </section>

                    {/* Section: Booking and Payment */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.bookingAndPayment.title'))}>
                        <h3>{t('termsAndConditions.sections.bookingAndPayment.title')}</h3>
                        <p>{t('termsAndConditions.sections.bookingAndPayment.content')}</p>
                        <ul className="terms-list">
                            {t('termsAndConditions.sections.bookingAndPayment.items', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h4>{t('termsAndConditions.sections.bookingAndPayment.paymentMethods.title')}</h4>
                        <p>{t('termsAndConditions.sections.bookingAndPayment.paymentMethods.content')}</p>
                        <ul className="terms-list">
                            {t('termsAndConditions.sections.bookingAndPayment.paymentMethods.items', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="terms-note">{t('termsAndConditions.sections.bookingAndPayment.paymentMethods.note')}</p>
                    </section>

                    {/* Section: Cancellations and Modifications */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.cancellationsAndModifications.title'))}>
                        <h3>{t('termsAndConditions.sections.cancellationsAndModifications.title')}</h3>

                        <div className="terms-subsection">
                            <h4>{t('termsAndConditions.sections.cancellationsAndModifications.clientSide.title')}</h4>
                            <ul className="terms-list">
                                {t('termsAndConditions.sections.cancellationsAndModifications.clientSide.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="terms-subsection">
                            <h4>{t('termsAndConditions.sections.cancellationsAndModifications.agencySide.title')}</h4>
                            <ul className="terms-list">
                                {t('termsAndConditions.sections.cancellationsAndModifications.agencySide.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Section: Client Responsibilities */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.clientResponsibilities.title'))}>
                        <h3>{t('termsAndConditions.sections.clientResponsibilities.title')}</h3>
                        <p>{t('termsAndConditions.sections.clientResponsibilities.content')}</p>
                        <ul className="terms-list">
                            {t('termsAndConditions.sections.clientResponsibilities.items', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="terms-note">{t('termsAndConditions.sections.clientResponsibilities.note')}</p>
                    </section>

                    {/* Section: Refunds */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.refunds.title'))}>
                        <h3>{t('termsAndConditions.sections.refunds.title')}</h3>
                        <p>{t('termsAndConditions.sections.refunds.content')}</p>
                        <p className="terms-note">{t('termsAndConditions.sections.refunds.note')}</p>
                    </section>

                    {/* Section: Specific Conditions */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.specificConditions.title'))}>
                        <h3>{t('termsAndConditions.sections.specificConditions.title')}</h3>

                        <div className="terms-subsection">
                            <h4>{t('termsAndConditions.sections.specificConditions.flights.title')}</h4>
                            <ul className="terms-list">
                                {t('termsAndConditions.sections.specificConditions.flights.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="terms-subsection">
                            <h4>{t('termsAndConditions.sections.specificConditions.transfers.title')}</h4>
                            <ul className="terms-list">
                                {t('termsAndConditions.sections.specificConditions.transfers.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="terms-subsection">
                            <h4>{t('termsAndConditions.sections.specificConditions.lodging.title')}</h4>
                            <ul className="terms-list">
                                {t('termsAndConditions.sections.specificConditions.lodging.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Section: Advertising and Promotions */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.advertisingAndPromotions.title'))}>
                        <h3>{t('termsAndConditions.sections.advertisingAndPromotions.title')}</h3>
                        <ul className="terms-list">
                            {t('termsAndConditions.sections.advertisingAndPromotions.items', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Section: Intellectual Property */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.intellectualProperty.title'))}>
                        <h3>{t('termsAndConditions.sections.intellectualProperty.title')}</h3>
                        <p>{t('termsAndConditions.sections.intellectualProperty.content')}</p>
                    </section>

                    {/* Section: Terms Modification */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.termsModification.title'))}>
                        <h3>{t('termsAndConditions.sections.termsModification.title')}</h3>
                        <p>{t('termsAndConditions.sections.termsModification.content')}</p>
                    </section>

                    {/* Section: Applicable Law */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.applicableLaw.title'))}>
                        <h3>{t('termsAndConditions.sections.applicableLaw.title')}</h3>
                        <p>{t('termsAndConditions.sections.applicableLaw.content')}</p>
                    </section>

                    {/* Section: Quality Control */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.qualityControl.title'))}>
                        <h3>{t('termsAndConditions.sections.qualityControl.title')}</h3>
                        <ul className="terms-list">
                            {t('termsAndConditions.sections.qualityControl.items', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Section: Contact */}
                    <section className="terms-section" id={getSectionId(t('termsAndConditions.sections.contact.title'))}>
                        <h3>{t('termsAndConditions.sections.contact.title')}</h3>
                        <p>{t('termsAndConditions.sections.contact.content')}</p>
                        <ul className="terms-list">
                            {t('termsAndConditions.sections.contact.items', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="terms-note">{t('termsAndConditions.sections.contact.note')}</p>
                    </section>

                    <div className="terms-footer">
                        <button className="terms-accept-button" onClick={handleClose}>
                            <FaCheckCircle className="terms-button-icon" />
                            <span>{t('termsAndConditions.iHaveRead')}</span>
                        </button>
                    </div>

                    {showScrollTop && (
                        <button
                            className="terms-scroll-top"
                            onClick={scrollToTop}
                            aria-label="Volver arriba"
                        >
                            <FaChevronUp />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

TermsModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default TermsModal;