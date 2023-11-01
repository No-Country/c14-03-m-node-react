import React, { useState } from 'react'

function Creator () {
    const token = localStorage.getItem('token')
    const [localUserData, setLocalUserData] = useState(JSON.parse(localStorage.getItem('user')))

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Finished Airing')
    const [episode, setEpisode] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [lastepisode, setLastEpisode] = useState('')
    const [trailer, setTrailer] = useState('')
    const [image, setImage] = useState(null)

    const getFormValues = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('trailer', trailer)
        formData.append('status', status)
        formData.append('episode', episode)
        formData.append('releaseDate', releaseDate)
        formData.append('lastepisode', lastepisode)
        if (image) {
            formData.append('image', image)
        }

        const data = Object.fromEntries(formData)

        return { data, formData }
    }
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]

        if (selectedFile) {
            setImage(selectedFile)
        } else {
            setImage(null)
        }
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const { data, formData } = getFormValues()

        console.log(data)

        // ---POST REQUEST-------
        fetch('http://localhost:8080/api/v1/animes', {
            method: 'POST',
            headers:
            {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }
    return (
        <main className='creator'>
            <form className='creator__form' onSubmit={handleSubmit}>
                <label className='creator__label'>
                    <span>Nombre</span>
                    <input
                        type="text"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className='creator__label'>
                    <span>Sinopsis</span>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='creator__textArea'
                        name='description'
                        rows='5'
                        cols='20'
                    />
                </label>
                <fieldset>
                    <legend className='creator__legend'>Select status</legend>
                    <div className='creator__radio-container'>
                        <label className='creator__label-radio'>
                            <span>Finished Airing</span>
                            <input
                                value='Finished Airing'
                                onChange={handleStatusChange}
                                type="radio"
                                name='status'
                                checked={status === 'Finished Airing'}
                            />
                        </label>
                        <label className='creator__label-radio'>
                            <span>Airing</span>
                            <input
                                value='Airing'
                                onChange={handleStatusChange}
                                type="radio"
                                name='status'
                                checked={status === 'Airing'}
                            />
                        </label>
                    </div>
                </fieldset>
                <label className='creator__label'>
                    <span>Starting Date</span>
                    <input
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                        type="date"
                        name="releaseDate"
                    />
                </label>
                <label className='creator__label'>
                    <span>End Date</span>
                    <input
                        type="date"
                        name="lastepisode"
                        value={lastepisode}
                        onChange={(e) => setLastEpisode(e.target.value)}
                    />
                </label>
                <label className='creator__label' >
                    <span>Cover image</span>
                    <input
                        onChange={handleFileChange}
                        type="file"
                        accept='image/*'
                        name='image'
                    />
                </label>
                <label className='creator__label'>
                    <span>Trailer Link</span>
                    <input
                        value={trailer}
                        onChange={(e) => setTrailer(e.target.value)}
                        type="url"
                        name='trailer'
                    />
                </label>
                <label className='creator__label'>
                    <span>Episodes</span>
                    <input
                        type="number"
                        name='episode'
                        onChange={(e) => setEpisode(e.target.value)}
                    />
                </label>
                {/* <fieldset>
                        <legend className='creator__legend'>Select type</legend>
                        <div className='creator__radio-container'>
                            <label className='creator__label-radio'>
                            Serie
                                <input
                                    type="radio"
                                    name='type'
                                    value='Serie'
                                />
                            </label>
                            <label className='creator__label-radio'>
                            Book
                                <input
                                    type="radio"
                                    name='type'
                                    value='Book'
                                />
                            </label>
                            <label className='creator__label-radio'>
                            Movie
                                <input
                                    type="radio"
                                    name='type'
                                    value='Movie'
                                />
                            </label>
                        </div>
                    </fieldset> */}
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Creator
