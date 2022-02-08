import { Redirect } from 'react-router-dom';
import DashboardRoutes from '../Dashboard/DashboardRoute';

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard" />,
    },
]
const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const rootRouting = [
    ...DashboardRoutes,

    ...redirectRoute,
    ...errorRoute,
]

export default rootRouting
