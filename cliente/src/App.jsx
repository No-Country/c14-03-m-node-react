import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import { GenericProvider } from './context/main'
import Login from './components/pages/logIn'
import SignUp from './components/pages/signUp'
import Home from './components/pages/home'
import Search from './components/pages/search'

const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/login', element: <Login/> },
        { path: '/signup', element: <SignUp/> },
        { path: '/', element: <Home /> },
        { path: '/search', element: <Search/> }
    // import Main from './components/organisms/main'
    ])
    return routes
}
function App () {
    return (
        <>
            <GenericProvider>
                <BrowserRouter>
                    {/* <Header /> */}
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
