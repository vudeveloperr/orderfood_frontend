import {combineReducers} from 'redux';
import login from './login';
import cart from './cart';
import shop from './shop';

const allReducers = combineReducers({
    login,
    cart,
    shop,
});

export default allReducers;
