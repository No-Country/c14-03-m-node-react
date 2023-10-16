import React from 'react'
import Section from '../../molecules/section'
import AnimeCard from '../../molecules/animeCard'
import TrailerCard from '../../molecules/trailerCard'

function Main () {
    const prueba = {
        title: 'Demon Slayer y sus redonditos de ricota',
        image: 'https://i.ebayimg.com/images/g/ACIAAOSwdnphKthz/s-l1600.png',
        score: 9.7
    }
    const prueba2 = {
        title: 'Demon Slayer y sus redonditos de ricota pasados por manteca',
        image: 'https://prod-printler-front-as.azurewebsites.net/media/photo/126779.jpg'
    }

    const prueba3 = {
        title: 'Otro titulo falso de demostracion',
        image: 'https://m.media-amazon.com/images/I/81pO1o2RmPL.jpg',
        score: 9.7
    }
    const prueba4 = {
        title: 'Y uno mas',
        image: 'https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFzK2p4RTVLRUwuX0FDX1NMMTUwMF8uanBn.jpg'
    }

    const trailer1 = {
        isMarked: true,
        image: 'https://i.pinimg.com/736x/47/86/1f/47861f7751f9de3d707fbbfe9be2ee89.jpg',
        title: 'Your Name'
    }

    const trailer2 = {
        isMarked: false,
        image: 'https://i.vimeocdn.com/video/1202969703-1684f8af633728d1a328fc77cd61f80eadc703d4f02484022360b6dcf9eced7b-d_640x360.jpg',
        title: 'Un nombre mas largo para probar como queda'
    }
    const trailer3 = {
        isMarked: true,
        image: 'https://i.blogs.es/a76cc0/_media_demon_slayer_switch_840ad63e97/450_1000.jpeg',
        title: 'Ia tu sabe'
    }

    const trailer4 = {
        isMarked: false,
        image: 'https://imagenes.elpais.com/resizer/0alCgok56VuEcSE1s2BELjuqPUM=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/prisa/C7BFNTXVSVCLBGFZPKBJOV3WCY.jpg',
        title: 'Lorem ipsum sit dolor amet'
    }
    return (
        <main className='main'>
            <Section title="Tendencias de Anime">
                <div style={ { display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <AnimeCard item={prueba}/>
                    <AnimeCard item={prueba2}/>
                    <AnimeCard item={prueba3}/>
                    <AnimeCard item={prueba4}/>
                </div>
            </Section>
            <Section title="Tráilers populares">
                <div style={ { display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <TrailerCard item= {trailer1}/>
                    <TrailerCard item= {trailer2}/>
                    <TrailerCard item= {trailer3}/>
                    <TrailerCard item= {trailer4}/>
                </div>
            </Section>
        </main>
    )
}

export default Main
