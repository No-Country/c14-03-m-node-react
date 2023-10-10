import React from 'react'
import NavItem from '../NavItem'
export default function NavBar () {
    const navItems = [
        {
            name: 'Anime',
            link: '/Anime'
        },
        {
            name: 'Manga',
            link: '/Manga'
        },
        {
            name: 'Comunidad',
            link: '/Comunidad'
        }
    ]
    return (
        <nav className='navbar-container'>
            <ul className='navbar__list'>
                {navItems.map(navItem =>
                    (<NavItem name={navItem.name} link={navItem.link} key={navItem.name}/>)
                )}
            </ul>
        </nav>
    )
}
