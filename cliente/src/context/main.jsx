import React, { createContext, useState } from 'react'
export const GeneralContext = createContext({})

// eslint-disable-next-line react/prop-types
export function GeneralProvider ({ children }) {
    const [isUserLogged, setIsUserLogged] = useState(false)
    // const baseUrl = 'https://myanime.onrender.com/api/v1'
    const baseUrl = 'http://localhost:8080/api/v1'

    const values = {
        baseUrl,
        isUserLogged,
        setIsUserLogged
    }
    return (
        <GeneralContext.Provider value={values}>
            {children}
        </GeneralContext.Provider>
    )
}
