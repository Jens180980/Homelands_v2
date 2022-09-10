import { createContext } from "react";
import axios from 'axios'
import { useState, useEffect } from 'react';

const EmployeeContent = createContext()

const EmployeeWrapper = ({children}) => {

const [EmployeeData, setEmployeeData] = useState([]);

useEffect(() => {
    const getData = async () => {
        const result = await axios.get(`https://api.mediehuset.net/homelands/staff`)

        setEmployeeData(result.data.items)
    }
    getData();
}, [children])


return (
    <EmployeeContent.Provider value={{EmployeeData}}>
        {children}
    </EmployeeContent.Provider>
)}

export { EmployeeContent, EmployeeWrapper }