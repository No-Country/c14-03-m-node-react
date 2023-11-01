import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPersonOutline } from 'react-icons/io5'
import ProfileOptions from '../../atoms/profileOptions'
import { GeneralContext } from '../../../context/main'

function ProfileMenu () {
    const [isHovered, setIsHovered] = useState(false)
    const [userInfo, setUserInfo] = useState(false)
    const { isUserLogged, setIsUserLogged } = useContext(GeneralContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isUserLogged) {
            const userJSON = localStorage.getItem('user')
            const user = JSON.parse(userJSON)
            setUserInfo(user)
        }
    }, [isUserLogged])

    const isProfiliImgAvailable = () => {
        const userJSON = localStorage.getItem('user')
        if (userJSON) {
            const user = JSON.parse(userJSON)
            if (user.profilePicture) {
                return (
                    <img
                        className='profile__img'
                        src={user.profilePicture}
                        alt='profile picture'
                    />
                )
            } else {
                return (
                    <img
                        className='profile__img'
                        src='../../../../public/defaultProfileImg.png'
                        alt='default profile picture'
                    />
                )
            }
        }
        return (
            <IoPersonOutline className='profile-icon' />
        )
    }
    const dualMouseHandler = () => {
        let closeMenuTimeOut
        const handleMouseEnter = () => {
            clearTimeout(closeMenuTimeOut)
            setIsHovered(true)
        }
        const handleMouseLeave = () => {
            closeMenuTimeOut = setTimeout(() => setIsHovered(false), 500)
        }
        return {
            mouseEnter: handleMouseEnter,
            mouseLeave: handleMouseLeave
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
            e.preventDefault()
            setIsHovered(!isHovered)
        }
    }
    const { mouseEnter, mouseLeave } = dualMouseHandler()
    const toLogControls = [
        {
            name: 'Iniciar Sesión',
            link: '/LogIn'
        },
        {
            name: 'Registrarse',
            link: '/Signup'
        }
    ]
    const loggedControls = [
        {
            name: 'Perfil',
            link: `/profile/${userInfo.id}`
        },
        {
            name: 'Cerrar Sesion',
            action: () => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                setIsUserLogged(false)
                navigate('/')
            }
        },
        {
            name: 'Creator',
            link: '/creator'
        }
    ]
    return (
        <div className='profileMenu'>
            <button
                aria-label='profile button'
                className='profile-icon-container'
                onClick={mouseEnter}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onKeyDown={handleKeyDown}
            >
                {isProfiliImgAvailable()}
            </button>
            {isHovered && (
                <ProfileOptions
                    controls={isUserLogged ? loggedControls : toLogControls}
                    mouseHandler={{ mouseEnter, mouseLeave }} />
            )}
        </div>
    )
}

export default ProfileMenu
