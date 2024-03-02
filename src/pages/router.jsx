import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import CustomerDetails from "./CustomerDetails";
import PaymentPage from "./PaymentPage";
import NewCustomer from "./NewCustomer";
import PaymentDetails from "./PaymentDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/customerDetails/:customerID",
        element: <CustomerDetails />
    },
    {
        path: "/paymentDetails/:customerID/:loanID",
        element: <PaymentDetails />
    },
    {
        path: "/paymentPage",
        element: <PaymentPage  />
    },
    {
        path: "/newCustomer",
        element: <NewCustomer />
    }
])

export default router