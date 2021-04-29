import PRODUCTS from "../../data/dummy-data"
import { DELETE_PRODUCT } from "../action/product";

const initialState = {
    availableProduct: PRODUCTS,
    userProduct: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProduct: state.userProduct.filter(
                    product => product.id !== action.pid
                ),
                availableProduct: state.availableProduct.filter(
                    product => product.id !== action.pid
                )
            };
    }
    return state;
};