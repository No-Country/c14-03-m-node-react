import React, { useState } from 'react'
import AnimeCard from '../animeCard'
import { animes } from '../../organisms/animeDetail/mockData'
import { mangas } from '../../pages/manga/mockData'
import { Link } from 'react-router-dom'

const ListCard = ({ item }) => {
    const [itemInfo, setItemInfo] = useState([])

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

    return (
        <div>
            {
                itemInfo.map(item => {
                    // aca deberia agregarse el id del item
                    return <Link to={`/${item.type === ('TV' || 'Movie') ? 'anime' : 'manga'}/1`} key={item.id}><AnimeCard item={item} /></Link>
                })
            }
        </div>
    )
}

export default ListCard
