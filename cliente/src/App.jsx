import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { GenericProvider } from './context'

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
                    <Header />
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
