import React from 'react'
import { HomeProvider } from '../../../context/homecontext'
import HeroHomePage from '../../organisms/heroHomePage'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'
import TrailerCard from '../../molecules/trailerCard'
import Section from '../../molecules/section'
import ReviewCard from '../../molecules/reviewCard'
import { cards, trailers, reseñas } from './mockData'

function Home () {
    return (
        <main className='home-container'>
            <HomeProvider>
                <HeroHomePage/>
                <Section title='Tendencias de Anime & Manga'>
                    <Carousel>
                        {cards.map((item) => (
                            <AnimeCard key={item.title} item={item}/>
                        ))}
                    </Carousel>
                </Section>
                <Section title='Trailers populares'>
                    <Carousel>
                        {trailers.map((item) => (
                            <TrailerCard key={item.title} item={item}></TrailerCard>
                        ))
                        }
                    </Carousel>
                </Section>
                <Section title='Reseñas recientes'>
                    <Carousel>
                        {reseñas.map((item) => (
                            <ReviewCard key={item.title} item={item}></ReviewCard>
                        ))
                        }
                    </Carousel>
                </Section>
            </HomeProvider>
        </main>
    )
}

export default Home
