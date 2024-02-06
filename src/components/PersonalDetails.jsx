import { Button, Typography, Input } from "@material-tailwind/react";
import database from "../../database/db"
import { Link, useParams } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";    

const PersonalDetails = () => {
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
                        <Input value={customer.id} disabled={true} />
                    </span>

                    <span className="">
                        <label htmlFor="Name" className="text-center">Nome</label>
                        <Input value={customer.name} disabled={true} />
                    </span>

                    <span className="">
                        <label htmlFor="cpf">CPF</label>
                        <Input value={customer.cpf} disabled={true} />
                    </span>
                    </section>

                    <section className="flex gap-5" id="customerInfo2ndRow">
                    <span>
                        <label htmlFor="street">Rua</label>
                        <Input value={customer.address.st} disabled={true} />
                    </span>

                    <span>
                        <label htmlFor="houseNumber">Número</label>
                        <Input value={customer.address.number} disabled={true} />
                    </span>

                    <span>
                        <label htmlFor="neighborhood">Bairro</label>
                        <Input value={customer.address.neighborhood} disabled={true} />
                    </span>
                    </section>

                    <section className="flex gap-5" id="customerInfo3rdRow">
                    <span>
                        <label htmlFor="zipcode">CEP</label>
                        <Input value={customer.address.zipcode} disabled={true} />
                    </span>

                    <span>
                        <label htmlFor="city">Cidade</label>
                        <Input value={customer.address.city} disabled={true} />
                    </span>
                    
                    <span>
                        <label htmlFor="state">Estado</label>
                        <Input value={customer.address.state} disabled={true} />
                    </span>
                    </section>

                    <section className="flex gap-5" id="customerInfo4thRow">
                    <span>
                        <label htmlFor="phoneNumber">Telefone</label>
                        <Input value={customer.phoneNumber} disabled={true} />
                    </span>

                    <span>
                        <label htmlFor="email">Email</label>
                        <Input value={customer.email} disabled={true} />
                    </span>
                    <span className="flex items-center justify-center w-full">
                        <Button color="green" className="mt-6">Salvar</Button>
                    </span>
                    </section>
                    <hr className="mt-3" />
        </div>
    )
}

export default PersonalDetails