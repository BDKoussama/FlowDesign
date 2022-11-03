import React , {useState} from "react";

export const WidgetContext = React.createContext()

export default function WidgetContextProvider({children}){

    const [widget , setWidget] = useState('template')

    return (
        <WidgetContext.Provider value = {{widget , setWidget}}>
            {children}
        </WidgetContext.Provider>
    )
}