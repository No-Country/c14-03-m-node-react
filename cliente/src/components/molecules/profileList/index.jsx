import React, { useEffect, useRef, useState } from 'react'
import ProfileListsItem from '../../atoms/profileListsItem'
import ProfileReviewItem from '../profileReviewItem'

function ProfileList ({ userData }) {
    const defaultSelected = 'lists'
    const [listSelected, setListSelected] = useState(defaultSelected)
    const listsButton = useRef(null)
    const reviewsButton = useRef(null)

    useEffect(() => {
        listsButton.current.classList.add('active')// pone por default el active a la lista lists
    }, [])

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

    return (
        <section className='profile-lists'>
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

            </nav>
            <ul className='profile-lists__list'>
                {listSelected === 'lists'
                    ? (userData.lists.map((item) => (
                        <ProfileListsItem key={item.name} list={item} />
                    )))
                    : (userData.reviews.map((item) => (
                        <ProfileReviewItem
                            key={item.id}
                            review={item}
                            userData={
                                { userName: userData.userName, userImage: userData.userImage }
                            }
                        />
                    )))
                }
            </ul>
        </section>
    )
}

export default ProfileList
