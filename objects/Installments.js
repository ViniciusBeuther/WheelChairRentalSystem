// Installments.js
function checkMaturity(installment) {
    const createdDate = new Date(installment.createdDate); // Convertendo a string da data de criação em um objeto Date
    const maturityDate = new Date(createdDate.getFullYear(), createdDate.getMonth() + installment.numberOfMonths, 10); // Sempre definindo o dia como 10
    return maturityDate;
}

class Installment {
    constructor(id, price, receipt, createdDate) {
        this.id = id;
        this.price = price;
        this.receipt = receipt;
        this.createdDate = createdDate;
        this.maturityDate = checkMaturity(this); 
    }
}

export default Installment;
