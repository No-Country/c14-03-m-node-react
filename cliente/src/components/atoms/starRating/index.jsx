import React from 'react'
import { BsStarFill } from 'react-icons/bs'

function StarRating ({ item }) {
    return (
        <div className={'rating'}>
            <BsStarFill className="rating__star"/>
            <span className='rating__points'>
                {item.toFixed(1)}
            </span>
        </div>
    )
}

export default StarRating
