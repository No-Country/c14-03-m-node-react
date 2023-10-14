import React from 'react'
import StarRating from '../../atoms/starRating'
export default function AnimeCard ({ item }) {
    return (
        <>
            <div className='anime-card'>
                <a className='anime-card__link' href="#">
                    <img className='anime-card__image' src={item.image} alt={`portada de ${item.title}`} />
                    <div className="anime-card__gradient">

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
