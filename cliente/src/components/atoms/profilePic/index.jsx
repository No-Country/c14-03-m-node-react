import React from 'react'
function ProfilePic ({ user, size }) {
    return (
        <div className="profile-pic">
            <img className={`profile-pic__image image--${size}`} src={user.userImage} alt={`Profile ficture of ${user.userName}`} />
            <span className='profile-pic__name'>{`@${user.userName}`}</span>
        </div>
    )
}
export default ProfilePic
