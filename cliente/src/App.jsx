import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import { GenericProvider } from './context'
import Login from './components/pages/logIn'
import SignUp from './components/pages/signUp'

const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/login', element: <Login/> },
        { path: '/signup', element: <SignUp/> }
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
