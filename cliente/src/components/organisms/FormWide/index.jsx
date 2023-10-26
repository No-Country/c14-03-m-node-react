/* eslint-disable react/prop-types */
import React from 'react'
import FormInput from '../../atoms/formInput'
import InputSelect from '../../atoms/inputSelect'
// import ButtonSubmit from '../../atoms/buttonSubmit'
// import { Link } from 'react-router-dom'

const FormWide = ({ type, title, description, form, onSubmit }) => {
    return (
        <div className={'form-wide'}>
            <form onSubmit={onSubmit}>
                {
                    form && form.map(input => {
                        if (input.type === 'select') {
                            return <InputSelect key={input.name} options={input.options}/>
                        } else return <FormInput name={input.name} type={input.type} value={input.value} onChange={input.onChange} key={input.name}/>
                    })
                }

            </form>
            {/* <div className={`button-form button-${type}`}>
                <p>{button.span}</p>
                <Link to={button.path}>{button.link}</Link>
            </div> */}
        </div>
    )
}

export default FormWide
