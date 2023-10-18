import React from 'react'
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import { GenericProvider } from './context/main'
import Login from './components/pages/logIn'
import SignUp from './components/pages/signUp'
import Home from './components/pages/home'

/* const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/login', element: <Login/> },
        { path: '/signup', element: <SignUp/> },
        { path: '/', element: <Home /> }
    ])
    return routes
} */
function App () {
    const location = useLocation()

    const shouldRenderLayout = !['/login', '/signup'].includes(location.pathname)
    return (
        <>
            <GenericProvider>
                <Router>
                    {shouldRenderLayout && <Header />}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/dignup' element={<SignUp />} />
                    </Routes>
                    {shouldRenderLayout && <Footer/>}
                </Router>
            </GenericProvider>

        </>
    )
}

export default App
