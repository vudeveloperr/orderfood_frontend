import { SET_SHOP, SET_SHOP_ID, SET_SHOP_ITEM } from '../actions/shop/action_types';

export default (state = {
    shop: [],
    shopItem: [],
    id: 0,
}, action) => {
    switch (action.type) {
        case SET_SHOP: {
            return {
                ...state,
                shop: action.data,
            };
        };
        case SET_SHOP_ITEM: {
            return {
                ...state,
                shopItem: action.data,
            };
        };
        case SET_SHOP_ID: {
            return {
                ...state,
                id: action.data,
            }
        }
        default:
            return {
                ...state,
            };
    }
};