import React, { useContext, useEffect } from 'react'
import HeroInfo from '../../molecules/heroHomeInfo'
import { HomeContext } from '../../../context/homecontext'
import { mockData } from './mockData'

function HeroHomePage () {
    const { setCarouselItems, carouselItems, setIndexItemSelected } = useContext(HomeContext)
    useEffect(() => {
        const mockDataArray = []
        mockDataArray.push(...mockData)
        setCarouselItems((prevState) => [...prevState, ...mockDataArray])
        const interval = setInterval(() => {
            setIndexItemSelected((prevIndex) =>
                ((prevIndex + 1) % mockDataArray.length)
            )
        }, 15000)
        return () => clearInterval(interval)
    }, [])
    if (carouselItems) {
        return (
            <section className='hero'>
                <HeroInfo/>

            </section>
        )
    }
}

export default HeroHomePage
