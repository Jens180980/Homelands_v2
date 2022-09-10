import { createContext } from "react";
import { useState } from 'react';

const ModalContent = createContext()

const ModalWrapper = ({children}) => {

const [ModalData, setModalData] = useState(false);

return (
    <ModalContent.Provider value={{ModalData, setModalData}}>
        {children}
    </ModalContent.Provider>
)}

export { ModalContent, ModalWrapper }