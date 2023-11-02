import useFetch from '../Hooks/usefetch'
const baseUrl = 'http://localhost:8080/api/v1'
// const baseUrl = 'https://myanime.onrender.com/api/v1'

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
export function GetAllStatusApi () {
    const getAllStatusApi = useFetch(`${baseUrl}/listasPres`, 'GET')
    return (getAllStatusApi)
}

// ----- ANIME
export function CreateItemApi () {
    const createItemApi = useFetch(`${baseUrl}/animes`, 'POST')
    return (createItemApi)
}
export function GetOneItemApi (idItem) {
    const getOneItemApi = useFetch(`${baseUrl}/animes/${idItem}`, 'GET')
    return (getOneItemApi)
}
export function GetAllItemApi () {
    const getAllItemApi = useFetch(`${baseUrl}/animes`, 'GET')
    return (getAllItemApi)
}
export function AddGenreToItemApi (idItem) {
    const addGenreToItemApi = useFetch(`${baseUrl}/animes/${idItem}/genres`, 'POST')
    return (addGenreToItemApi)
}
export function AddItemToListApi (idItem) {
    const addItemToListApi = useFetch(`${baseUrl}/animes/${idItem}/listanime`, 'POST')
    return (addItemToListApi)
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
