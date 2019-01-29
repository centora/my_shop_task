// 1) get info
// 2) get categories
// 3) get category
// 4) create category
// 5) update category

export const GET_INFO = 'Get info';
export const getInfo = () => ({ type: GET_INFO });

export const SET_INFO = 'Set info';
export const setInfo = data => ({ type: SET_INFO, data });

export const CLEAN_INFO = 'Clean category';
export const cleanInfo = () => ({ type: CLEAN_INFO });

export const GET_CATEGORY = 'Get Category';
export const getCategory = data => ({ type: GET_CATEGORY, data });

export const SET_CATEGORY = 'Set Category';
export const setCategory = (data) => ({ type: SET_CATEGORY, data });

