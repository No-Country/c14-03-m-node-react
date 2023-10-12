import React from 'react'
import StarRating from '../../atoms/starRating'
export default function AnimeCard ({ item }) {
    return (
        <>
            <div className='anime-card'>
                <a className='anime-card__link' href="#">
                    <div className="anime-card__gradient">
                        <img className='anime-card__image' src={item.img} alt={`portada de ${item.title}`} />
                    </div>
                    {
                        item.score && (
                            <div className='anime-card__rating'>
                                <StarRating item={item.score}/>
                            </div>
                        )
                    }
                    <p className='anime-card__title'>{item.title}</p>
                </a>
            </div>
        </>
    )
}
