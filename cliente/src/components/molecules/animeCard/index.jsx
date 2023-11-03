import React from 'react'
import StarRating from '../../atoms/starRating'
import MangaCover from '../../atoms/mangaCover'

export default function AnimeCard ({ item }) {
    return (
        <>
            <div className='anime-card card'>
                {/* aca deberia agregarse el id del item */}
                <a className='anime-card__link' href={`/${
                    item.info
                        ? item.info.type === ('TV' || 'Movie') ? 'anime' : 'manga'
                        : item.type === ('TV' || 'Movie') ? 'anime' : 'manga'
                }/${item.id}`}>
                    <MangaCover item={item}/>
                    {
                        item.score && (
                            <div className='anime-card__rating'>
                                <StarRating itemScore={item.score}/>
                            </div>
                        )
                    }
                    <p className='anime-card__title'>{item.title}</p>
                </a>
            </div>
        </>
    )
}
