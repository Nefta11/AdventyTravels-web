import "./BankPromotions.css";

const banks = [
    {
        id: 1,
        name: "BBVA",
        logo: "/src/assets/images/bank/bbva.webp", // Ruta de la imagen
        promotion: "Hasta 13 mensualidades sin intereses con",
        cardType: "Tarjetas de Crédito BBVA",
    },
    {
        id: 2,
        name: "Citibanamex",
        logo: "/src/assets/images/bank/Citibanamex.webp",
        promotion: "Hasta 6 mensualidades sin intereses con",
        cardType: "Tarjetas de Crédito Citibanamex",
    },
    {
        id: 3,
        name: "HSBC",
        logo: "/src/assets/images/bank/hsbc.webp",
        promotion: "Hasta 6 mensualidades sin intereses con",
        cardType: "Tarjetas de Crédito HSBC",
    },
    {
        id: 4,
        name: "AMEX",
        logo: "/src/assets/images/bank/ammex.webp",
        promotion: "Hasta 6 mensualidades sin intereses con",
        cardType: "Tarjetas de Crédito AMEX",
    },
];

const BankPromotions = () => {
    return (
        <div className="bank-promotions">
            {banks.map((bank) => (
                <div key={bank.id} className="bank-card">
                    <img src={bank.logo} alt={bank.name} className="bank-logo" />
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
