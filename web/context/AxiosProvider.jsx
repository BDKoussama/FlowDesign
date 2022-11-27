import { useMemo } from "react";
import { createContext } from "react";
import { axios as Axios } from 'axios';


export const AxiosContext = createContext(undefined)

export default function AxiosProvider({children}){
    
    const axios = useMemo(() => {
        const a = Axios.create({
            headers : {
                'Content-Type':'multipart/form-data',
                'Accept':'application/json'
            }
        })
    },[])

    return (
        <AxiosContext.Provider value = {axios}>
            {children}
        </AxiosContext.Provider>
    )
}