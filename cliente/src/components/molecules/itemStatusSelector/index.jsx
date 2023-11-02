import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function ItemStatusSelector ({ selectedStatus }) {
    const [selectedOption, setSelectedOption] = selectedStatus

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }
    useEffect(() => {
        if (selectedOption !== '') {
            toast.success(`Item marcado como ${selectedOption}`)
            // Aqui se deberia agregar la serie a la lista seleccionada
        }
    }, [selectedOption])

    return (
        <form>
            <Toaster/>
            <label
                aria-label='Select a status for this Item'
                htmlFor="status-select"
            >
                <select
                    name="status"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    id="status-select"
                >
                    <option value="">-/Selecciona un estado\-</option>
                    <option value="viendo">
                    Viendo
                    </option>
                    <option value="visto">Visto</option>
                    <option value="para ver">Para ver</option>
                </select>
            </label>
        </form>
    )
}

export default ItemStatusSelector
