import React from 'react'
import { BsBookmark } from 'react-icons/bs'
// import StarRating from '../../atoms/starRating'
import MangaCover from '../../atoms/mangaCover'
export default function AnimeCardVariant ({ item }) {
    return (
        <>
            <div className='anime-card-variant card'>
                <a className='anime-card-variant__link' href="#">
                    <div className="anime-card-variant__cover">

                        <MangaCover item={item}/>
                    </div>
                    <p className='anime-card-variant__title'>{item.title}</p>

                    <div className='anime-card-variant__bookmark'>
                        <BsBookmark></BsBookmark>
                    </div>

                </a>
            </div>
        </>
    )
}
