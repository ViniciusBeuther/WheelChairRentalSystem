import { Button, Input, Typography } from "@material-tailwind/react"
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import data from "../../database/db"
import { Link } from "react-router-dom";


function checkInput(value, ev, setSearchValue){
    const regex = /[a-zA-Z]/
    
    if(!value.match(regex)){
        return setSearchValue(ev.target.value)
    } else {
        alert("only numbers")
    }
}

function search(cpf, setSearchResult, setHasResult){
    const database = data;
    const customer = database.find(item => item.cpf === cpf)
    
    if(customer != null || customer != undefined){
        setHasResult(true)
        return setSearchResult(customer)
    } else {
        return setHasResult(false)
    }
    
}

const SearchCustomer = () =>{
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState("")
    const [hasResult, setHasResult] = useState(false)
    
    return(
        <>
        <div className="flex">
            <Input 
                color="blue"
                label="CPF"
                value={searchValue}
                onChange={(ev) => (checkInput(ev.target.value, ev, setSearchValue))}
            />

            <Button size="md" color="blue" className="ml-1" onClick={() => search(searchValue, setSearchResult, setHasResult)}>
                <IoSearchSharp size={16} />
            </Button>
        </div>

        <div>
            {hasResult === true ? (
                <>
                <div>
                    <Typography>
                        {searchResult.cpf}
                    </Typography>
                    <Typography>
                        {searchResult.name}
                    </Typography>
                    <Button color="blue">
                        <Link to={`/customerDetails/${searchResult.id}`}>
                            Detalhes
                        </Link>
                    </Button>
                </div>
                </>
            ) : 
                    <div className="searchResults mt-2">
                        <Typography>
                            Sem resultados
                        </Typography>
                    </div>
                }
        </div>
        </>
    )
}

export default SearchCustomer