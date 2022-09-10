import { createContext } from "react";
import axios from 'axios'
import { useState, useEffect } from 'react';

const CommentContent = createContext()

const CommentWrapper = ({children}) => {

const [commentData, setCommentData] = useState([]);

useEffect(() => {
    const getData = async () => {
        const result = await axios.get(`https://api.mediehuset.net/homelands/reviews`)

        setCommentData(result.data.items)
    }
    getData();
}, [children])


return (
    <CommentContent.Provider value={{commentData}}>
        {children}
    </CommentContent.Provider>
)}

export { CommentContent, CommentWrapper }