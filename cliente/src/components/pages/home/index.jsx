import React from 'react'
import HeroHomePage from '../../organisms/heroHomePage'
import { HomeProvider } from '../../../context/homecontext'

function Home () {
    return (
        <main className='home-container'>
            <HomeProvider>
                <HeroHomePage/>
            </HomeProvider>
        </main>
    )
}

export default Home
