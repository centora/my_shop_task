export const LOGIN_USER = 'Login';
export const login = () => ({ type: LOGIN_USER });

export const CHECK_USER = 'Check user';
export const checkUser = () => ({ type: CHECK_USER });

export const SET_USER = 'Set user';
export const setUser = data => ({ type: SET_USER, data });
