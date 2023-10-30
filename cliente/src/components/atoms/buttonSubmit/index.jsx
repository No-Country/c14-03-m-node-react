/* eslint-disable react/prop-types */
import React from 'react'

const ButtonSubmit = ({ value }) => {
    return (
        <button
            type="submit"
            className='button-submit' >
            {value}
        </button>
    )
}

export default ButtonSubmit
