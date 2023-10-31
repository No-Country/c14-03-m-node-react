import React from 'react'
import AsideCard from '../../molecules/asideCard'
import { anime, review } from './mockData'

const Anime = () => {
    const topAnime = anime.slice(anime.length - 5)
    const lastReviews = review.sort((a, b) => b.date - a.date).slice(review.length - 5)

    return (
        <section id='anime-section'>
            <div className='anime-section__container'>
                <p>buscador</p>
            </div>
            <div className='anime-section__aside'>
                <AsideCard title={'Top Anime'} format={'top'} array={topAnime}/>
                <AsideCard title={'Últimas reseñas'} format={'last-review'} array={lastReviews}/>
            </div>
        </section>
    )
}

export default Anime
