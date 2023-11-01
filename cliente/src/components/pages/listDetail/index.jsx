import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { listas } from './mockData'
import ListContainer from '../../organisms/listContainer'

const ListDetail = () => {
    const [listArray, setListArray] = useState([])
    const { idList } = useParams()

    useEffect(() => {
        // aca se consumiria la api para que devuelva la lista
        const list = listas.filter(lista => lista.id === parseInt(idList))
        setListArray(list)
    }, [idList])

    return (
        <section className='list-detail'>
            {
                listArray.map((list, index) => {
                    return <ListContainer key={index} listArray={list} />
                })
            }
        </section>
    )
}

export default ListDetail
