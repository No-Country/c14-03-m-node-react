import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../molecules/navbar'
import SearchInput from '../../atoms/searchInput'
import ProfileMenu from '../../molecules/profileMenu'
import { NavLink } from 'react-router-dom'
import { GeneralContext } from '../../../context/main'

function Header () {
    const { setIsUserLogged } = useContext(GeneralContext)
    const [userOnLocal, setUserOnLocal] = useState(JSON.parse(localStorage.getItem('user')))
    useEffect(() => {
        if (userOnLocal) {
            const now = Date.now()
            const diferenciaMs = now - userOnLocal.loginDate
            const milisegundosEnUnDia = 24 * 60 * 60 * 1000
            if (diferenciaMs > milisegundosEnUnDia) {
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                setUserOnLocal(null)
                setIsUserLogged(false)
            } else {
                setIsUserLogged(true)
            }
        }
    }, [])
    return (
        <header className='header-Container'>
            <p className='header__title'>
                <NavLink to='/'>MyListsManager</NavLink>
            </p>
            <NavBar/>
            <div className='header__rigth'>
                <SearchInput/>
                <ProfileMenu/>
            </div>
        </header>
    )
}

export default Header
