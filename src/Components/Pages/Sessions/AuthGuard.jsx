import React, {
    useEffect,
    useState,
} from 'react';
import { useSelector } from 'react-redux';


import { Redirect, useLocation } from 'react-router-dom';
const AuthGuard = ({ children }) => {
    const { user } = useSelector(({ userLogin }) => userLogin);
    const [previousRoute, setPreviousRoute] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        if (previousRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previousRoute])

    if (user) return <>{children}</>
    else {
        return (
            <Redirect
                to={{
                    pathname: '/session/login',
                    state: { redirectUrl: previousRoute },
                }}
            />
        )
    }
}
export default AuthGuard;
