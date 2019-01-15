import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getCategories = () => rest.get('public/categories');
const getCategory = id => rest.get(`public/categories/${id}`);
const getProducts = id => rest.get('public/products');
const getProduct = id => rest.get(`public/products/${id}`);

export {
  getInfo,
  getCategories,
  getCategory,
  getProducts,
  getProduct
};
