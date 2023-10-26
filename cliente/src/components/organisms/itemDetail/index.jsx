import React from 'react'
import { AiOutlinePlus, AiOutlinePlayCircle } from 'react-icons/ai'
import MangaCover from '../../atoms/mangaCover'
import StarRating from '../../atoms/starRating'
import Button from '../../atoms/button'
import ItemStatusSelector from '../../molecules/itemStatusSelector'

function ItemDetail ({ anime }) {
    return (
        <main className='item-detail'>
            <MangaCover item={{ image: anime.image, title: anime.title }}/>
            <section className='item-detail__rigth-section'>
                <div className='item-detail__upper'>
                    <header className=' item-detail__header'>
                        <h2 className='item-detail__title' >{anime.title}</h2>
                        <div className='item-detail__short-info'>
                            <StarRating itemScore={anime.score}/>
                            <p className='item-detail__genres'>
                                {anime.info.genres.map((genre) => genre.name).join(', ')}
                            </p>
                        </div>
                        <div className='item-detail__buttons' >
                            <ItemStatusSelector></ItemStatusSelector>
                            <Button type='filled' text='Agregar a lista'>
                                <AiOutlinePlus />
                            </Button>
                        </div>
                    </header>
                    <picture className='item-detail__trailer'>
                        <img className='item-detail__trailer-img' src={anime.trailer_img} alt={`trailer de ${anime.title}`} />
                        <Button className='play-button' text='Play'>
                            <AiOutlinePlayCircle />
                        </Button>
                    </picture>
                </div>
                <section className='item-detail__synopsis'>
                    {anime.synopsis.map((paragraph) => (
                        <p key={paragraph.length} className='item-detail__text'>
                            {paragraph}
                        </p>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default ItemDetail
