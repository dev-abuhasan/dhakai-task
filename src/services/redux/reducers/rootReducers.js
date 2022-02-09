import { combineReducers } from "redux";
import { productListReducer } from "../products/productReducers";
import { userLoginReducer } from "./userReducers";

export default combineReducers({
    // user
    userLogin: userLoginReducer,
    productList: productListReducer,

});
