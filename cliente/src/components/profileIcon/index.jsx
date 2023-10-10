import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import SessionPanel from '../SessionPanel'

function ProfileIcon () {
    const [isHovered, setIsHovered] = useState(true)
    return (
        <div
            className='profile-icon-container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CgProfile className='profile-icon'/>
            {isHovered && (
                <SessionPanel/>
            )}
        </div>
    )
}

export default ProfileIcon
