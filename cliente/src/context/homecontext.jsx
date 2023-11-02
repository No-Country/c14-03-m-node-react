/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { GetAllItemApi } from '../apiConnection'

export const HomeContext = createContext({})

export function HomeProvider ({ children }) {
    const token = localStorage.getItem('token')
    const [getAllItemsResponse, getAllItemsStatus, getAllItemsFetch] = GetAllItemApi()
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        getAllItemsFetch('', {}, config)
    }, [])
    useEffect(() => {
        if (getAllItemsStatus.success) {
            console.log(getAllItemsResponse)
        }
    }, [getAllItemsStatus])
    const [carouselItems, setCarouselItems] = useState([])
    const [indexItemSelected, setIndexItemSelected] = useState(0)
    const values = {
        carouselItems,
        setCarouselItems,
        indexItemSelected,
        setIndexItemSelected
    }
    return (
        <HomeContext.Provider value={values}>
            {children}
        </HomeContext.Provider>
    )
}
