import { createContext } from "react";
import axios from 'axios'
import { useState, useEffect } from 'react';

const listContent = createContext()

const ListWrapper = ({children}) => {

const [listData, setListData] = useState([]);

useEffect(() => {
    const getData = async () => {
        const result = await axios.get(`https://api.mediehuset.net/homelands/homes`)

        setListData(result.data.items)
    }
    getData();
}, [children])


return (
    <listContent.Provider value={{listData}}>
        {children}
    </listContent.Provider>
)}

export { listContent, ListWrapper }