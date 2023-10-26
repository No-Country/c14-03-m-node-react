import useFetch from '../Hooks/usefetch'

const baseUrl = 'https://myanime.onrender.com/'

const [users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById] = useFetch(baseUrl)

/* const [users,
        getAllUser,
        createNewUser,
        deleteUserById,
        updateUserById] =
    useFetch(baseUrl)

    useEffect(() => {
        getAllUser('/users')
        console.log(users)
    }, []) */

/* useEffect(() => {
      getAllUser('/animes')
      console.log(users)
  }, []) */
/* useEffect(() => {
      createNewUser('/animes', {
          title: 'konosuba',
          description: 'best anime ever',
          trailer: 'https://youtube.com ',
          image: 'https://4.bp.blogspot.com/-yrZmlUVr_FY/XJe7vxNj7mI/AAAAAAAALMI/4s55GoqCNBsiYlU7nHAR5KPfHhVvKWTywCLcBGAs/s1600/konosuba-anime-pelicula.jpg',
          ReleaseDate: '2015-02'
      })
      getAllUser('/animes')
  }, []) */
/* useEffect(() => {
    createNewUser('/comments', {
        content: 'esto es un comentario de prueba'
    })
    getAllUser('/comments')
}, []) */
