/* eslint-disable react/prop-types */
import React from 'react'

function Button ({ text, type = 'light', children, className = '' }) {
    const clickHandler = (e) => {
        e.preventDefault()
    }
    return (
        <button
            className={`button ${type} ${className}`}
            onClick={clickHandler}
        >
            {children}{/* ICON */}
            <span className='button__text'>
                {text}
            </span>
        </button>
    )
}

export default Button
