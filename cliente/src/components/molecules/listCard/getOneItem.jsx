import React, { useEffect, useState } from 'react'
import { GetOneItemApi } from '../../../apiConnection'

const GetOneItemInfo = (idAnime) => {
    const [getItemResponseApi, getItemStatusApi, getItemFetchApi] = GetOneItemApi(idAnime)
    const [animeApi, setAnimeApi] = useState(null)
    const [animeLocal, setAnimeLocal] = useState(null)
    const [allAnimeData, setAllAnimeData] = useState(null)

    useEffect(() => {
        getItemFetchApi()
    }, [])
    useEffect(() => {
        if (getItemStatusApi.success) {
            setAnimeApi(getItemResponseApi)
            const localData = localStorage.getItem(`anime${idAnime}`)
            setAnimeLocal(JSON.parse(localData))
        }
    }, [getItemStatusApi])
    useEffect(() => {
        /* const recomendations = animeData.filter(otherAnime => otherAnime.id !== anime.id).splice(0, 6) */
        if (animeApi && animeLocal) {
            console.log(animeLocal)
            const genreArray = animeLocal.genres.split('-').join(', ')
            console.log(genreArray)
            const estructuredData = {
                title: animeApi.title,
                score: animeLocal.score,
                image: animeApi.image,
                banner_img: animeLocal.banner_img_link,
                id: animeApi.id,
                description: animeApi.description,
                info: {
                    type: animeLocal.type,
                    episodes: animeApi.episode,
                    genres: genreArray,
                    studios: animeLocal.studio,
                    producers: animeLocal.producers,
                    status: animeApi.status,
                    aired: {
                        from: animeApi.releaseDate,
                        to: animeApi.lastepisode
                    }
                },
                reviews: [],
                recomendations: []
            }
            console.log(estructuredData)
            setAllAnimeData(estructuredData)
        }
    }, [animeApi, animeLocal])
    return [allAnimeData]
}

export default GetOneItemInfo
