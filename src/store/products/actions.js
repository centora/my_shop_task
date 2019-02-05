export const GET_PRODUCTS = 'Get Products';
export const getProducts = () => ({ type: GET_PRODUCTS });

export const UPDATE_PRODUCTS = 'Update Products';
export const updateProducts = data => ({ type: UPDATE_PRODUCTS, data });

export const SET_PRODUCTS = 'Set Products';
export const setProducts = data => ({ type: SET_PRODUCTS, data });

export const CLEAR_PRODUCTS = 'Clear Products';
export const clearProducts = data => ({ type: CLEAR_PRODUCTS, data });
