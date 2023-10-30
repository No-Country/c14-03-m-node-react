import React from 'react'
// import { AiOutlineEye, AiFillEye, AiOutlineCheck } from 'react-icons/ai'

function ItemStatusSelector () {
    return (
        <div>
            <label htmlFor="status-select"></label>
            <select name="status" id="status-select">
                <option value="viendo">
                    Viendo
                </option>
                <option value="visto">Visto</option>
                <option value="para ver">Para ver</option>
            </select>
        </div>
    )
}

export default ItemStatusSelector
