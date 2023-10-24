import React, { createContext, useEffect, useMemo, useState } from 'react'

export const GenericContext = createContext({})

// eslint-disable-next-line react/prop-types
export function GenericProvider ({ children }) {
    //   const [cartProducts, setCartProducts] = useState([] as Product[]);

    const values = useMemo(() => ({
        // cartProducts,
    }), [
        // cartProducts,
        // isDetailOpen,
    ])
    return (
        <GenericContext.Provider value={values}>
            {children}
        </GenericContext.Provider>
    )
}
