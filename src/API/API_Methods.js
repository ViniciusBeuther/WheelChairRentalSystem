import { useEffect, useState } from "react";

export default async function getData(){
    const [data, setData] = useState(null);
    
    useEffect(( ) => {
        async function fetchData(){
            try{
                const response = await fetch("http://localhost:3030/clients");
                const jsonData = await response.json();
                console.log("Dados obtidos com sucesso: ");
                console.log(jsonData);

                setData(jsonData);
            } catch(error){
                return(console.log("Erro ao obter dados da API: ", error));
            }
        }

        fetchData();

    }, []);
    
    return data;
}

