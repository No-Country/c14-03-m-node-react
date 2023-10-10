import React from 'react'
import { NavLink } from 'react-router-dom'

function SessionPanel () {
    const controls = [
        {
            name: 'Iniciar Sesión',
            link: '/LogIn'
        },
        {
            name: 'Registrarse',
            link: '/Signup'
        }
    ]
    return (
        <nav className='session-panel'>
            <ul className='session-panel__list'>
                {controls.map((control) => (
                    <li key={control.name} className='session-panel__item'>
                        <NavLink
                            to={control.link}
                        >
                            {control.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SessionPanel
