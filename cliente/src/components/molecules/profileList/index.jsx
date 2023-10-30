import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsPlusCircle } from 'react-icons/bs'
import Modal from '../../atoms/modal'

import Button from '../../atoms/button'

import ProfileListsItem from '../../atoms/profileListsItem'
import ProfileReviewItem from '../profileReviewItem'

function CreateListForm ({ status, createListHandler }) {
    const [listNameValue, setListNameValue] = status
    return (
        <form className='create-list-form'>
            <label>
                <span>
                        Nombre de la lista
                </span>
                <input
                    type="text"
                    value={listNameValue}
                    onChange={(e) => setListNameValue(e.target.value)}
                />
            </label>
            <Button
                text={'Crear nueva lista'}
                type='filled'
                clickHandler={createListHandler}>
                <BsPlusCircle />
            </Button>
        </form>
    )
}

function ProfileList ({ userData }) {
    const defaultSelected = 'lists'
    const [listSelected, setListSelected] = useState(defaultSelected)
    const [reviews, setReviews] = useState(userData.reviews)
    const [lists, setLists] = useState(userData.lists)
    const [createListModalOpen, setCreateListModalOpen] = useState(false)
    const [listNameValue, setListNameValue] = useState('')

    const listsButton = useRef(null)
    const reviewsButton = useRef(null)

    useEffect(() => {
        listsButton.current.classList.add('active')// pone por default el active a la lista lists
    }, [])
    useEffect(() => {
        renderLists()
    }, [reviews, lists])

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
        setCreateListModalOpen(false)
    }

    const renderLists = () => {
        if (lists.length > 0) {
            return (lists.map((item) => (
                <ProfileListsItem key={item.name} list={item} />
            )))
        }
        return (
            <div className='empty-lists'>
                <h3>No tienes listas creadas</h3>
                <button className='empty-lists__button'>
                    <BsPlusCircle />
                    <span>crear lista</span>
                </button>
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
                    <CreateListForm status={[listNameValue, setListNameValue]} createListHandler ={createListHandler} />
                </Modal>
            )}

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
                {listSelected === 'lists' && (
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
