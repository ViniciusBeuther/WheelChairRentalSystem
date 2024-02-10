import { Button, Typography, Input } from "@material-tailwind/react";
import database from "../../database/db"
import { Link, useParams } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";    
import { useState } from "react";

const PersonalDetails = () => {
    const [isDisabled, setIsDisabled] = useState(true)
    const { customerID } = useParams();
    const db = database;
    const customer = db.find(item => item.id === +customerID);
    console.log(customerID, customer)

    return(
            <div className="">
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
                        <Input value={customer.id} disabled={isDisabled} />
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
                        <Input value={customer.address.st} disabled={isDisabled} />
                    </span>

                    <span>
                        <label htmlFor="houseNumber">Número</label>
                        <Input value={customer.address.number} disabled={isDisabled} />
                    </span>

                    <span>
                        <label htmlFor="neighborhood">Bairro</label>
                        <Input value={customer.address.neighborhood} disabled={isDisabled} />
                    </span>
                    </section>

                    <section className="flex gap-5" id="customerInfo3rdRow">
                    <span>
                        <label htmlFor="zipcode">CEP</label>
                        <Input value={customer.address.zipcode} disabled={isDisabled} />
                    </span>

                    <span>
                        <label htmlFor="city">Cidade</label>
                        <Input value={customer.address.city} disabled={isDisabled} />
                    </span>
                    
                    <span>
                        <label htmlFor="state">Estado</label>
                        <Input value={customer.address.state} disabled={isDisabled} />
                    </span>
                    </section>

                    <section className="flex gap-5" id="customerInfo4thRow">
                    <span>
                        <label htmlFor="phoneNumber">Telefone</label>
                        <Input value={customer.phoneNumber} disabled={isDisabled} />
                    </span>

                    <span>
                        <label htmlFor="email">Email</label>
                        <Input value={customer.email} disabled={isDisabled} />
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
            <Typography variant="h4">
                Empréstimos
            </Typography>

            {customer.loan.length === 0 ?
                <Typography>
                    Não há emprestimo em aberto.
                </Typography>
            : 
                customer.loan.map((loan, index) => (
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
        </div>
    )
}

export default PersonalDetails