import React, { useEffect, useState } from 'react'
import { MdModeComment } from 'react-icons/md'
import { BsPlusCircle } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

import ItemDetail from '../../organisms/itemDetail'
import InfoBox from '../../molecules/infoBox'
import DetailReviewItem from '../../molecules/detailReviewItem'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'

import { GetOneItemApi } from '../../../apiConnection'
import { reviewsSample, recomendationsSample } from './mockData'

function DetailView () {
    const { id } = useParams()
    // Taigo info de la api del anime ---------------| Check
    // traigo ese mismo anime del localStorage-------| Check
    // Creo la version unificada---------------------|
    // Uso la nueva version para mostrar la info-----|
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
                reviews: reviewsSample,
                recomendations: recomendationsSample
            }
            console.log(estructuredData)
            setAllAnimeData(estructuredData)
        }
    }, [animeApi, animeLocal])

    return (
        <div className='detail-view'>
            {!allAnimeData
                ? (<p>Cargando...</p>)
                : (
                    <>
                        <ItemDetail anime={allAnimeData} ></ItemDetail>
                        <div className='detail-view__body-container'>
                            <InfoBox info={allAnimeData.info} />
                            <section className='detail-view__reviews'>
                                <header className='detail-view__reviews-header'>
                                    <h3 className='reviews-header__title'>
                                        <MdModeComment />
                                Reseñas
                                    </h3>
                                    <button className='detail-view__add-review-button'>
                                        <BsPlusCircle />
                            Escribir reseña
                                    </button>
                                </header>
                                {allAnimeData.reviews.length > 0
                                    ? (
                                        allAnimeData.reviews.map((item) => (
                                            <DetailReviewItem key={item.id} review={item} />
                                        )))
                                    : (
                                        <div className="empty-reviews">
                                            <p className='empty-reviews__message'>No hay reseñas</p>
                                        </div>
                                    )
                                }
                            </section>
                        </div>
                        <aside className='detail-view__aside'>
                            <h3 className='detail-view__aside-title'>Recomendaciones Similares</h3>
                            <Carousel>
                                {allAnimeData.recomendations.map((item) => (
                                    <AnimeCard key={item.id} item={item}/>
                                ))}
                            </Carousel>
                        </aside>
                    </>
                )
            }
        </div>
    )
}

export default DetailView
