import React from 'react'
import NavBar from '../navbar'
import SearchInput from '../searchInput'
import ProfileIcon from '../profileIcon'

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
