import React from 'react'
import ReactDOM from 'react-dom/client'
import { GeneralProvider } from './context/main.jsx'
import { UserSignUpProvider } from './context/UseSignUpContext.jsx'

import Layout from './layout/index.jsx'

import Login from './components/pages/logIn/index.jsx'
import Home from './components/pages/home/index.jsx'
import SignUp from './components/pages/signUp/index.jsx'
import Profile from './components/pages/profile/index.jsx'
import DetailView from './components/pages/detailView'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/anime/:id',
                element: <DetailView />
            }
        ]
    },
    { path: '/login', element: <Login/> },
    { path: '/signup', element: <UserSignUpProvider><SignUp/></UserSignUpProvider> }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GeneralProvider>
            <UserSignUpProvider></UserSignUpProvider>
            <RouterProvider router={router} />
        </GeneralProvider>
    </React.StrictMode>
)
