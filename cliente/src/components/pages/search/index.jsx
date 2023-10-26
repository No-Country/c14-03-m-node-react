import React from 'react'
import Aside from '../../molecules/aside'
import AnimeCard from '../../molecules/animeCard'
import AnimeCardVariant from '../../molecules/animeCardVariant'
import ReviewCard from '../../molecules/reviewCard'
import { cards, reseñas } from '../home/mockData'
import Section from '../../molecules/section'
import Carousel from '../../molecules/carousel'
import FormWide from '../../organisms/FormWide'

function Search () {
    const mangas = cards.map(c => <AnimeCard key={c.id}item ={c}/>)
    const variant = cards.map(c => <AnimeCardVariant key={c.id}item ={c}/>)
    const rev = reseñas.map(r => <ReviewCard key={r.id}item={r}/>).slice(0, 4)
    const search = {
        type: 'search',
        title: '',
        description: '',
        form: [
            {
                name: 'Buscar',
                type: 'text',
                value: 'Buscar en el catálogo',
                onChange: null
            },
            {
                name: 'Genero',
                type: 'select',
                options: ['option1', 'option2', 'option3'],
                onChange: null
            },
            {
                name: 'Año',
                type: 'select',
                options: ['2010', '2011', '1995'],
                onChange: null
            }
        ]

    }

    return <>
        <div className="search-section">
            <main >

                <div className="search-section__form">

                    <FormWide type={search.type} title={search.title} description ={search.descripcion} form={search.form} onSubmit={null}/>
                </div>
                <div className="search-section__view">
                    <Section title="Titulo de Prueba">
                        <Carousel>
                            {mangas}
                        </Carousel>
                    </Section>
                    <Section title="Titulo de Prueba">
                        <Carousel>
                            {mangas}
                        </Carousel>
                    </Section>
                    <Section title="Titulo de Prueba">
                        <Carousel>
                            {mangas}
                        </Carousel>
                    </Section>
                </div>
            </main>
            <div className="search__aside-container">

                <Aside title='Top Manga' elements={variant.slice(0, 4)}></Aside>
                <Aside title='Ultimas Reviews' elements={rev}></Aside>
            </div>
        </div>
    </>
}

export default Search
