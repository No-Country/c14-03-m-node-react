import React from 'react'

function ProfileStatusListThumbnail ({ status }) {
    return (
        <div className='statusThumbnail'>
            <div className='statusThumbnail__text-container'>
                <p className='statusThumbnail__text statusThumbnail__text--big'>{status.items}</p>
                <p className='statusThumbnail__text statusThumbnail__text--small' >{status.name}</p>
            </div>
            <picture className='statusThumbnail__img-container'>
                <img
                    className='statusThumbnail__img'
                    src={status.background_img}
                    alt=" top 1 status list background image" />
            </picture>
        </div>
    )
}

export default ProfileStatusListThumbnail
