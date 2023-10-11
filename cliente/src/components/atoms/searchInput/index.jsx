import React from 'react'
import { BsSearch } from 'react-icons/bs'

function SearchInput () {
    return (
        <form className='search-form'>
            <label htmlFor="search" className='search-form__label'>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className='search-form__input'
                />
            </label>
            <BsSearch/>
        </form>
    )
}

export default SearchInput
