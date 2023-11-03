import React, { createContext, useState, useEffect } from 'react'
import { GetAllItemApi, GetAllGenresApi } from '../apiConnection'

export const GeneralContext = createContext({})

// eslint-disable-next-line react/prop-types
function randomScore () {
    const numeroAleatorio = Math.random()
    const numeroEnRango = (numeroAleatorio * 9 + 1).toFixed(1)
    return numeroEnRango
}
export function GeneralProvider ({ children }) {
    const token = localStorage.getItem('token')
    const [getAllItemsResponse, getAllItemsStatus, getAllItemsFetch] = GetAllItemApi()
    const [getAllGenresResponse, getAllGenresStatus, getAllGenresFetch] = GetAllGenresApi()

    const [animeApiInfo, setAnimeApiInfo] = useState([])
    const [genresApi, setGenresApi] = useState([])
    const [animeApiData, setAnimeApiData] = useState([])
    const [isUserLogged, setIsUserLogged] = useState(false)

    // const baseUrl = 'https://myanime.onrender.com/api/v1'
    const baseUrl = 'http://localhost:8080/api/v1'

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        getAllItemsFetch('', {}, config)
        getAllGenresFetch('', {}, config)
    }, [])
    useEffect(() => {
        if (getAllItemsStatus.success) {
            setAnimeApiInfo(getAllItemsResponse)
        }
        if (getAllGenresStatus.success) {
            setGenresApi(getAllGenresResponse)
        }
    }, [getAllItemsStatus, getAllGenresStatus])

    useEffect(() => {
        if (animeApiInfo && genresApi) {
            const animeData = animeApiInfo.map((anime) => {
                return {
                    ...anime,
                    score: randomScore(),
                    type: 'TV',
                    studios: [
                        {
                            name: 'Shaft',
                            id: 1
                        }
                    ],
                    producers: [
                        {
                            name: 'Aniplex',
                            id: 1
                        },
                        {
                            name: 'Kodansha',
                            id: 2
                        }
                    ],
                    genres: genresApi
                }
            })

            setAnimeApiData(animeData)
            // console.log('general context Anime cards: ', dataRestructured)
        }
    }, [animeApiInfo, genresApi])
    const values = {
        baseUrl,
        isUserLogged,
        setIsUserLogged,
        animeApiData,
        setAnimeApiData
    }
    return (
        <GeneralContext.Provider value={values}>
            {children}
        </GeneralContext.Provider>
    )
}
