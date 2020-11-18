import { CHANGE} from '../actions/cart/action_types';

export default (state = {
    cart: [],
}, action) => {
    switch (action.type) {
        case CHANGE:{
            var temp = [...state.cart];
            temp[action.data.index] = action.data.total;
            return {
                ...state,
                cart: temp,
            };
        };
        default:
            return {
                ...state,
            };
    }
};