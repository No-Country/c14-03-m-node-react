/* eslint-disable react/prop-types */
import React from 'react'

const InputSelect = (options) => {
    return (
        <select className={`input-select select-${options.value}`}>
            <option>{options.value}</option>
            {
                options.options.map(option => {
                    return <option key={option}>{option}</option>
                })
            }
        </select>
    )
}

export default InputSelect
