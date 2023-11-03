import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../molecules/navbar'
import SearchInput from '../../atoms/searchInput'
import ProfileMenu from '../../molecules/profileMenu'
import { NavLink } from 'react-router-dom'
import { GeneralContext } from '../../../context/main'
import { BsList } from 'react-icons/bs'

function Header () {
    const [navbar, setNavbar] = useState(false)
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
                <NavLink to='/'>Radar Anime</NavLink>
            </p>
            <div className='navbar-options'>
                <button className='button_navbar-options' onClick={() => setNavbar(!navbar)}><BsList/></button>
                <NavBar navbar={navbar}/>
                <div className='header__rigth'>
                    <SearchInput/>
                    <ProfileMenu/>
                </div>
            </div>
        </header>
    )
}

export default Header
