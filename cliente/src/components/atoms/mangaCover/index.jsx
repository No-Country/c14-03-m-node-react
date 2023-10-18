import React from 'react'
export default function MangaCover ({ item }) {
    return (
        <div className='cover'>
            <img className='cover__image' src={item.image} alt={`portada de ${item.title}`} />
            <div className="cover__gradient">

            </div>
        </div>
    )
}
