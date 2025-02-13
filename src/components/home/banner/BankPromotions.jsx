import { useTranslation } from 'react-i18next';
import "./BankPromotions.css";

const BankPromotions = () => {
    const { t } = useTranslation();
    const banks = t('bankPromotions.banks', { returnObjects: true });

    return (
        <div className="bank-promotions">
            {banks.map((bank, index) => (
                <div key={index} className="bank-card">
                    <img src={`/src/assets/images/bank/${bank.name.toLowerCase()}.webp`} alt={bank.name} className="bank-logo" />
                    <p>
                        <strong>{bank.promotion}</strong>
                    </p>
                    <p className="card-type"><strong>{bank.cardType}</strong></p>
                </div>
            ))}
        </div>
    );
};

export default BankPromotions;
