import React from 'react';

const PagesRoute = [
    {
        name: 'Login',
        path: '/session/login',
        component: React.lazy(() => import('./Sessions/Login.jsx')),
    },
    {
        name: 'Error Not Found',
        path: '/session/404',
        component: React.lazy(() => import('./Sessions/NotFound.jsx')),
    },

]

export default PagesRoute;