import {INCREASE, DECREASE} from '../actions/cart/action_types';

export default (state = {
    cart: [],
}, action) => {
    switch (action.type) {
        case INCREASE:{
            var temp = [...state.cart];
            temp[action.data] = (!temp[action.data] ? 0 : temp[action.data]) + 1;
            return {
                ...state,
                cart: temp,
            };
        };
        case DECREASE:{
            var temp = [...state.cart];
            temp[action.data] = (!temp[action.data] ? 0 : temp[action.data]) - 1;
            return{
                ...state,
                cart:  temp,
            };
        };
        default:
            return {
                ...state,
            };
    }
};