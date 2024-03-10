import React from 'react'
import { createBrowserRouter, RouterProvider, route } from 'react-router-dom'
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import { AuthorizeUser, ProtectRoute } from './middleware/auth';

// routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/password',
        element: <ProtectRoute><Password/></ProtectRoute>
    },
    {
        path: '/profile',
        element: <AuthorizeUser><Profile/></AuthorizeUser>
    },
    {
        path: '/recovery',
        element: <Recovery/>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
])
const App = () => {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}

export default App