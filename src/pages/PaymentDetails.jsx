import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const PaymentDetails = () => {
  const { customerID } = useParams();
  const { loanID } = useParams();
  const [customer, setCustomer] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loanIsLoaded, setLoanIsLoaded] = useState(false);
  const [loans, setLoans] = useState();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3030/clients/${customerID}`);
            const jsonResponse = await response.json();
            setCustomer(jsonResponse);
            setIsLoaded(true);
            //console.log("Success!");
            //console.log(jsonResponse);
        } catch(err) {
            console.log(err);
        }
    };

    fetchData();
}, [customerID]);
  
useEffect(() => {
  const fetchLoans = async () => {
      try {
          const response = await fetch(`http://localhost:3030/clients/${customerID}/loans`);
          const jsonResponse = await response.json();
          setLoans(jsonResponse);
          setLoanIsLoaded(true);
          //console.log("Success!");
          console.log(jsonResponse);
      } catch(err) {
          console.log(err);
      }
  };

  fetchLoans();
}, [customerID]);



  return(

    !isLoaded && !loanIsLoaded? <Typography>Loading...</Typography> :(

    <>
      <Typography>
        {customer.name}
      </Typography>
      <div>
        {console.log(loans)}
      </div>
    </>
    ))
}

export default PaymentDetails

/*
"id": 2,
        "total_to_pay": 1200,
        "installments_number": 12,
        "rental_item_description": "Wheel Chair",
        "return_date": "2025-02-19",
        "createdAt": "2024-02-20T00:10:32.555Z",
        "updatedAt": "2024-02-20T00:10:32.555Z",
        "client_id": 1,
        "installments": [
            {
                "id": 1,
                "price": 120,
                "receipt": {
                    "type": "Buffer",
                    "data": []
                },
                "maturity_date": "2024-02-20T00:00:00.000Z",
                "is_paid": false,
                "paid_at": null,
                "createdAt": "2024-02-21T15:38:58.649Z",
                "updatedAt": "2024-02-21T15:38:58.649Z",
                "loan_id": 2
            }
        ]
    },
    { */