import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlinePlayCircle } from 'react-icons/ai'

import MangaCover from '../../atoms/mangaCover'
import StarRating from '../../atoms/starRating'
import Button from '../../atoms/button'
import ItemStatusSelector from '../../molecules/itemStatusSelector'
import Modal from '../../atoms/modal'
import AddToListForm from './addToListForm'

import { GetAllListsApi } from '../../../apiConnection'

function ItemDetail ({ anime }) {
    const token = localStorage.getItem('token')
    const [addToListModalOpen, setAddToListModalOpen] = useState(false)
    const [userLists, setUserLists] = useState([])

    const [getAllListsResponse, getAllListsStatus, getAllListsFetch] = GetAllListsApi()

    const addToListHandler = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        getAllListsFetch('', {}, config)
        setAddToListModalOpen(true)
    }
    useEffect(() => {
        if (getAllListsStatus.success) {
            console.log(getAllListsResponse)

            setUserLists(getAllListsResponse)
        }
    }, [getAllListsResponse])
    return (
        <main className='item-detail'>
            {addToListModalOpen && (
                <Modal>
                    <AddToListForm
                        userLists={userLists}
                        toCloseModal={setAddToListModalOpen}
                    />
                </Modal>
            )}
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
                            <Button
                                type='filled'
                                text='Agregar a lista'
                                clickHandler={addToListHandler}
                            >
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
                    {anime.description.map((paragraph) => (
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
