import React, { useState } from 'react'
import BackToTop from '../../atoms/BackToTop'
import Form from '../../organisms/Form'
import FormNextSignUp from '../../organisms/formNextSignUp'

const SignUp = () => {
    const [name, setName] = useState(null)
    const [mail, setMail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [nickname, setNickname] = useState(null)

    const [next, setNext] = useState(false)

    const signup = {
        type: 'signup',
        title: 'Crea una cuenta',
        description: 'Descubre anime y manga, sigue tu progreso, obtén recomendaciones y lee las reseñas.',
        form: [
            {
                name: 'name-signup',
                type: 'text',
                value: 'Ingresar nombre',
                onChange: setName
            },
            {
                name: 'mail-signup',
                type: 'text',
                value: 'Ingresar mail',
                onChange: setMail
            },
            {
                name: 'password-signup',
                type: 'password',
                value: 'Ingresar contraseña',
                onChange: setPassword
            },
            {
                name: 'confirm_password-signup',
                type: 'password',
                value: 'Confirmar contraseña',
                onChange: setConfirmPassword
            }
        ],
        button: {
            submit: 'Siguiente',
            span: '¿Ya estás registrado?',
            link: 'Inicia sesión',
            path: '/login'
        }
    }

    const handleNext = (e) => {
        e.preventDefault()

        if ((password === confirmPassword) && (name, mail, password) != null) {
            const info = {
                name,
                mail,
                password
            }
            console.log(info)
            setNext(true)
        } else alert('Los datos ingresados no son correctos')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const info = {
            name,
            mail,
            password,
            nickname
        }
        console.log(info)
        alert('Registrado :)')
    }

    return (
        <section id='sign-up'>
            <div className='sign-up_page'>
                <BackToTop/>
                {
                    !next
                        ? <Form
                            type={signup.type}
                            title={signup.title}
                            description={signup.description}
                            form={signup.form}
                            button={signup.button}
                            onSubmit={handleNext}
                            key={signup.title}/>
                        : <FormNextSignUp setNickname={setNickname} handleSubmit={handleSubmit}/>
                }
            </div>
        </section>
    )
}

export default SignUp
