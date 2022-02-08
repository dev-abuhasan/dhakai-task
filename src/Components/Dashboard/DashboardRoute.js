import React from 'react';

const DashboardRoutes = [
    {
        path: '/dashboard',
        component: React.lazy(() => import('./Home/Home.jsx')),
    },
    {
        path: '/search',
        component: React.lazy(() => import('./Search/Search.jsx')),
    }

]

export default DashboardRoutes;