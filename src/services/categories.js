import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getTasks = () => rest.get('tasks');

export { getInfo, getTasks };
