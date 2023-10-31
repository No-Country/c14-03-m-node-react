import React from 'react'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import { Outlet } from 'react-router-dom'

function Layout () {
    return (
        <>
            <body>
                <Header />

                <Outlet />
                <Footer />
            </body>
        </>
    )
}

export default Layout
