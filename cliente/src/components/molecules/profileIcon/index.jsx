import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
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
            closeMenuTimeOut = setTimeout(() => setIsHovered(false), 400)
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
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onKeyDown={handleKeyDown}
        >
            <CgProfile className='profile-icon'/>
            {isHovered && (
                <ProfileMenu mouseHandler={dualMouseHandler} />
            )}
        </button>
    )
}

export default ProfileIcon
