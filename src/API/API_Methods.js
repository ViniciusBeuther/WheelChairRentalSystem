import { useEffect, useState } from "react";

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

export default useData;