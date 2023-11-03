import React, { useState, useEffect } from 'react'
import StarRating from '../../atoms/starRating'
import MangaCover from '../../atoms/mangaCover'

import { GetOneItemApi } from '../../../apiConnection'

export default function IndividualListCard ({ id }) {
    console.log(id)
    const [getItemResponseApi, getItemStatusApi, getItemFetchApi] = GetOneItemApi(id)
    const [animeApi, setAnimeApi] = useState(null)
    const [animeLocal, setAnimeLocal] = useState(null)
    const [allAnimeData, setAllAnimeData] = useState(null)

    useEffect(() => {
        getItemFetchApi()
    }, [])
    useEffect(() => {
        if (getItemStatusApi.success) {
            setAnimeApi(getItemResponseApi)
            const localData = localStorage.getItem(`anime${id}`)
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
    useEffect(() => {
        console.log('allanimeData: ', allAnimeData)
    }, [allAnimeData])
    return (
        <>
            <div className='anime-card card'>
                {allAnimeData
                    ? (
                        <a className='anime-card__link' href={`/${
                            allAnimeData.info
                                ? allAnimeData.info.type === ('TV' || 'Movie') ? 'anime' : 'manga'
                                : allAnimeData.type === ('TV' || 'Movie') ? 'anime' : 'manga'
                        }/${allAnimeData.id}`}>
                            <MangaCover item={allAnimeData}/>
                            {
                                allAnimeData.score && (
                                    <div className='anime-card__rating'>
                                        <StarRating itemScore={allAnimeData.score}/>
                                    </div>
                                )
                            }
                            <p className='anime-card__title'>{allAnimeData.title}</p>
                        </a>
                    )
                    : (
                        <p>...Cargando</p>
                    )
                }

            </div>
        </>
    )
}
