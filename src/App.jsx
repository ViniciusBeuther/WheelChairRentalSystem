import { RouterProvider } from "react-router-dom"
import router from "./pages/router"

const App = () => {
  return(
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App