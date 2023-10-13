import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import Home from './components/pages/home'
import LogIn from './components/pages/logIn'
import { GenericProvider } from './context/main'

const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/login', element: <LogIn /> }
    ])
    return routes
}
function App () {
    return (
        <>
            <GenericProvider>
                <BrowserRouter>
                    <Header />
                    <AppRoutes />
                    <Footer/>
                </BrowserRouter>
            </GenericProvider>

        </>
    )
}

export default App
