import React, { useContext } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { GeneralContext } from '../../../context/main'

function Creator () {
    const {
        animes,
        createNewAnime,
    } = useContext(GeneralContext)
    const getFormValues = (form) => {
        const formData = new FormData(form)

        const values = [...formData.values()]
        const isEmpty = values.includes('')
        const data = Object.fromEntries(formData)
        return { isEmpty, data, formData }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { isEmpty, data, formData } = getFormValues(e.currentTarget)
        if (isEmpty) {
            console.log('please provide all values')
            return
        }
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'multipart/form-data')
        createNewAnime('/animes', formData, myHeaders)
        console.log(data)
        console.log(animes)

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
                        <input type="text" name='name'/>
                    </label>
                    <label className='creator__label'>
                      Sinopsis
                        <textarea
                            className='creator__textArea'
                            name='sinopsis'
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
                        <input type="date" name="start" />
                    </label>
                    <label className='creator__label'>
                      End Date
                        <input type="date" name="end" />
                    </label>
                    <label className='creator__label' >
                      Cover image
                        <input type="file" accept='image/*' name='coverImage'/>
                    </label>
                    <fieldset>
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
                    </fieldset>
                    <label className='creator__label'>
                      Episodes
                        <input type="number" name='episodes'/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Creator
