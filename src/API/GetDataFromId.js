import { useEffect, useState } from "react";
import useData from "./API_Methods";

const GetDataFromId = async (id) => {    
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3030/clients/${id}`);
                const jsonData = await response.json();
                console.log("Dados obtidos com sucesso: ");
                // console.log(jsonData);
                
                setData(jsonData);
                // console.log(data);
            } catch (error) {
                console.error("Erro ao obter dados da API: ", error);
            }
        }

        fetchData();
    }, []);
    return data;

};

export default GetDataFromId;
