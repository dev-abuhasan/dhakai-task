import axios from "axios";
import toast from "react-hot-toast";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./productsTypes";

// GET ALL PRODUCTS ACTION
export const getProductList = (skip, limit) => async (dispatch, getState) => {

    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { user } = getState().userLogin;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.result.token}`,
            },
        };
        const { data } = await axios.get(
            `${process.env.REACT_APP_SERVER_API}/manufacturers?skip=${skip}&limit=${limit}`,
            config
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.result });

    } catch (err) {
        const error =
            err.response && err.response.data.message
                ? err.response.data.message
                : err.message;
        toast.error(error);
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
    }
};
