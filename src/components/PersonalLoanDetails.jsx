import { useParams } from "react-router-dom";
import database from "../../database/db";
import { Typography } from "@material-tailwind/react";

const PersonalLoanDetails = () =>{
    const { customerID } = useParams();
    const db = database;
    const customer = db.find(item => item.id === +customerID);

    return(
        <div className="PersonalLoanDetail">
            <Typography variant="h4" className="mt-2">
                Empréstimos
            </Typography>
            <Typography>
                Total a ser pago: R$ {customer.loan.totalPrice}
            </Typography>
            <Typography>
                Numero de parcelas restantes: {customer.loan.numberOfMonths}
            </Typography>
        </div>
    )
}

export default PersonalLoanDetails