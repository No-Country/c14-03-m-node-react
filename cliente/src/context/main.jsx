import React, { createContext, useMemo, useState } from 'react'
import useFetch from '../Hooks/usefetch'

export const GeneralContext = createContext({})

// eslint-disable-next-line react/prop-types
export function GeneralProvider ({ children }) {
    //   const [cartProducts, setCartProducts] = useState([] as Product[]);
    const baseUrl = 'https://myanime.onrender.com'

    const [users,
        getAllUser,
        createNewUser,
        deleteUserById,
        updateUserById] = useFetch(baseUrl)

    const [animes,
        getAllAnimes,
        createNewAnime,
        deleteAnimeById,
        updateAnimeById] = useFetch(baseUrl)

    const values = useMemo(() => ({
        // cartProducts,
        users,
        getAllUser,
        createNewUser,
        deleteUserById,
        updateUserById,
        animes,
        getAllAnimes,
        createNewAnime,
        deleteAnimeById,
        updateAnimeById
    }), [
        users,
        animes
        // cartProducts,
        // isDetailOpen,
    ])
    return (
        <GeneralContext.Provider value={values}>
            {children}
        </GeneralContext.Provider>
    )
}
