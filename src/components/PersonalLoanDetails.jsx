import { useParams } from "react-router-dom";
import GetDataFromId from "../API/GetDataFromId";

const PersonalLoanDetails = () => {
    const { customerID } = useParams();
    
    const customer = GetDataFromId(customerID);


    return (
        <div>
            <h1>Personal Loan Detail</h1>
        </div>
    );
};

export default PersonalLoanDetails;

/*
    <div className="PersonalLoanDetail">
                <Typography variant="h4">
                    Empréstimos
                </Typography>
    
                {!customer.loans ?
                    <Typography>
                        Não há emprestimo em aberto.
                    </Typography>
                : 
                    customer.loans.map((loan, index) => (
                        <div key={index} className="flex w-full items-center justify-between mt-2 bg-gray-100 p-2 rounded-lg">
                            <Typography>
                                {loan.numberOfInstallment}x de ${loan.installments.price}
                            </Typography>
                            <Link to={`/paymentDetails/${customer.id}`}>
                                <Button color="blue" size="sm">
                                    Ver
                                </Button>
                            </Link>
                        </div>
                    ))
                }
                <div className="buttons flex mt-3 gap-2">
                    <Button color="black">
                        Novo Empréstimo
                    </Button>
    
                    <Button color="blue" onClick={(ev) => {
                        ev.preventDefault()
                        setIsDisabled(!isDisabled)
                    }}>
                        Editar dados
                    </Button>
                </div>
            </div>
*/
