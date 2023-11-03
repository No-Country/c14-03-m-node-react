import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsPlusCircle } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'

import { CreateListApi, GetAllListsApi } from '../../../apiConnection'

import Modal from '../../atoms/modal'
import Button from '../../atoms/button'
import ProfileListsItem from '../../atoms/profileListsItem'
import ProfileReviewItem from '../profileReviewItem'
import CreateListForm from './createListForm'

function ProfileList ({ userData }) {
    const token = localStorage.getItem('token')
    const [localUserData, setLocalUserData] = useState(JSON.parse(localStorage.getItem('user')))

    const defaultSelected = 'lists'

    const [listSelected, setListSelected] = useState(defaultSelected)
    const [reviews, setReviews] = useState(userData.reviews)
    const [lists, setLists] = useState(userData.lists)
    const [createListModalOpen, setCreateListModalOpen] = useState(false)

    const [listNameValue, setListNameValue] = useState('')
    const [textAreaValue, setTextAreaValue] = useState('')

    const listsButton = useRef(null)
    const reviewsButton = useRef(null)

    const [createListResponse, createListStatus, createListFetch] = CreateListApi()
    const [getAllListsResponse, getAllListsStatus, getAllListsFetch] = GetAllListsApi()

    useEffect(() => {
        listsButton.current.classList.add('active')// pone por default el active a la lista lists

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        getAllListsFetch('', '', config)
        // obtener todas la reviews
    }, [])

    useEffect(() => {
        if (getAllListsStatus.success) {
            console.log(getAllListsResponse)
            const withAnimesLists = getAllListsResponse.map((dbList) => {
                const listId = dbList.id
                console.log('id de la lista: ', listId)
                const localList = JSON.parse(localStorage.getItem(`list${listId}`))
                if (dbList.id === localList?.id && dbList.userId === localList?.userId) {
                    return { ...dbList, animes: localList.animes }
                } else {
                    return { ...dbList }
                }
            })
            // entrar a cada lista y traer su respectiva lista de local
            // agregar el array de animes y hacer un push a la cont withAnimesList
            // cuando se haya terminado de agregar las listas se define como estado de Lists
            // probar como hacerlo funcion AddLocalListData para usarlo en otros lados
            setLists(withAnimesLists)
        }
    }, [getAllListsStatus])

    useEffect(() => {
        if (createListStatus.success) {
            console.log(createListResponse)
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const localList = {
                id: createListResponse.id,
                userId: createListResponse.userId,
                animes: []
            }
            localStorage.setItem(`list${createListResponse.id}`, JSON.stringify(localList))
            // Crear el local storage de la lista con el id de la lista, el id del usuario y una lista de ids de anime y titulos

            getAllListsFetch('', '', config)
            toast.success('Lista Creada')
        }
    }, [createListStatus])

    const clickHandler = (e) => {
        e.preventDefault()

        listsButton.current.classList.remove('active')
        reviewsButton.current.classList.remove('active')

        e.target.classList.add('active')

        const classList = [...e.target.classList]
        const elements = (element) => (element === 'lists' || element === 'reviews')
        if (classList.some(elements)) {
            const selected = classList.find(elements)
            setListSelected(selected)
        }
    }
    const createListHandler = () => {
        console.log(listNameValue)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const dataToSend = {
            title: listNameValue,
            description: textAreaValue,
            userId: localUserData.id
        }
        createListFetch('', JSON.stringify(dataToSend), config)
        console.log(createListResponse)
        console.log(createListStatus)
        setCreateListModalOpen(false)
    }

    const renderLists = () => {
        if (lists.length > 0) {
            return (lists.map((item) => (
                <ProfileListsItem key={item.title} list={item} />
            )))
        }
        return (
            <div className='empty-lists'>
                <h3>No tienes listas creadas</h3>
                <Button
                    className='empty-lists__button'
                    type='filled'
                    clickHandler={() => setCreateListModalOpen(true)}
                >
                    <BsPlusCircle />
                    <span>Crea Tu primera lista</span>
                </Button>
            </div>
        )
    }
    const renderReviews = () => {
        if (reviews.length > 0) {
            return (reviews.map((item) => (
                <ProfileReviewItem
                    key={item.id}
                    review={item}
                    userData={
                        { userName: userData.userName, userImage: userData.userImage }
                    }
                />
            )))
        }
        return (
            <div className='empty-reviews'>
                <h3>No tienes reseñas creadas</h3>
                <div className='empty-reviews__link-container'>
                    <NavLink to='/' className='empty-reviews__link' >
                        Ir al Catalogo
                    </NavLink>
                </div>
            </div>
        )
    }

    return (
        <section className='profile-lists'>
            {createListModalOpen && (
                <Modal toClose={setCreateListModalOpen}>
                    <CreateListForm
                        statusInput={[listNameValue, setListNameValue]}
                        statusTextArea={[textAreaValue, setTextAreaValue]}
                        createListHandler ={createListHandler} />
                </Modal>
            )}
            <Toaster />
            <nav className='profile-lists__navigation'>
                <ul className='profile-lists__lists-container'>
                    <li className='profile-lists__item'>
                        <button
                            className='profile-lists__button lists'
                            onClick={clickHandler}
                            ref={listsButton}
                        >
                        Listas
                        </button>
                    </li>
                    <li className='profile-lists__item'>
                        <button
                            className='profile-lists__button reviews'
                            onClick={clickHandler}
                            ref={reviewsButton}
                        >
                        Reseñas
                        </button>
                    </li>
                </ul>
                {listSelected === 'lists' && lists.length > 0 && (
                    <Button
                        text={'Crear nueva lista'}
                        type='filled'
                        clickHandler={() => setCreateListModalOpen(true)}>
                        <BsPlusCircle />
                    </Button>
                )}
            </nav>
            <ul className='profile-lists__list'>
                {listSelected === 'lists'
                    ? (renderLists())
                    : (renderReviews())
                }
            </ul>
        </section>
    )
}

export default ProfileList
