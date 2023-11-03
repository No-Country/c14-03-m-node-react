import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

function ComplementaryForm ({ idAnime, setDone }) {
    const getFormValues = (form) => {
        const formData = new FormData(form)
        const values = [...formData.values()]
        const isEmpty = values.includes('')
        const data = Object.fromEntries(formData)

        return { isEmpty, data, formData }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const { data } = getFormValues(e.currentTarget)

        console.log(data)
        console.log('REspuesta MainForm: ', idAnime)

        // ---POST REQUEST-------
        localStorage.setItem(`anime${idAnime.id}`, JSON.stringify({ ...data, id: idAnime.id }))
        // console.log(JSON.parse(localStorage.getItem(`anime${idAnime.id}`)))
        toast.success('informacion completada')
        setDone(false)
        e.currentTarget.reset()
    }
    return (
        <form className='creator__form' onSubmit={handleSubmit}>
            <Toaster/>
            <h2>Informacion Complementaria</h2>
            <label className='creator__label'>
                <span>Initial Score</span>
                <input
                    type="number"
                    name='score'
                />
            </label>
            <label >
                <span>Tipo de item</span>
                <select
                    name="type"
                    id="status-select"
                >
                    <option value="">-/Selecciona un tipo\-</option>
                    <option value="TV">TV</option>
                    <option value="Manga">Manga</option>
                </select>
            </label>

            <label className='creator__label'>
                <span>Productoras</span>
                <input
                    type="text"
                    name='producers'
                />
            </label>
            <label className='creator__label'>
                <span>Estudio</span>
                <input
                    type="text"
                    name='studio'
                />
            </label>
            <label className='creator__label'>
                <span>Generos, separalos con un &quot;-&quot;</span>
                <input
                    type="text"
                    name='genres'
                />
            </label>

            <label className='creator__label'>
                <span>Banner Link</span>
                <input
                    type="url"
                    name='banner_img_link'
                />
            </label>

            <button
                className='creator__submit-button'
                type="submit"
            >Submit</button>
        </form>
    )
}

export default ComplementaryForm
