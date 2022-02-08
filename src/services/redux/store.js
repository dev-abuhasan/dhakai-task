import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/rootReducers';

const userInfoFromStorage = localStorage.getItem('admin_loginInfo')
    ? JSON.parse(localStorage.getItem('admin_loginInfo'))
    : null;


const middleware = [thunk];
const initial = {
    userLogin: { user: userInfoFromStorage },
};

export const store = createStore(
    reducers,
    initial,
    composeWithDevTools(applyMiddleware(...middleware))
);
