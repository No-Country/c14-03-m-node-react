import React, { useState } from 'react'
import { BsBoxArrowUp, BsCheck2 } from 'react-icons/bs'

const InputFile = () => {
    const [image, setImage] = useState(null)

    const inputFileClick = () => {
        document.querySelector('#input-file').click()
    }

    const handleInput = (files) => {
        setImage(files[0])
    }

    return (
        <div className='input-file'>
            <p>Ingresa una foto de perfil</p>
            {
                image
                    ? <img src={URL.createObjectURL(image)} className='input-file_preview'/>
                    : <div className='input-file_preview no-image'></div>
            }
            <div className='input-file_button'>
                <button onClick={inputFileClick}>{!image ? <BsBoxArrowUp/> : <BsCheck2/>}<p>{!image ? 'Seleccionar una imagen' : 'Imagen seleccionada'}</p></button>
                <input onChange={({ target: { files } }) => handleInput(files)} type='file' id='input-file' accept='image/*' hidden/>
            </div>
        </div>
    )
}

export default InputFile
