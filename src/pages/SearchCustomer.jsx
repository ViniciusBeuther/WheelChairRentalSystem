import { Button, Input, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function useData() {
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


function checkInput(value, ev, setSearchValue) {
    const regex = /[a-zA-Z]/;

    if (!value.match(regex)) {
        return setSearchValue(ev.target.value);
    } else {
        alert("only numbers");
    }
}

const SearchCustomer = () => {
    const allCustomers = useData();
    console.log(allCustomers)
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState({});
    const [hasResult, setHasResult] = useState(false);

    function findClient(){
        allCustomers.forEach((customer) => {
            if(customer.cpf == searchValue){
                //console.log(customer);
                setHasResult(true);
                setSearchResult(customer);
                return customer;
            }
        })
    }

    return (
        <>
            <div className="flex">
                <Input
                    color="blue"
                    label="CPF"
                    value={searchValue}
                    onChange={(ev) =>
                        checkInput(ev.target.value, ev, setSearchValue)
                    }
                />

                <Button
                    size="md"
                    color="blue"
                    className="ml-1"
                    onClick={() => findClient()}
                >
                    <IoSearchSharp size={16} />
                </Button>
            </div>

            <div>
                {hasResult === true ? (
                    <>
                        <div className="flex items-center justify-between mt-5 pl-1">
                            <Typography>{searchResult.cpf}</Typography>
                            <Typography>{searchResult.name}</Typography>
                            <Button color="blue">
                                <Link
                                    to={`/customerDetails/${searchResult.id}`}
                                >
                                    Detalhes
                                </Link>
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="searchResults mt-2">
                        <Typography>Sem resultados</Typography>
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchCustomer;
