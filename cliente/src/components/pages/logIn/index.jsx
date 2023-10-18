import React, { useState } from 'react'
import Form from '../../organisms/Form'
import BackToTop from '../../atoms/BackToTop'

const Login = () => {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

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
            const info = {
                user,
                password
            }
            console.log(info)
            window.location.replace('/')
        } else alert('Ingrese los datos correctamente')
    }

    return (
        <section id='login'>
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
