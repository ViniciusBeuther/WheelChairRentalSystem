import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetDataFromId from "../API/GetDataFromId";

const PersonalLoanDetails = () => {
    const { id } = useParams();
    const data = [];   


    return (
        <div>
            <h1>PersonalLoanDetail</h1>
        </div>
    );
};

export default PersonalLoanDetails;
