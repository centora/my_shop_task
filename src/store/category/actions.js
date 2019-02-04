// 3) get category
// 4) create category
// 5) update category

export const GET_CATEGORY = 'Get Category';
export const getCategory = data => ({ type: GET_CATEGORY, data });

export const SET_CATEGORY = 'Set Category';
export const setCategory = data => ({ type: SET_CATEGORY, data });

export const UPDATE_CATEGORY = 'Update Category';
export const updateCategory = data => ({ type: UPDATE_CATEGORY, data });

export const DELETE_CATEGORY = 'Delete Category';
export const deleteCategory = data => ({ type: DELETE_CATEGORY, data });

export const CREATE_NEW_CATEGORY = 'Create new category';
export const createCategory = data => ({ type: CREATE_NEW_CATEGORY, data });

export const CLEAR_CATEGORY = 'Clear category';
export const clearCategory = () => ({ type: CLEAR_CATEGORY });
