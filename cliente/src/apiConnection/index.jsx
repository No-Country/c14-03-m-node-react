import useFetch from '../Hooks/usefetch'
const baseUrl = 'http://localhost:8080/api/v1' // Define tu URL base

export function SignUpAPI () {
    const signupApi = useFetch(`${baseUrl}/users`, 'POST')
    return (signupApi)
}
export function LoginAPI () {
    const loginApi = useFetch(`${baseUrl}/users/login`, 'POST')
    return (loginApi)
}
export function UpdateUserDataAPI (idUser) {
    const updateUserDataApi = useFetch(`${baseUrl}/users/${idUser}`, 'PUT')
    return (updateUserDataApi)
}
