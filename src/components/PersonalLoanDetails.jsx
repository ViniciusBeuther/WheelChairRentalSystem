import { Link, useParams } from "react-router-dom";
import database from "../../database/db";
import { Button, Typography } from "@material-tailwind/react";
import PaymentDetails from "../pages/PaymentDetails";


const PersonalLoanDetails = () =>{
    const { customerID } = useParams();
    const db = database;
    const customer = db.find(item => item.id === +customerID);

    return(
        null
    )
}

export default PersonalLoanDetails