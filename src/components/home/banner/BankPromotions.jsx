// BankPromotions.jsx
import { useTranslation } from 'react-i18next';
import "./BankPromotions.css";

const BankPromotions = () => {
    const { t } = useTranslation();
    const banks = t('bankPromotions.banks', { returnObjects: true });

    const getBankImageUrl = (bankName) => {
        const urls = {
            'AMEX': 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/bank/AMEX.webp',
            'CITIBANAMEX': 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/bank/Citibanamex.webp',
            'BBVA': 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/bank/bbva.webp',
            'HSBC': 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/bank/hsbc.webp',
            'BANCOAZTECA': 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/bank/BANCOAZTECA.webp',
            'SANTANDER': 'https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/src/assets/images/bank/SANTANDER.webp'
        };
        return urls[bankName.toUpperCase()] || '';
    };

    return (
        <div className="bank-promotions">
            <h2 className='title-bank'>{t('bankPromotions.title')}</h2>
            <div className="bank-cards-container">
                {banks.map((bank, index) => (
                    <div key={index} className="bank-card" tabIndex={0}>
                        <div className="bank-logo-container">
                            <img src={getBankImageUrl(bank.name)} alt={bank.name} className="bank-logo" />
                        </div>
                        <div className="divider"></div>
                        <div className="promotion-text">
                            <p>
                                <strong>{bank.promotion}</strong>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BankPromotions;