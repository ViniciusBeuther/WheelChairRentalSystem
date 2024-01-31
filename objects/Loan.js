import Installment from "./Installments"

class Loan{
    constructor(totalPrice, numberOfInstallment, typeOfChair, numberOfMonths){
        this.totalPrice = totalPrice, 
        this.numberOfInstallment = numberOfInstallment,
        this.installments = new Installment(this.id, this.totalPrice, "recibo", new Date()),
        this.typeOfChair = typeOfChair, 
        this.numberOfMonths = numberOfMonths,
        this.returnDate = calculateReturnDate()
    }

    calculateReturnDate(){
        return null
    }
}

export default Loan