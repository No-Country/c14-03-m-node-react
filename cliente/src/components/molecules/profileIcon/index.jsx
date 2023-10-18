import React, { useState } from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import ProfileMenu from '../../atoms/profileMenu'
/* La Ui debe adaptarse a si el usuario ya esta la sesion iniciada o no: */
/* La imagen del icono debera cambiar por la imagen del perfil */
/* Si ya esta iniciada el icono deberia llevar a la pagina de perfil o mostrar un menun de:  */
/* Ver Perfil */
/* Ver Listas */
function ProfileIcon () {
    const [isHovered, setIsHovered] = useState(false)

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
    return (
        <button
            className='profile-icon-container'
            onClick={mouseEnter}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onKeyDown={handleKeyDown}
        >
            <IoPersonOutline className='profile-icon'/>
            {isHovered && (
                <ProfileMenu mouseHandler={{ mouseEnter, mouseLeave }} />
            )}
        </button>
    )
}

export default ProfileIcon
