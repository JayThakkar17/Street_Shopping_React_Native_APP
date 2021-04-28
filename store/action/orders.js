export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartItems, totalAmont) => {
    return { type: ADD_ORDER, orderData: { items: cartItems, amount: totalAmont } };
}