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
            <h2 className='title'>{t('bankPromotions.title')}</h2>
            {banks.map((bank, index) => (
                <div key={index} className="bank-card">
                    <img src={getBankImageUrl(bank.name)} alt={bank.name} className="bank-logo" />
                    <hr className="divider" />
                    <p>
                        <strong>{bank.promotion}</strong>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BankPromotions;
