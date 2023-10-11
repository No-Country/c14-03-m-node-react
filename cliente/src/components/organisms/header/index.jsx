import React from 'react'
import NavBar from '../../molecules/navbar'
import SearchInput from '../../atoms/searchInput'
import ProfileIcon from '../../atoms/profileIcon'

function Header () {
    return (
        <header className='header-Container'>
            <p className='header__title'>MyListsManager</p>
            <NavBar/>
            <SearchInput/>
            <ProfileIcon/>
        </header>
    )
}

export default Header
