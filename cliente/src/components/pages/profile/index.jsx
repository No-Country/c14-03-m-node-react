import React, { useEffect, useState } from 'react'
import ProfileStatusListThumbnail from '../../atoms/profileStatusListThumbnail'
import ProfileCard from '../../atoms/profileCard'
import ProfileList from '../../molecules/profileList'
import Modal from '../../atoms/modal'
import ModalListContainer from '../../molecules/modalListContainer'

import { userData } from './mockData'

function Profile () {
    const user = JSON.parse(localStorage.getItem('user'))
    const [statusLists, setStatusLists] = useState(null)

    const [statusClicked, setStatusClicked] = useState(null)
    const [listViewModalOpen, setListViewModalOpen] = useState(false)

    useEffect(() => {
        const localStatusList = localStorage.getItem(`statusLists${user.id}`)
        if (localStatusList) {
            const statusListParsed = JSON.parse(localStatusList)
            console.log('StatusListParsed: ', statusListParsed)

            if (Number(statusListParsed.userId) === Number(user.id)) {
                setStatusLists(statusListParsed.lists)
            }
        } else {
            const userList = {
                userId: user.id,
                lists: [
                    {
                        name: 'Viendo',
                        list: []
                    },
                    {
                        name: 'Para Ver',
                        list: []
                    },
                    {
                        name: 'Visto',
                        list: []
                    }
                ]
            }
            localStorage.setItem(`statusLists${user.id}`, JSON.stringify(userList))
            setStatusLists(userList)
        }
    }, [])
    return (
        <main className='profile'>
            {listViewModalOpen && (
                <Modal toClose={setListViewModalOpen}>
                    <ModalListContainer lists={statusLists} listName={statusClicked} />
                </Modal>
            )}
            <ProfileCard userData={userData} />
            <section className="profile__right">
                <section className='profile__status-bar'>
                    {statusLists
                        ? (statusLists.map((item, index) => (
                            <ProfileStatusListThumbnail
                                key={item.name}
                                status={userData.status[index]}
                                list={item}
                                modalSetter={setListViewModalOpen}
                                listNameSetter={setStatusClicked}
                            />
                        )))
                        : (<p>...Cargando</p>)
                    }
                </section>
                <ProfileList userData={userData}/>
            </section>
        </main>
    )
}

export default Profile
