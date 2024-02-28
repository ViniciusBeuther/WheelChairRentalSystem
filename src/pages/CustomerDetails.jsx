import PersonalDetails from "../components/PersonalDetails";
import PersonalLoanDetails from "../components/PersonalLoanDetails";


const CustomerDetails = () => {
  return (
    <div className="bg-gray-400 p-5 shadow-lg rounded-lg">
      <PersonalLoanDetails />
      <PersonalDetails />
    </div>
  );
};

export default CustomerDetails;

