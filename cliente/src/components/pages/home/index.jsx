import React from 'react'
import HeroHomePage from '../../organisms/heroHomePage'
import { HomeProvider } from '../../../context/homecontext'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'
import { cards } from './mockData'

function Home () {
    return (
        <main className='home-container'>
            <HomeProvider>
                <HeroHomePage/>
                <Carousel>
                    {cards.map((item) => (
                        <AnimeCard key={item.title} item={item}/>
                    ))}
                </Carousel>
            </HomeProvider>
        </main>
    )
}

export default Home
