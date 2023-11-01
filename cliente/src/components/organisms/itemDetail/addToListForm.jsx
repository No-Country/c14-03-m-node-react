import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../../atoms/button'
import { BsPlusCircle } from 'react-icons/bs'

/*
[
    {
        "id": 1,
        "title": "Comdia",
        "description": "Mejores series de comedia",
        "createdAt": "2023-10-31T17:02:19.965Z",
        "updatedAt": "2023-10-31T17:02:19.965Z",
        "userId": 1,
        "animes": []
    },
    {
        "id": 2,
        "title": "accion",
        "description": "Se armaron los frutazos",
        "createdAt": "2023-10-31T20:49:59.552Z",
        "updatedAt": "2023-10-31T20:49:59.552Z",
        "userId": 1,
        "animes": []
    }
] */
function AddToListForm ({ userLists, toCloseModal }) {
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleSubmit = () => {
        if (selectedOption === '') {
            toast.error('Selecciona una lista')
            return
        }
        toast.success('Item agregado con exito')
        console.log('anime agregado a la lista de id: ', selectedOption)
        toCloseModal(false)
    }

    return (
        <div>
            <Toaster />
            <form className='addToList-form' onSubmit={handleSubmit}>
                <label className='addToList-form__label'>
                    <span>¿A que lista quieres agregarlo?</span>
                    <select value={selectedOption} onChange={handleOptionChange}>
                        <option value=''>-/ Selecciona una Lista \-</option>
                        {userLists.map(list => (
                            <option
                                key={list.id}
                                value={list.id}
                            >
                                {list.title}
                            </option>
                        ))}

                    </select>
                </label>
                <Button
                    type="filled"
                    text='Agregar a la lista'
                    clickHandler={handleSubmit}
                >
                    <BsPlusCircle/>
                </Button>
            </form>
        </div>
    )
}

export default AddToListForm
