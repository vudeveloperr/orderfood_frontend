import { 
        SET_SHOP,
        SET_SHOP_ITEM,
 } from './action_types';
export default {
    setShop: (data) => ({
        type: SET_SHOP,
        data,
    }),
    setShopItem: (data) => ({
        type: SET_SHOP_ITEM,
        data,
    }),
};