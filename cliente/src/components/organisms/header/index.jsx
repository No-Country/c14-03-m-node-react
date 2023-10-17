import React from 'react'
import NavBar from '../../molecules/navbar'
import SearchInput from '../../atoms/searchInput'
import ProfileIcon from '../../molecules/profileIcon'
import { NavLink } from 'react-router-dom'

function Header () {
    return (
        <header className='header-Container'>
            <p className='header__title'>
                <NavLink to='/'>MyListsManager</NavLink>
            </p>
            <NavBar/>
            <div className='header__rigth'>
                <SearchInput/>
                <ProfileIcon/>
            </div>
        </header>
    )
}

export default Header
