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
