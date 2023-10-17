import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import { GenericProvider } from './context/main'
import Home from './components/pages/home'
// import Main from './components/organisms/main'

const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> }

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
                    {<AppRoutes />}
                    {/* <Main/> */}
                    {/* </Layout> */}
                    <Footer/>
                </BrowserRouter>
            </GenericProvider>

        </>
    )
}

export default App
