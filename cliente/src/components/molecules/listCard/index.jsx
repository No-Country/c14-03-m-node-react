import React, { useEffect, useState } from 'react'
import AnimeCard from '../animeCard'
import { animes } from '../../organisms/animeDetail/mockData'
import { mangas } from '../../pages/manga/mockData'

const ListCard = ({ item }) => {
    const [itemInfo, setItemInfo] = useState([])

    useEffect(() => {
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
    }, [setItemInfo])

    return (
        <div>
            {
                itemInfo.map(item => {
                    return <AnimeCard key={item.id} item={item} />
                })
            }
        </div>
    )
}

export default ListCard
