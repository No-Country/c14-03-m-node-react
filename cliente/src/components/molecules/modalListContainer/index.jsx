import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import MangaCover from '../../atoms/mangaCover'
import { GetOneItemApi } from '../../../apiConnection'

function StatusListCard ({ id }) {
    const [getItemResponseApi, getItemStatusApi, getItemFetchApi] = GetOneItemApi(id)
    const [animeApi, setAnimeApi] = useState(null)
    useEffect(() => {
        getItemFetchApi()
    }, [])
    useEffect(() => {
        if (getItemStatusApi.success) {
            setAnimeApi(getItemResponseApi)
        }
    }, [getItemStatusApi])
    return (
        <NavLink
            to={`/anime/${id}`}
            className='modal-content__item'
        >
            {
                animeApi
                    ? (<MangaCover item={animeApi}/>)
                    : (<p>...Cargando</p>)
            }
        </NavLink>
    )
}

function ModalListContainer ({ lists, listName }) {
    console.log('Listas en modal: ', lists)
    console.log('nombre de la lista en modal', listName)

    const list = lists.find((item) => item.name === listName)
    return (
        <div className='modal-content__container'>
            <h2 className='modal-content__title'>{`Estas son las series que tienes en "${list.name}"`}</h2>
            <section className='modal-content__list-container'>
                {list.list.map((itemId) => (
                    <StatusListCard id={itemId} key={itemId} />
                ))}
            </section>
        </div>
    )
}

export default ModalListContainer
