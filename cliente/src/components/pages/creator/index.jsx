import React, { useEffect, useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'

import CreateAnimeForm from './createAnimeForm'
import ComplementaryForm from './complementaryForm'

import { CreateItemApi, CreateGenreApi } from '../../../apiConnection'

function Creator () {
    const token = localStorage.getItem('token')
    const [formSelected, setFormSelected] = useState('anime')

    const [genreTitle, setGenreTitle] = useState('')
    const [mainInfoDone, setMainInfoDone] = useState(false)

    const [createItemResponse, createItemStatus, createItemFetch] = CreateItemApi()
    const [createGenreResponse, createGenreStatus, createGenreFetch] = CreateGenreApi()

    useEffect(() => {
        if (createItemStatus.success) {
            toast.success('informacion Base Agregada')
            setMainInfoDone(true)
        }
        if (createGenreStatus.success) {
            toast.success('Genero Creado Exitosamente')
        }
    }, [createItemStatus, createGenreStatus])

    const handleCreateGenre = (e) => {
        e.preventDefault()
        // ---POST REQUEST-------
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        createGenreFetch('', JSON.stringify({ title: genreTitle }), config)

        // clear inputs
        setGenreTitle('')
    }
    const getFormValues = (form) => {
        const formData = new FormData(form)
        const values = [...formData.values()]
        const isEmpty = values.includes('')
        const data = Object.fromEntries(formData)

        return { isEmpty, data, formData }
    }

    const handleMainSubmit = (e) => {
        e.preventDefault()

        const { isEmpty, data, formData } = getFormValues(e.currentTarget)
        if (isEmpty) {
            console.log('please provide all values')
            return
        }

        console.log(data)

        // ---POST REQUEST-------
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        }
        createItemFetch('/', formData, config)

        // clear inputs
        e.currentTarget.reset()
    }
    return (
        <main className='creator'>
            <nav className='creator__nav'>
                <ul className='creator__nav-list'>
                    <li className='creator__nav-item'>
                        <button
                            onClick={() => setFormSelected('genero')}
                            className={`creator__button ${formSelected === 'genero' && 'active'}`}
                        >
                            <BsFillPlusSquareFill/>
                        Crear genero
                        </button>
                    </li>
                    <li className='creator__nav-item'>
                        <button
                            onClick={() => setFormSelected('anime')}
                            className={`creator__button ${formSelected === 'anime' && 'active'}`}
                        >
                            <BsFillPlusSquareFill/>
                        Crear Anime
                        </button>
                    </li>
                </ul>
            </nav>
            <div>
                <Toaster />
                {
                    formSelected === 'anime'
                        ? !mainInfoDone
                            ? (<CreateAnimeForm handleSubmit={handleMainSubmit}/>)
                            : (<ComplementaryForm
                                idAnime={createItemResponse}
                                setDone={setMainInfoDone}
                            />)
                        : (
                            <form className='creator__form' onSubmit={handleCreateGenre}>
                                <label className='creator__label'>
                                    <span>Titulo del genero</span>
                                    <input
                                        type="text"
                                        name='title'
                                        value={genreTitle}
                                        onChange={(e) => setGenreTitle(e.target.value)}
                                    />
                                </label>
                                <button
                                    className='creator__submit-button'
                                    type="submit"
                                >
                        Crear Genero
                                </button>
                            </form>
                        )
                }

            </div>
        </main>
    )
}

export default Creator
