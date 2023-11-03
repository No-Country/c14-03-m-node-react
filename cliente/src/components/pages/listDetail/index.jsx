import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import { listas } from './mockData'
import ListContainer from '../../organisms/listContainer'
import { GetAllListsApi } from '../../../apiConnection'

const ListDetail = () => {
    const { idList } = useParams()
    const token = localStorage.getItem('token')

    const [getAllListsResponse, getAllListsStatus, getAllListsFetch] = GetAllListsApi()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const [listArray, setListArray] = useState(null)
    const [listDB, setListDB] = useState(null)
    const [listLocal, setListLocal] = useState(null)

    useEffect(() => {
        // solicito la lista al backend
        getAllListsFetch('', {}, config)
    }, [idList])
    useEffect(() => {
        if (getAllListsStatus.success) {
        // solicito la lista al local y seteo listas en estado
            const myDbList = getAllListsResponse.find((list) => Number(list.id) === Number(idList))
            const myLocalList = JSON.parse(localStorage.getItem(`list${idList}`))
            if (myDbList && myLocalList) {
                setListDB(myDbList)
                setListLocal(myLocalList)
            }
        }
    }, [getAllListsResponse])
    useEffect(() => {
        // creo la version unificada
        // lo seteo a listArray
        if (listDB && listLocal) {
            const finalList = { ...listDB, animes: listLocal.animes }
            setListArray(finalList)
        }
    }, [listDB, listLocal])

    return (
        <section className='list-detail'>
            {listArray
                ? (<ListContainer list={listArray} />)
                : (<h3>...Cargando</h3>)
            }
        </section>
    )
}

export default ListDetail
