import React, { useState } from 'react'

function Creator () {
    const token = localStorage.getItem('token')

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [trailer, settrailer] = useState('')
    const [image, setimage] = useState(null) // Estado para almacenar la imagen seleccionada

    const [respuesta, setrespuesta] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('trailer', trailer)

        if (image) {
            formData.append('image', image)
        }

        try {
            const response = await fetch('http://localhost:8080/api/v1/animes', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData // Utiliza FormData en lugar de JSON.stringify
            })

            if (response.ok) {
                const data = await response.json() // Puedes manejar la respuesta si es necesario
                setrespuesta('Se creó el anime exitosamente')
                console.log(data)
            } else {
                console.error('Error al enviar la solicitud')
            }
        } catch (error) {
            console.error('Error en la solicitud:', error)
        }
    }

    const handleImageChange = (e) => {
        setimage(e.target.files[0]) // Almacena la imagen seleccionada en el estado
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="trailer">trailer</label>
                    <input
                        type="text"
                        id="trailer"
                        value={trailer}
                        onChange={(e) => settrailer(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="image">Imagen</label>
                    <input type="file" id="image" onChange={handleImageChange} />
                </div>

                <button type="submit">Enviar</button>
            </form>
            {respuesta && (
                <div>
                    <pre>{JSON.stringify(respuesta, null, 2)}</pre>
                </div>
            )}
        </>
    )
}

export default Creator
