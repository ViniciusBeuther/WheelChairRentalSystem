import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import CustomerDetails from "./CustomerDetails";
import PaymentPage from "./PaymentPage";
import NewCustomer from "./NewCustomer";


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
        path: "/paymentDetails/:customerID",
        element: <CustomerDetails />
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