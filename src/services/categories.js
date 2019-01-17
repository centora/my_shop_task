import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getCategories = () => rest.get('public/categories');
const getCategory = id => rest.get(`public/categories/${id}`);

export {
  getInfo,
  getCategories,
  getCategory,
};
