import {INCREASE, DECREASE} from './action_types';

export default {
    increaseCart: (data) => ({
        type: INCREASE,
        params: {
            data,
        },
    }),
    decreaseCart: (data) =>  ({
        type: DECREASE,
        params: {
            data,
        },
    }),
};