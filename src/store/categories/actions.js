// 1) get info
// 2) get categories

export const GET_INFO = 'Get info';
export const getInfo = () => ({ type: GET_INFO });

export const SET_INFO = 'Set info';
export const setInfo = data => ({ type: SET_INFO, data });

export const CLEAN_INFO = 'Clean category';
export const cleanInfo = () => ({ type: CLEAN_INFO });

export const GET_CATEGORIES = 'Get Categories';
export const getCategories = () => ({ type: GET_CATEGORIES });

export const UPDATE_CATEGORIES = 'Update Categories';
export const updateCategories = data => ({ type: UPDATE_CATEGORIES, data });

export const SET_CATEGORIES = 'Set Categories';
export const setCategories = data => ({ type: SET_CATEGORIES, data });
