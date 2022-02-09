import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./productsTypes";

// GET ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return {
                // states: [...state],
                loading: false,
                error: null,
                products: action.payload.manufacturers,
                newP: state.products,
                pages: action.payload.pages,
                count: action.payload.count
            };
        case PRODUCT_LIST_FAIL:
            return { error: action.payload };

        default:
            return state;
    }
};