import React from 'react'
import ProfileStatusListThumbnail from '../../atoms/profileStatusListThumbnail'
import ProfileCard from '../../atoms/profileCard'
import ProfileList from '../../molecules/profileList'

import { userData } from './mockData'

function Profile () {
    return (
        <main className='profile'>
            <ProfileCard userData={userData} />
            <section className="profile__right">
                <section className='profile__status-bar'>
                    {
                        userData.status.map((item) => (
                            <ProfileStatusListThumbnail key={item.name} status={item} />
                        ))
                    }
                </section>
                <ProfileList userData={userData}/>
            </section>
        </main>
    )
}

export default Profile
