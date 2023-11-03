import React from 'react'

function CreateAnimeForm ({ handleSubmit }) {
    return (
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
            <label className='creator__label'>
          Trailer Link
                <input type="url" name='trailer'/>
            </label>
            <label className='creator__label'>
          Episodes
                <input type="number" name='episode'/>
            </label>
            <button
                className='creator__submit-button'
                type="submit"
            >
          Submit
            </button>
        </form>
    )
}

export default CreateAnimeForm
