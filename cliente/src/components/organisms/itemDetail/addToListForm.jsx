import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import Button from '../../atoms/button'
import { BsPlusCircle } from 'react-icons/bs'

// import { AddItemToListApi } from '../../../apiConnection'

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
function AddToListForm ({ userLists, toCloseModal, itemToAddId }) {
    // const token = localStorage.getItem('token')
    const [selectedOption, setSelectedOption] = useState('')
    // const [addListItemResponse, addListItemStatus, addListItemFetch] = AddItemToListApi(itemToAddId)

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }
    const handleSubmit = () => {
        if (selectedOption === '') {
            toast.error('Selecciona una lista')
            return
        }
        /* const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        addListItemFetch('/', [Number(selectedOption)], config) */
        // Traer lista de local usando el id de selectedOption
        const localList = JSON.parse(localStorage.getItem(`list${selectedOption}`))
        // Verificar que el id del anime no esta ya en la lista si ya Esta mostrar alerta y return
        if (localList.animes.includes(itemToAddId)) {
            toast.error('Ya tienes esta serie agregada a esa lista')
            return
        }
        // Agregar a esa lista el id del anime itemToAddId
        localList.animes.push(itemToAddId)
        // Subir la localList actualizada con el anime
        localStorage.setItem(`list${selectedOption}`, JSON.stringify(localList))

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
