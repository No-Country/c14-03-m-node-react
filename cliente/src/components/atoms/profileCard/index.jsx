import React, { useEffect, useRef, useState } from 'react'
// import { BsFillBookmarkFill } from 'react-icons/bs'
import { /* NavLink, */ useParams } from 'react-router-dom'
import { TbEdit } from 'react-icons/tb'

import { UpdateUserDataAPI } from '../../../apiConnection'
import InputFile from '../../molecules/inputFile'

// import axios from 'axios'

function ProfileCard ({ userData }) {
    const token = localStorage.getItem('token')
    const [localUserData, setLocalUserData] = useState(JSON.parse(localStorage.getItem('user')))

    const [editing, setEditing] = useState(false)
    const [newImage, setNewImage] = useState(localUserData.profilePicture)
    const [nameInputValue, setNameInputValue] = useState(localUserData.name)
    const [textAreaValue, setTextAreaValue] = useState(localUserData.biografy)

    const [updateUsereResponse, updateUserStatus, updateUserFetch] = UpdateUserDataAPI(localUserData.id)
    const editForm = useRef(null)

    useEffect(() => {
        setLocalUserData(JSON.parse(localStorage.getItem('user')))
    }, [])

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        /* const intialFormData = new FormData(e.currentTarget)
        console.log('initialFormData: ', [...intialFormData.entries()]) */

        const formData = new FormData()
        if (newImage !== localUserData.profilePicture && newImage) {
            formData.append('profilePicture', newImage)
            console.log(newImage)
        }
        if (nameInputValue !== localUserData.name && nameInputValue) {
            formData.append('name', nameInputValue)
        }
        if (textAreaValue !== localUserData.biografy && textAreaValue) {
            formData.append('biografy', textAreaValue)
        }
        console.log('FormData: ', [...formData.entries()])

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        }

        updateUserFetch('', formData, config)

        editForm.current.reset()
        console.log('fetch status: ', updateUserStatus)

        setEditing(false)
    }
    useEffect(() => {
        if (updateUserStatus.success) {
            const userToLocal = { ...updateUsereResponse, loginDate: Date.now() }
            localStorage.setItem('user', JSON.stringify(userToLocal))
            setLocalUserData(JSON.parse(localStorage.getItem('user')))
        }
    }, [updateUserStatus])

    const formUpdate = () => {
        return (
            <form
                onSubmit={handleUpdateSubmit}
                className='profile-card__update-form'
                ref={editForm}
            >
                <InputFile status={[newImage, setNewImage]}/>
                <label className='profile-card__name-input'>
                    Nuevo nombre
                    <input
                        name='name'
                        type="text"
                        value={nameInputValue}
                        onChange={(e) => setNameInputValue(e.target.value)}
                    />
                </label>
                <label className='profile-card__biography-input'>
                    Biografía
                    <textarea
                        onChange={(e) => setTextAreaValue(e.target.value)}
                        value={textAreaValue}
                        name="biografy"
                        cols="35" rows="5"
                        maxLength='140'
                    ></textarea>
                </label>
                <button className='profile-card__submit-update-btn' type="submit">Realizar Cambios</button>
            </form>
        )
    }
    return (
        <section className='profile-card'>
            {editing || (
                <button
                    onClick={() => setEditing(true)}
                    className='profile-card__button'
                    aria-label='edit profile'
                >
                    <TbEdit className='profile-card__icon'/>
                </button>
            )}
            {editing
                ? (formUpdate())
                : (
                    <>
                        <picture className='profile-card__img-container'>
                            {/* user.profilePicture */}
                            <img
                                className='profile-card__img'
                                src={localUserData.profilePicture || '../../../../public/defaultProfileImg.png'}
                                alt="User profile image"
                            />
                        </picture>
                        <div className='profile-card__text-container'>
                            {/* user.name */}
                            <h2 className='profile-card__nickname'>{localUserData.name}</h2>
                            {/* aun no existe pero de existir que sea user.biography */}
                            <p className='profile-card__biography'>{localUserData.biografy}</p>
                        </div>
                    </>
                )}
            {/* No existe pagina para ir a favoritos y tampoco hay UI para definir anime como favorito, asi que puede quitarse hasta que no tengamos */}
            {/* <NavLink to='/profile/favorites' className='profile-card__link'>
                <span className='profile-card__link-text'>Mis Favoritos</span>
                <BsFillBookmarkFill className='profile-card__link-icon' />
            </NavLink> */}
        </section>
    )
}

export default ProfileCard
