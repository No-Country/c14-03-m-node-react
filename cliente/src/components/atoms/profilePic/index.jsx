import React from 'react'
function ProfilePic ({ user }) {
    return (<>
        <img src={user.userImage} alt={`Profile ficture of ${user.userName}`} />

    </>)
}
export default ProfilePic
