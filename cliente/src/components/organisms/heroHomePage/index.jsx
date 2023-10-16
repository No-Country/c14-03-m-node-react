import React, { useContext, useEffect } from 'react'
import HeroInfo from '../../molecules/heroHomeInfo'
import { HomeContext } from '../../../context/homecontext'
import { mockData } from './mockData'

function HeroHomePage () {
    const { setCarouselItems, carouselItems, setIndexItemSelected, indexItemSelected } = useContext(HomeContext)
    const itemSelected = carouselItems[indexItemSelected]
    useEffect(() => {
        const mockDataArray = []
        mockDataArray.push(...mockData)
        setCarouselItems(() => [...mockDataArray])
        const interval = setInterval(() => {
            setIndexItemSelected((prevIndex) =>
                ((prevIndex + 1) % mockDataArray.length)
            )
        }, 15000)
        return () => clearInterval(interval)
    }, [])
    if (carouselItems.length > 0) {
        return (
            <section className='hero'>
                <div className='hero__bottom'>
                    <HeroInfo/>
                </div>
                <picture className='hero__img-container'>
                    <img
                        className='hero__img'
                        src={itemSelected.banner_img}
                        alt={itemSelected.title} />
                </picture>
            </section>
        )
    }
}

export default HeroHomePage
