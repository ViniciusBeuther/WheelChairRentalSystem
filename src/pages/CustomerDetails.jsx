import { Input, Typography } from "@material-tailwind/react"
import database from "../../database/db"
import { useParams } from "react-router-dom"


const CustomerDetails = () => {
  const { customerID } = useParams();
  const db = database;
  const customer = db.find(item => item.id === +customerID);
  console.log(customerID, customer)


  return(
    <>
      <div className="bg-gray-200">
        <Input value={customer.id} disabled={true} />
        <Input value={customer.name} disabled={true} />
        <Input value={customer.cpf} disabled={true} />
        <Input value={customer.address.st} disabled={true} />
        <Input value={customer.address.number} disabled={true} />
        <Input value={customer.address.neighborhood} disabled={true} />
        <Input value={customer.address.zipcode} disabled={true} />
        <Input value={customer.address.city} disabled={true} />
        <Input value={customer.address.state} disabled={true} />
        <Input value={customer.phoneNumber} disabled={true} />
      </div>
    </>
  )
}

export default CustomerDetails