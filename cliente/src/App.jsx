import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'
import { GenericProvider } from './context'

import './App.css'

const AppRoutes = () => {
    const routes = useRoutes([
        // { path: '/ReactWithTailwind/', element: <Home /> },

    ])
    return routes
}
function App () {
    return (
        <>
            <GenericProvider>
                <BrowserRouter>
                    <NavBar />
                    {/* <Layout> */}
                    <AppRoutes />
                    {/* </Layout> */}
                    <Footer/>
                </BrowserRouter>
            </GenericProvider>

        </>
    )
}

export default App
