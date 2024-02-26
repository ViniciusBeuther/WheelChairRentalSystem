import { Link, useParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import PaymentDetails from "../pages/PaymentDetails";


const PersonalLoanDetails = ({client}) =>{
    const { customerID } = useParams();
    const customer = client;

    return(
        null
    )
}

export default PersonalLoanDetails