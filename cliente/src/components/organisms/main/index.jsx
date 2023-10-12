import React from 'react'
import Section from '../../molecules/section'
import AnimeCard from '../../molecules/animeCard'

function Main () {
    const prueba = {
        title: 'Demon Slayer y sus redonditos de ricota',
        img: 'https://i.ebayimg.com/images/g/ACIAAOSwdnphKthz/s-l1600.png',
        score: 9.7
    }
    const prueba2 = {
        title: 'Demon Slayer y sus redonditos de ricota pasados por manteca',
        img: 'https://i.ebayimg.com/images/g/ACIAAOSwdnphKthz/s-l1600.png'
    }
    return (
        <main className='main'>
            <Section title="Tendencias de Anime">
                <AnimeCard item={prueba}/>
                <AnimeCard item={prueba2}/>
            </Section>
        </main>
    )
}

export default Main
