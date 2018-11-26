import { days, defaultProduct, money, users } from './constants';

export const showMessage = (text) => {
  alert(text);
};

export const getDay = () => {
  return days[new Date().getDay()];
};

export const getAdultUsers = (users = []) => users.filter(user => user.age > 18);
getAdultUsers(users);