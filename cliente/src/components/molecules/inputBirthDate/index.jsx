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

    const options = [
        {
            value: 'Día',
            options: For(1, 31)
        },
        {
            value: 'Mes',
            options: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        },
        {
            value: 'Año',
            options: For(1930, new Date().getFullYear()).reverse()
        }
    ]

    return (
        <div className='input-birthdate'>
            <p>Fecha de nacimiento</p>
            <div className='input-birthdate_options'>
                {
                    options.map(option => {
                        return <InputSelect value={option.value} options={option.options} key={option.value}/>
                    })
                }
            </div>
        </div>
    )
}

export default InputBirthDate
