import React from 'react'
import { TbEdit } from 'react-icons/tb'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function ProfileCard ({ userData }) {
    return (
        <section className='profile-card'>
            <button className='profile-card__button' aria-label='edit profile' >
                <TbEdit className='profile-card__icon'/>
            </button>
            <picture className='profile-card__img-container'>
                <img className='profile-card__img' src={userData.userImage} alt="User profile image" />
            </picture>
            <div className='profile-card__text-container'>
                <h2 className='profile-card__nickname'>{userData.userName}</h2>
                <p className='profile-card__biography'>{userData.biography}</p>
            </div>
            <NavLink to='/profile/favorites' className='profile-card__link'>
                <span className='profile-card__link-text'>Mis Favoritos</span>
                <BsFillBookmarkFill className='profile-card__link-icon' />
            </NavLink>
        </section>
    )
}

export default ProfileCard
