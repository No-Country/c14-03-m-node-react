/* eslint-disable react/prop-types */
import React from 'react'

function Button ({ text, type = 'light', children }) {
    const clickHandler = (e) => {
        e.preventDefault()
    }
    return (
        <button
            className={`button ${type}`}
            onClick={clickHandler}
        >
            {children}{/* ICON */}
            {text}
        </button>
    )
}

export default Button
