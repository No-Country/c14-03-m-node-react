import React from 'react'
import InfoBoxItem from '../../atoms/infoBoxItem'

function AnimeDetailInfo ({ info }) {
    const infoArray = Object.entries(info)
    console.log('info en infobox: ', infoArray)
    return (
        <section className='info-box'>
            <header className='info-box__header'>
                <h3 className='info-box__title'>Información</h3>
            </header>
            <div className='info-box__info-container'>
                {infoArray.map(info => (
                    <InfoBoxItem key={info[0]} info={info} />
                ))}
            </div>
        </section>
    )
}

export default AnimeDetailInfo
