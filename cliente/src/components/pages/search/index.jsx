import React from 'react'
import Aside from '../../molecules/aside'
import AnimeCard from '../../molecules/animeCard'
import ReviewCard from '../../molecules/reviewCard'
import { cards, reseñas } from '../home/mockData'
import Section from '../../molecules/section'
import Carousel from '../../molecules/carousel'
// import Form from '../../organisms/Form'

function Search () {
    const mangas = cards.map(c => <AnimeCard key={c.id}item ={c}/>)
    const rev = reseñas.map(r => <ReviewCard key={r.id}item={r}/>).slice(0, 4)
    // const search = {
    //     type: 'search',
    //     title: '',
    //     description: '',
    //     form: [
    //         {
    //             name: 'Buscar',
    //             type: 'text',
    //             value: 'Buscar en el catálogo',
    //             onChange: null
    //         },
    //         {
    //             name: 'Genero',
    //             type: 'select',
    //             options: ['option1', 'option2', 'option3'],
    //             onChange: null
    //         },
    //         {
    //             name: 'Año',
    //             type: 'select',
    //             options: ['2010', '2011', '1995'],
    //             onChange: null
    //         }
    //     ],
    //     button: {
    //         submit: 'Buscar',
    //         span: '',
    //         link: '',
    //         path: ''
    //     }
    // }

    return <>
        <div className="search-section">
            <main >

                <div className="search-section__form">
                    {/* <form action="submit">

                        <label htmlFor=""></label>
                        <input type="text" />
                        <label htmlFor=""></label>
                        <input type="text" />
                        <label htmlFor=""></label>
                        <input type="text" />

                        <button>Submit</button>
                    </form> */}
                    {/* <Form type={search.type} title={search.title} description ={search.descripcion} form={search.form}button={search.button} onSubmit={null}></Form> */}
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
            <div className="aside-container">

                <Aside title='Top Manga' elements={mangas.slice(0, 4)}></Aside>
                <Aside title='Ultimas Reviews' elements={rev}></Aside>
            </div>
        </div>
    </>
}

export default Search
