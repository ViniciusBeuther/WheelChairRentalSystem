import { Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";

// Function to format the maturity date
function formatDate(date) {
  const formattedDateToBR = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");

  return formattedDateToBR;
}

const PaymentDetails = () => {
  const { customerID } = useParams();
  const { loanID } = useParams();
  const [customer, setCustomer] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loanIsLoaded, setLoanIsLoaded] = useState(false);
  const [loans, setLoans] = useState();
  let numberOfInstallments = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3030/clients/${customerID}`
        );
        const jsonResponse = await response.json();
        setCustomer(jsonResponse);
        setIsLoaded(true);
        //console.log("Success!");
        //console.log(jsonResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [customerID]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch(
          `http://localhost:3030/clients/${customerID}/loans/${loanID}`
        );
        const jsonResponse = await response.json();
        setLoans(jsonResponse);
        setLoanIsLoaded(true);
        //console.log("Success!");
        console.log(jsonResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLoans();
  }, [loanID]);

  return !isLoaded && !loanIsLoaded ? (
    <Loading />
  ) : (
    <>
      <div className="bg-gray-200 p-5 rounded-lg shadow-lg">
        <BackButton path={`customerDetails/${customerID}`} />
        <Typography variant="h4">{customer.name}</Typography>
        <br />
        <Typography variant="h5">Dados do empréstimo:</Typography>
        <div className="details">
          <Typography>
            {loans && `Valor total a pagar: R$${loans.total_to_pay.toFixed(2)}`}
          </Typography>
          <Typography>
            {loans && `Numero total de parcelas: ${loans.installments_number}`}
          </Typography>
          <Typography>
            {loans && `Data de devolução: ${formatDate(loans.return_date)}`}
          </Typography>
        </div>
        <hr />

        {/* Parcelas */}
        <Typography variant="h4" className="my-2">
          Parcelas
        </Typography>
        {loans &&
          loans.installments.map((element, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-400 p-2 rounded-lg gap-10 mb-2"
            >
              <p>{numberOfInstallments + 1}x</p>
              <p>R$ {element.price.toFixed(2)}</p>
              {element.is_paid ? (
                <p className="text-green-600">Pago</p>
              ) : (
                <p className="text-red-600">Pendente</p>
              )}
              {console.log(element)}
              {element.is_paid ? (
                
                <Button color="green" size="sm">
                  Recibo
                </Button> 
              ) : (
                <Link to={"./installments"}>
                  <Button color="red" size="sm">
                    Pagar
                  </Button>
                </Link>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default PaymentDetails;

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
