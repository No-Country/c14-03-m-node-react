import React from 'react'
import ReactDOM from 'react-dom/client'
import { GenericProvider } from './context/main.jsx'

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
    { path: '/signup', element: <SignUp/> }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GenericProvider>
            <RouterProvider router={router} />
        </GenericProvider>
    </React.StrictMode>
)
