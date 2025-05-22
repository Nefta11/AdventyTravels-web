import {
    FaMoneyBill,
    FaRegCreditCard,
    FaUniversity,
    FaStore,
    FaMobile,
    FaHandshake
} from 'react-icons/fa';
import './PaymentMethods.css';

const PaymentMethods = () => {
    return (
        <section className="payment-methods-section">
            <div className="payment-methods-container">
                <div className="section-header">
                    <h2>Conoce nuestros métodos y formas de pago</h2>
                    <p>En Adventy Travels queremos que pagar tu viaje sea tan fácil como disfrutarlo. Por eso te ofrecemos distintas formas de pago, pensadas para tu comodidad y seguridad:</p>
                </div>

                <div className="payment-methods-grid">
                    <div className="payment-method-card">
                        <div className="method-icon-wrapper">
                            <FaMoneyBill className="method-icon" />
                        </div>
                        <div className="card-content">
                            <h3>Pago en efectivo en oficina</h3>
                            <p>Puedes visitarnos directamente en nuestra agencia y realizar tu pago en efectivo de manera segura. Nuestro equipo estará listo para atenderte y confirmar tu operación.</p>
                        </div>
                    </div>

                    <div className="payment-method-card highlight-card">
                        <div className="highlight-badge">Recomendado</div>
                        <div className="method-icon-wrapper highlight-icon">
                            <FaRegCreditCard className="method-icon" />
                        </div>
                        <div className="card-content">
                            <h3>Financiamiento con Adventy Pay</h3>
                            <p>Accede a planes personalizados de pago semanal, quincenal o mensual. No necesitas cubrir el total al momento de apartar tu viaje. Sin intereses, sin presión, con acompañamiento continuo.</p>
                        </div>
                    </div>

                    <div className="payment-method-card">
                        <div className="method-icon-wrapper">
                            <FaUniversity className="method-icon" />
                        </div>
                        <div className="card-content">
                            <h3>Depósito a cuenta</h3>
                            <p>Te proporcionamos nuestras cuentas bancarias para que realices depósitos desde cualquier sucursal bancaria o cajero autorizado.</p>
                        </div>
                    </div>

                    <div className="payment-method-card">
                        <div className="method-icon-wrapper">
                            <FaStore className="method-icon" />
                        </div>
                        <div className="card-content">
                            <h3>Pago en tiendas de conveniencia</h3>
                            <p>Si lo prefieres, puedes realizar tu pago en tiendas como OXXO, 7-Eleven, farmacias y otros establecimientos autorizados, usando una referencia que te enviaremos.</p>
                        </div>
                    </div>

                    <div className="payment-method-card">
                        <div className="method-icon-wrapper">
                            <FaMobile className="method-icon" />
                        </div>
                        <div className="card-content">
                            <h3>Transferencia bancaria</h3>
                            <p>Puedes realizar transferencias directas desde tu banca en línea o aplicación móvil. Rápido, seguro y sin necesidad de salir de casa.</p>
                        </div>
                    </div>

                    <div className="payment-method-card">
                        <div className="method-icon-wrapper">
                            <FaHandshake className="method-icon" />
                        </div>
                        <div className="card-content">
                            <h3>Pago en efectivo (vía terceros)</h3>
                            <p>También puedes hacer pagos en efectivo a través de intermediarios autorizados, quienes nos notifican y registran tu abono de inmediato.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethods;