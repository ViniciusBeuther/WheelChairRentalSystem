import { Button, Input, Typography } from "@material-tailwind/react"
import PersonalDetails from "../components/PersonalDetails"
import PersonalLoanDetails from "../components/PersonalLoanDetails"

const CustomerDetails = () => {


  return(
    <div className="bg-gray-400 p-5 shadow-lg">
      <PersonalDetails />
      <PersonalLoanDetails />
    </div>
  )
}

export default CustomerDetails