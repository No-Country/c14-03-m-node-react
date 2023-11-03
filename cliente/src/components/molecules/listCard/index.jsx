import React, { useEffect, useState } from 'react'
import GetOneItemInfo from './getOneItem'
import IndividualListCard from './ListCard'
import AnimeCard from '../animeCard'

import { animes } from '../../organisms/animeDetail/mockData'
import { mangas } from '../../pages/manga/mockData'

const ListCard = ({ list }) => {
    console.log(list)
    /*
    const [animesList, setAnimesList] = useState([])
    const [animesListDB, setAnimesListDB] = useState(null)
    const [animesListLocal, setAnimesListLocal] = useState(null)

    // animeList debe ser un array de los animes
    const animeObj = GetOneItemInfo(1)
    useEffect(() => {
        const animesArray = list.animes.map(anime => {
            if (animeObj) {
                return animeObj
            }
        })
    }, []) */
    // solicitar animes en la lista haciendo un map de list.animes
    /* useEffect(() => {
        // deberia filtrar los animes y mangas que estan en la db
        const filterItem = async () => {
            let prueba = animes.filter(anime => anime.id === item.id)
            if (prueba.length <= 0) {
                prueba = mangas.filter(manga => manga.id === item.id)
            }
            return prueba
        }
        filterItem()
            .then(res => setItemInfo(res))
    }, [setItemInfo]) */

    return (
        <div className='list-detail__cards-container'>
            {
                list.animes.map(item => {
                    return <IndividualListCard key={item} id={item} />
                })
            }
        </div>
    )
}

export default ListCard
