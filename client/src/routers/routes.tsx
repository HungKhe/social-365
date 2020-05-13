import React from 'react';
import Login from '../modules/User/Login/container/Login';
import Register from '../modules/User/Register/container/Register';
import Community from '../modules/Community/page/Community';
const routes = [
    {
        path: "/",
        component: Community,
        exact: true,
        isPrivate: true
    },
    {
        path: '/login',
        exact: false,
        component: Login
    },
    {
        path: '/register',
        exact: false,
        component: Register
    },
    // {
    //     path: '/create',
    //     exact: false,
    //     main: () => <CreatePage />
    // },
    // {
    //     path: '/edit/:id',
    //     exact: false,
    //     main: (route: any) => <EditPage route={route} />
    // },
    {
        path: '*',
        exact: false,
        component: () => <h1>Page not found</h1>
    }
]
export default routes;