import { Button, Input } from "@material-tailwind/react"
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function checkInput(value,ev, setSearchValue){
    const regex = /[0-9]/
    if(value.match(regex)){
        return setSearchValue(ev.target.value)
    } else {
        alert("only numbers")
    }
}

const SearchCustomer = () =>{
    const [searchValue, setSearchValue] = useState("")
    
    return(
        <>
        <div className="flex">
            <Input 
                color="blue"
                label="CPF"
                value={searchValue}
                onChange={(ev) => (checkInput(ev.target.value, ev, setSearchValue))}
            />

            <Button size="md" color="blue" className="ml-1">
                <IoSearchSharp size={16} />
            </Button>
        </div>
        </>
    )
}

export default SearchCustomer