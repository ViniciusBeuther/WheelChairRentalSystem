import { useState } from "react"
import Header from "./Header"
import NewCustomer from "./NewCustomer"
import SearchCustomer from "./SearchCustomer"
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react"
import getData from "../API/API_Methods";

const Home = () => {
    getData();
    const [activeTab, setActiveTab] = useState("html")
    const data = [
        {
            "label": "Consultar ",
            "value": "Consultar ",
            "desc": <SearchCustomer />
        },
        {
            "label": "Adicionar Cliente",
            "value": "Adicionar Cliente",
            "desc": <NewCustomer />
        }
    ]


  return(
    <>
        <Header />
        <Tabs value={activeTab} className="bg-gray-200 w-[50rem]">
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}>

            {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-black" : ""}
                    >
                        {label}
                    </Tab>
                    ))}
            </TabsHeader>

            <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                        {desc}
                        </TabPanel>
                    ))}
            </TabsBody>
        </Tabs>
    </>
  )
}

export default Home