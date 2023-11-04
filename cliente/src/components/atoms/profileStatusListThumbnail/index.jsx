import React, { useState } from 'react'
import Modal from '../../atoms/modal'
import ModalListContainer from '../../molecules/modalListContainer'

function ProfileStatusListThumbnail ({ status, list, modalSetter, listNameSetter }) {
    const handleThumbnailClick = (e) => {
        e.preventDefault()
        modalSetter(true)
        listNameSetter(list.name)
    }
    console.log('in thumbnail list: ', list)
    return (
        <button
            className='statusThumbnail'
            onClick={handleThumbnailClick}
        >
            <div className='statusThumbnail__text-container'>
                <p className='statusThumbnail__text statusThumbnail__text--big'>{list.list.length}</p>
                <p className='statusThumbnail__text statusThumbnail__text--small' >{list.name}</p>
            </div>
            <picture className='statusThumbnail__img-container'>
                <img
                    className='statusThumbnail__img'
                    src={status.background_img}
                    alt=" top 1 status list background image" />
            </picture>
        </button>
    )
}

export default ProfileStatusListThumbnail
