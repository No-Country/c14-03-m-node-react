import React from 'react'
import InputSelect from '../../atoms/inputSelect'

const InputBirthDate = () => {
    function For (first, last) {
        const forArray = []
        for (let i = first; i <= last; i++) {
            forArray.push(i)
        }
        return forArray
    }

    const options = {
        day: {
            value: 'Día',
            options: For(1, 31)
        },
        month: {
            value: 'Mes',
            options: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        },
        year: {
            value: 'Año',
            options: For(1930, new Date().getFullYear()).reverse()
        }
    }

    return (
        <div className='input-birthdate'>
            <p>Fecha de nacimiento</p>
            <div className='input-birthdate_options'>
                <InputSelect options={options.day} />
                <InputSelect options={options.month} />
                <InputSelect options={options.year} />
            </div>
        </div>
    )
}

export default InputBirthDate
