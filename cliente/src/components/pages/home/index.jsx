import React from 'react'
import { HomeProvider } from '../../../context/homecontext'
import HeroHomePage from '../../organisms/heroHomePage'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'
import TrailerCard from '../../molecules/trailerCard'
import Section from '../../molecules/section'
import HomeBottomBanner from '../../molecules/homeBottomBanner'
import ReviewCard from '../../molecules/reviewCard'
import NoticiaCard from '../../molecules/noticiaCard'
import { cards, trailers, reseñas, noticias } from './mockData'

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
                <Section title='Noticias de Anime & Manga'>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: 'clamp(260px, 80%, 1300px)' }}>

                        {noticias.map((item) => (
                            <NoticiaCard key={item.id} item={item}></NoticiaCard>
                        ))
                        }
                    </div>
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
                            <div key={item.id} className='review-container'>

                                <ReviewCard item={item}></ReviewCard>
                            </div>
                        ))
                        }
                    </Carousel>
                </Section>
                <HomeBottomBanner />
            </HomeProvider>
        </main>
    )
}

export default Home
