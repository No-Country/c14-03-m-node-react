import React from 'react'
import BackToTop from '../../atoms/BackToTop'
import Form from '../../organisms/Form'

const SignUp = () => {
    const signup = {
        type: 'signup',
        title: 'Crea una cuenta',
        description: 'Descubre anime y manga, sigue tu progreso, obtén recomendaciones y lee las reseñas.',
        form: [
            {
                name: 'mail-or-user',
                type: 'text',
                value: 'Ingresar nombre'
            },
            {
                name: 'mail-or-user',
                type: 'text',
                value: 'Ingresar mail'
            },
            {
                name: 'password',
                type: 'password',
                value: 'Ingresar contraseña'
            },
            {
                name: 'password',
                type: 'password',
                value: 'Confirmar contraseña'
            }
        ],
        button: {
            submit: 'Siguiente',
            span: '¿Ya estás registrado?',
            link: 'Inicia sesión',
            path: '/login'
        }
    }

    return (
        <section id='sign-up'>
            <div className='sign-up_page'>
                <BackToTop/>
                <Form
                    type={signup.type}
                    title={signup.title}
                    description={signup.description}
                    form={signup.form}
                    button={signup.button}
                    key={signup.title}/>
            </div>
        </section>
    )
}

export default SignUp
