import React from 'react'
import { MdModeComment } from 'react-icons/md'
import { BsPlusCircle } from 'react-icons/bs'

import ItemDetail from '../../organisms/itemDetail'
import InfoBox from '../../molecules/infoBox'
import DetailReviewItem from '../../molecules/detailReviewItem'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'

import { anime } from './mockData'

function DetailView () {
    return (
        <div className='detail-view'>
            <ItemDetail anime={anime} ></ItemDetail>
            <div className='detail-view__body-container'>
                <InfoBox info={anime.info} />
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
                    {anime.reviews.map((item) => (
                        <DetailReviewItem key={item.id} review={item} />
                    ))}
                </section>
            </div>
            <aside className='detail-view__aside'>
                <h3 className='detail-view__aside-title'>Recomendaciones Similares</h3>
                <Carousel>
                    {anime.recommendations.map((item) => (
                        <AnimeCard key={item.id} item={item}/>
                    ))}
                </Carousel>
            </aside>
        </div>
    )
}

export default DetailView
