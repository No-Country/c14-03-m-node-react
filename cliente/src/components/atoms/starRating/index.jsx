import React from 'react'
import { BsStarFill } from 'react-icons/bs'

function StarRating ({ item }) {
    const rateScale = [
        {
            name: 'bad',
            points: 3
        },
        {
            name: 'average',
            points: 5
        },
        {
            name: 'good',
            points: 8
        },
        {
            name: 'very-good',
            points: 9
        },
        {
            name: 'excelent',
            points: 9.5
        }
    ]

    const status = rateScale
        .filter(p => {
            return item >= p.points
        })
        .slice(-1)[0]
    console.log(status)
    return (
        // <div className="rating">
        <div className={`rating rating--${status.name}`}>
            <BsStarFill/>
            <span className='rating__points'>
                {item}
            </span>
        </div>
        // </div>
    )
}

export default StarRating
