import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
const [contatinho, setContatinho] = useState('')
const [contatinhos, setContatinhos] = useState([])


    return(
        <GlobalContext.Provider value={{
                 contatinho,
                 setContatinho,
                 contatinhos,
                 setContatinhos,
            }}>

            {children}
        </GlobalContext.Provider>
    )
}
