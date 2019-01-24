export const LOGIN_USER = 'Login';
export const login = data => ({ type: LOGIN_USER, data });

export const CHECK_USER = 'Check user';
export const check = () => ({ type: CHECK_USER });

export const SET_USER = 'Set user';
export const setUser = data => ({ type: CHECK_USER, data });
