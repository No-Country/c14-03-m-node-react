import React from 'react'
import HeroHomePage from '../../organisms/heroHomePage'
import { HomeProvider } from '../../../context/homecontext'

function Home () {
    return (
        <main>
            <HomeProvider>
                <HeroHomePage/>
            </HomeProvider>
        </main>
    )
}

export default Home
