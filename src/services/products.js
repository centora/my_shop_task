import { rest } from './rest';

const getProducts = () => rest.get('public/products');


const getProduct = id => rest.get(`public/products/${id}`);



const updateProduct = (id, data) => rest.put(`public/products/${id}`, data);

export {
  getProducts,
  getProduct,
  updateProduct
};
