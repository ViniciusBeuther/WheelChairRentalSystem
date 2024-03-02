import { Button, Typography, Input } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";    
import { useEffect, useState } from "react";

// Function to format the maturity date
function formatDate(date){
    const formattedDateToBR = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");

    return formattedDateToBR;
}

function PersonalDetails(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [customer, setCustomer] = useState({});
    const { customerID } = useParams();
    const [isDisabled, setIsDisabled] = useState(true);


// Fetching data from database
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3030/clients/${customerID}`);
                const jsonResponse = await response.json();
                setCustomer(jsonResponse);
                setIsLoaded(true);
                console.log("Success!");
            } catch(err) {
                console.log(err);
            }
        };

        fetchData();
    }, [customerID]);

    return (
        isLoaded ? (
            <>
            <div className="">
                {console.log(customer)}
                            <Link to={'/home'}>
                                <Button color="blue" size="sm" className="rounded-full mb-2">
                                    <IoMdArrowRoundBack size={16} />
                                </Button>
                            </Link>
                                <Typography variant="h4" className="mb-2">
                                Dados do cliente
                                </Typography>
                                <section className="flex gap-5" id="customerInfo1stRow">
                                <span className="">
                                    <label htmlFor="id" className="mr-2">ID</label>
                                    <Input value={customer.id} disabled={true} />
                                </span>

                                <span className="">
                                    <label htmlFor="Name" className="text-center">Nome</label>
                                    <Input value={customer.name} disabled={isDisabled} />
                                </span>

                                <span className="">
                                    <label htmlFor="cpf">CPF</label>
                                    <Input value={customer.cpf} disabled={isDisabled} />
                                </span>
                                </section>

                                <section className="flex gap-5" id="customerInfo2ndRow">
                                <span>
                                    <label htmlFor="street">Rua</label>
                                    <Input value={customer.street} disabled={isDisabled} />
                                </span>

                                <span>
                                    <label htmlFor="houseNumber">Número</label>
                                    <Input value={customer.house_number} disabled={isDisabled} />
                                </span>

                                <span>
                                    <label htmlFor="neighborhood">Bairro</label>
                                    <Input value={customer.neighborhood} disabled={isDisabled} />
                                </span>
                                </section>

                                <section className="flex gap-5" id="customerInfo3rdRow">
                                <span>
                                    <label htmlFor="zipcode">CEP</label>
                                    <Input value={customer.zipcode} disabled={isDisabled} />
                                </span>

                                <span>
                                    <label htmlFor="city">Cidade</label>
                                    <Input value={customer.city} disabled={isDisabled} />
                                </span>
                                
                                <span>
                                    <label htmlFor="state">Estado</label>
                                    <Input value={customer.state} disabled={isDisabled} />
                                </span>
                                </section>

                                <section className="flex gap-5" id="customerInfo4thRow">
                                <span>
                                    <label htmlFor="phoneNumber">Telefone</label>
                                    <Input value={customer.phone_number} disabled={isDisabled} />
                                </span>

                                <span>
                                    <label htmlFor="email">Email</label>
                                    <Input value={customer.email_address} disabled={isDisabled} />
                                </span>
                                {isDisabled 
                                    ? null 
                                    : 
                                        <span className="flex items-center justify-center w-full">
                                            <Button color="green" className="mt-6" onClick={(ev) => {
                                                ev.preventDefault()
                                                setIsDisabled(!isDisabled)
                                            }}>Salvar</Button>
                                        </span>
                                }
                                </section>
                                <hr className="mt-3" />
                                <div className="PersonalLoanDetail">
                    </div>
                    
                    <Typography variant="h4" className="my-3">
                        Empréstimos
                    </Typography>

                    {customer.loans.length === 0 ? 
                            <Typography>Não há empréstimos!</Typography> 
                        : 
                            (
                                customer.loans.map((loan, key) => (
                                    <div 
                                    className="
                                        flex
                                        bg-white
                                        py-2
                                        px-2
                                        rounded-lg
                                        mb-3
                                        justify-between
                                        items-center
                                    " 
                                    key={key}>
                                        <Typography>
                                            {loan.rental_item_description}
                                        </Typography>

                                        <Link to={`/paymentDetails/${customerID}/${loan.id}`}>
                                            <Button color="blue" size="md">
                                                Ver
                                            </Button>
                                        </Link>
                                    </div>
                                ))
                            )
                    }

                    <div className="buttons flex mt-3 gap-2">
                        <Button color="black">
                            Novo Empréstimo
                        </Button>

                        <Button color="blue" onClick={(ev) => {
                            ev.preventDefault()
                            setIsDisabled(!isDisabled)
                        }}>
                            Editar dados
                        </Button>
                    </div>
        </div>

            </>
        ) : (
            <>
                <p>Loading...</p>
            </>
        )
    )
}



export default PersonalDetails



/*


            {!customer.loans ?
                <Typography>
                    Não há emprestimo em aberto.
                </Typography>
            : 
                customer.loans.map((loan, index) => (
                    <div key={index} className="flex w-full items-center justify-between mt-2 bg-gray-100 p-2 rounded-lg">
                        <Typography>
                            {loan.numberOfInstallment}x de ${loan.installments.price}
                        </Typography>
                        <Link to={`/paymentDetails/${customer.id}`}>
                            <Button color="blue" size="sm">
                                Ver
                            </Button>
                        </Link>
                    </div>
                ))
            }

        
*/