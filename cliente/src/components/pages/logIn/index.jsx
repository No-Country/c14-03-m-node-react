import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Form from '../../organisms/Form'
import BackToTop from '../../atoms/BackToTop'
import { GeneralContext } from '../../../context/main'
import { LoginAPI } from '../../../apiConnection'

const Login = () => {
    const {
        isUserLogged,
        setIsUserLogged
    } = useContext(GeneralContext)

    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const [loginResponse, loginStatus, loginFetch] = LoginAPI()

    const logIn = {
        type: 'login',
        title: 'Inicio de sesión',
        description: 'Descubre anime y manga, sigue tu progreso, obtén recomendaciones y lee las reseñas.',
        form: [
            {
                name: 'mail-or-user',
                type: 'text',
                value: 'Ingresar correo o nombre de usuario',
                onChange: setUser
            },
            {
                name: 'password',
                type: 'password',
                value: 'Ingresar contraseña',
                onChange: setPassword
            }
        ],
        button: {
            submit: 'Iniciar sesión',
            span: '¿No tienes una cuenta?',
            link: 'Regístrate',
            path: '/signup'
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if ((user, password) != null) {
            const JSONData = JSON.stringify({
                email: user,
                password
            })
            const configJson = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            loginFetch('', JSONData, configJson)
        } else alert('Ingrese los datos correctamente')
    }
    useEffect(() => {
        if (loginStatus.success) {
            console.log(loginResponse)
            const userToLocal = { ...loginResponse.user, loginDate: Date.now() }
            console.log('userToLocal', userToLocal)
            localStorage.setItem('token', loginResponse.token)
            localStorage.setItem('user', JSON.stringify(userToLocal))
            setIsUserLogged(true)
        }
    }, [loginStatus])

    return (
        <section id='login'>
            {isUserLogged && (
                <Navigate to='/' replace={true}/>
            )}
            <div className='login-page'>
                <BackToTop/>
                <Form
                    type={logIn.type}
                    title={logIn.title}
                    description={logIn.description}
                    form={logIn.form}
                    button={logIn.button}
                    onSubmit={onSubmit}
                    key={logIn.title}/>
            </div>
        </section>
    )
}

export default Login
