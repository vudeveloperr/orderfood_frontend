import { 
    CHANGE,
    CLEAR,
} from '../actions/cart/action_types';

export default (state = {
    cart: [],
}, action) => {
    switch (action.type) {
        case CHANGE:{
            var temp = [...state.cart];
            temp[action.data.index] = {id_food: action.data.id,name:action.data.name, quantity: action.data.quantity, total:action.data.total};
            return {
                ...state,
                cart: temp,
            };
        };
        case CLEAR:{
            return{
                ...state,
                cart: [],
            }
        }
        default:
            return {
                ...state,
            };
    }
};