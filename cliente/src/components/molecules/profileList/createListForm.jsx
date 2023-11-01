import React from 'react'
import Button from '../../atoms/button'
import { BsPlusCircle } from 'react-icons/bs'

function CreateListForm ({ statusInput, statusTextArea, createListHandler }) {
    const [listNameValue, setListNameValue] = statusInput
    const [textAreaValue, setTextAreaValue] = statusTextArea
    return (
        <form className='create-list-form'>
            <label>
                <span>
                      Nombre de la lista
                </span>
                <input
                    name='title'
                    type="text"
                    value={listNameValue}
                    onChange={(e) => setListNameValue(e.target.value)}
                />
            </label>
            <label>
                <span>
                      Una corta descripcion
                </span>
                <textarea
                    name='description'
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                />
            </label>
            <Button
                text={'Crear nueva lista'}
                type='filled'
                clickHandler={createListHandler}>
                <BsPlusCircle />
            </Button>
        </form>
    )
}

export default CreateListForm
