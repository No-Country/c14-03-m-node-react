import React from 'react'
import Form from '../../organisms/Form'
import BackToTop from '../../atoms/BackToTop'

const Login = () => {
    const logIn = {
        type: 'login',
        title: 'Inicio de sesión',
        description: 'Descubre anime y manga, sigue tu progreso, obtén recomendaciones y lee las reseñas.',
        form: [
            {
                name: 'mail-or-user',
                type: 'text',
                value: 'Ingresar correo o nombre de usuario'
            },
            {
                name: 'password',
                type: 'password',
                value: 'Ingresar contraseña'
            }
        ],
        button: {
            submit: 'Iniciar sesión',
            span: '¿No tienes una cuenta?',
            link: 'Regístrate',
            path: '/signup'
        }
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
                    key={logIn.title}/>
            </div>
        </section>
    )
}

export default Login
