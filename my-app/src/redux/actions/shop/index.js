import { 
        SET_SHOP,
        SET_SHOP_ITEM,
        SET_SHOP_ID,
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
    setShopId: (data) => ({
        type: SET_SHOP_ID,
        data
    })
};