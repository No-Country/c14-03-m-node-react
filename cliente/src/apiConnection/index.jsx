import useFetch from '../Hooks/usefetch'
const baseUrl = 'http://localhost:8080/api/v1' // Define tu URL base

// -----USER
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

// ----LIST
export function CreateListApi () {
    const createListApi = useFetch(`${baseUrl}/listAnimes`, 'POST')
    return (createListApi)
}
export function GetAllListsApi () {
    const getAllListsApi = useFetch(`${baseUrl}/listAnimes`, 'GET')
    return (getAllListsApi)
}

// ----- ANIME
export function CreateItemApi () {
    const createItemApi = useFetch(`${baseUrl}/animes`, 'POST')
    return (createItemApi)
}

// ----- GENRE
export function CreateGenreApi () {
    const createGenreApi = useFetch(`${baseUrl}/genres`, 'POST')
    return (createGenreApi)
}
export function GetAllGenresApi () {
    const getAllGenresApi = useFetch(`${baseUrl}/genres`, 'GET')
    return (getAllGenresApi)
}

export function AddGenreToItemApi (idItem) {
    const addGenreToItemApi = useFetch(`${baseUrl}/animes/${idItem}/listanime`, 'POST')
    return (addGenreToItemApi)
}

export function AddItemToListApi (idItem) {
    const addItemToListApi = useFetch(`${baseUrl}/animes/${idItem}/genres`, 'POST')
    return (addItemToListApi)
}
