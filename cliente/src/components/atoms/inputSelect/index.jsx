/* eslint-disable react/prop-types */
import React from 'react'

const InputSelect = ({ value, options }) => {
    return (
        <select className={`input-select select-${value}`}>
            <option>{value}</option>
            {
                options.map(option => {
                    return <option key={option}>{option}</option>
                })
            }
        </select>
    )
}

export default InputSelect
