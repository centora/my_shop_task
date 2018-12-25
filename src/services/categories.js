import { rest } from './rest';

const shopInfo = data => rest.get('shop_info', data);

export { shopInfo };
