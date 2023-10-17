import React, { useState } from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import ProfileMenu from '../../atoms/profileMenu'

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
