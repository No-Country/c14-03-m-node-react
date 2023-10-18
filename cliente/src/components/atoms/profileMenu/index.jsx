/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
/* El componente funciona pero falta revisar navegacion con teclado porque no redirecciona al hacer enter o espacio */
function ProfileMenu ({ mouseHandler }) {
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
    const { mouseEnter, mouseLeave } = mouseHandler
    return (
        <nav
            className='session-panel'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
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

export default ProfileMenu
