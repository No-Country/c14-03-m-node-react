import React, { useContext } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'

function Creator () {
   
    const getFormValues = (form) => {
        const formData = new FormData(form)

        const values = [...formData.values()]
        const isEmpty = values.includes('')
        const data = Object.fromEntries(formData)
        return { isEmpty, data, formData }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        // const token = localStorage.getItem('token')

        const { isEmpty, data, formData } = getFormValues(e.currentTarget)
        if (isEmpty) {
            console.log('please provide all values')
            return
        }

        console.log(data)

        // ---POST REQUEST-------

        /*  const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'multipart/form-data')
        myHeaders.append('authorization', `Bearer ${token}`)
        createNewAnime('/animes', formData, myHeaders)
        console.log(animes) */

        // clear inputs
        // e.currentTarget.reset()
    }
    return (
        <main className='creator'>
            <nav className='creator__nav'>
                <ul className='creator__nav-list'>
                    <li className='creator__nav-item'>
                        <button className='creator__button'>
                            <BsFillPlusSquareFill/>
                        Crear genero
                        </button>
                    </li>
                    <li className='creator__nav-item'>
                        <button className='creator__button'>
                            <BsFillPlusSquareFill/>
                        Crear Anime
                        </button>
                    </li>
                </ul>
            </nav>
            <div>
                <form className='creator__form' onSubmit={handleSubmit}>
                    <label className='creator__label'>
                        Nombre
                        <input type="text" name='title'/>
                    </label>
                    <label className='creator__label'>
                        Sinopsis
                        <textarea
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
                            Finished Airing
                                <input
                                    type="radio"
                                    name='status'
                                    value='Finished Airing'
                                />
                            </label>
                            <label className='creator__label-radio'>
                            Airing
                                <input
                                    type="radio"
                                    name='status'
                                    value='Airing'
                                />
                            </label>
                        </div>
                    </fieldset>
                    <label className='creator__label'>
                        Starting Date
                        <input type="date" name="releaseDate" />
                    </label>
                    <label className='creator__label'>
                        End Date
                        <input type="date" name="lastepisode" />
                    </label>
                    <label className='creator__label' >
                        Cover image
                        <input type="file" accept='image/*' name='image'/>
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
                    <label className='creator__label'>
                        Episodes
                        <input type="number" name='episode'/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Creator
