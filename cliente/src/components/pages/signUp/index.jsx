import React, { useContext, useState } from 'react'
import BackToTop from '../../atoms/BackToTop'
import Form from '../../organisms/Form'
import FormNextSignUp from '../../organisms/formNextSignUp'
import { UserSignUpContext } from '../../../context/UseSignUpContext'
import { GeneralContext } from '../../../context/main'

const SignUp = () => {
    const {
        name,
        setName,
        mail,
        setMail,
        password,
        setPassword,
        nickname,
        setNickname,
        birthday,
        profileImg
    } = useContext(UserSignUpContext)
    const { createNewUser } = useContext(GeneralContext)

    const [confirmPassword, setConfirmPassword] = useState(null)
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
                type: 'email',
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
        const dataColected = {
            name,
            email: mail,
            password,
            profilePicture: profileImg,
            nickname,
            birthday
        }
        console.log(`Data colected from signup form: ${dataColected}`)
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', mail)
        formData.append('password', password)
        formData.append('profilePicture', profileImg)

        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1])
        }
        console.log('Registrado :)')
        /* const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        createNewUser('/users', formData, config) */
        window.location.replace('/')
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
