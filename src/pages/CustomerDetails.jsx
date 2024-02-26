import { Button, Input, Typography } from "@material-tailwind/react";
import PersonalDetails from "../components/PersonalDetails";
import PersonalLoanDetails from "../components/PersonalLoanDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


async function useData() {
  const [data, setData] = useState(null);

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch("http://localhost:3030/clients");
              const jsonData = await response.json();
              console.log("Dados obtidos com sucesso: ");
              //console.log(jsonData);

              setData(jsonData);
          } catch (error) {
              console.error("Erro ao obter dados da API: ", error);
          }
      }

      fetchData();
  }, []);

  return data;
}

const CustomerDetails = () => {
  const [client, setClient] = useState(null);
  const { customerID } = useParams();

  useEffect(() => {
    async function fetchDataFromCpf() {
      const allClients = await useData();
      console.log(allClients[0]);
      const selectedClient = allClients.find((customer) => customer.id == customerID);
      setClient(selectedClient);
    }

    fetchDataFromCpf();
  }, [customerID]); 

  return (
    <div className="bg-gray-400 p-5 shadow-lg rounded-lg">
      <PersonalDetails client={client} />
      <PersonalLoanDetails client={client} />
    </div>
  );
};

export default CustomerDetails;
