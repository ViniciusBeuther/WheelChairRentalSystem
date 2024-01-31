import Loan from "./Loan"

function checkMaturity (){
    return(this.createdDate)
}

class Installment extends Loan{
    constructor(id, price, receipt, createdDate){
        this.id = id, 
        this.price = price,
        this.receipt = receipt,
        this.createdDate = createdDate
        this.maturityDate = checkMaturity()
    }
}

export default Installment