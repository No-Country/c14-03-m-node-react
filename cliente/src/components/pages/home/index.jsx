import React from 'react'
import { HomeProvider } from '../../../context/homecontext'
import HeroHomePage from '../../organisms/heroHomePage'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'
import TrailerCard from '../../molecules/trailerCard'
import Section from '../../molecules/section'

import { cards, trailers } from './mockData'

function Home () {
    return (
        <main className='home-container'>
            <HomeProvider>
                <HeroHomePage/>
                <Section title='Tendencias'>
                    <Carousel>
                        {cards.map((item) => (
                            <AnimeCard key={item.title} item={item}/>
                        ))}
                    </Carousel>
                </Section>
                <Section title='Trailers'>
                    <Carousel>
                        {trailers.map((item) => (
                            <TrailerCard key={item.title} item={item}></TrailerCard>
                        ))
                        }
                    </Carousel>
                </Section>
            </HomeProvider>
        </main>
    )
}

export default Home
