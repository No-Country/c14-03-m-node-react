import React from 'react'
import NavBar from '../../molecules/navbar'
import SearchInput from '../../atoms/searchInput'
import ProfileIcon from '../../molecules/profileIcon'

function Header () {
    return (
        <header className='header-Container'>
            <p className='header__title'>MyListsManager</p>
            <NavBar/>
            <div className='header__rigth'>
                <SearchInput/>
                <ProfileIcon/>
            </div>
        </header>
    )
}

export default Header
