import {CHANGE, CLEAR} from './action_types';

export default {
    change: (data) => ({
        type: CHANGE,
        params: {
            data,
        },
    }),
    clear: (data) => ({
        type:CLEAR,
        data: data,
    })
};