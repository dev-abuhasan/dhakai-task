import axios from 'axios';
import toast from 'react-hot-toast';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_RESET,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from './types';


// User Logout Action
export const logout = () => dispatch => {
    localStorage.removeItem('admin_loginInfo');
    dispatch({ type: USER_LOGIN_RESET });
    dispatch({ type: USER_LOGOUT });
    toast.success('Logout Success')
};

// User Login Action
export const login = (email, password, deviceUid) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: USER_LOGIN_REQUEST });
        const { data } = await axios.post(
            `${process.env.REACT_APP_SERVER_API}/login-buyer`,
            {
                "auth": {
                    "email": email,
                    "deviceUuid": deviceUid
                },
                "password": password
            },
            config
        );
        if (data.result.token) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
            toast.success('Logged in successfully');
            localStorage.setItem('admin_loginInfo', JSON.stringify(data));
        } else {
            dispatch({
                type: USER_LOGIN_FAIL,
            });
            toast.error(data.message);
        }
    } catch (err) {
        const error =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        toast.error(error);
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error,
        });
    }
};