import { Link, useParams } from "react-router-dom";
import database from "../../database/db";
import { Button, Typography } from "@material-tailwind/react";
import PaymentDetails from "../pages/PaymentDetails";

const PersonalLoanDetails = () =>{
    const { customerID } = useParams();
    const db = database;
    const customer = db.find(item => item.id === +customerID);

    return(
        <div className="PersonalLoanDetail">
            <Typography variant="h4">
                Empréstimos
            </Typography>

            {customer.loan.length === 0 ?
                <Typography>
                    Não há emprestimo em aberto.
                </Typography>
            : 
                customer.loan.map((loan, index) => (
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
        </div>
    )
}

export default PersonalLoanDetails