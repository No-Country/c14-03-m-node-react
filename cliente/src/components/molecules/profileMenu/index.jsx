import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPersonOutline } from 'react-icons/io5'
import ProfileOptions from '../../atoms/profileOptions'
import { GeneralContext } from '../../../context/main'

function ProfileMenu () {
    const [isHovered, setIsHovered] = useState(false)
    const { isUserLogged, setIsUserLogged } = useContext(GeneralContext)
    const navigate = useNavigate()

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
            link: '/profile'
        },
        {
            name: 'Cerrar Sesion',
            action: () => {
                localStorage.removeItem('token')
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
                className='profile-icon-container'
                onClick={mouseEnter}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onKeyDown={handleKeyDown}
            >
                <IoPersonOutline className='profile-icon'/>
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