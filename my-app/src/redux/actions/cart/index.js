import {CHANGE} from './action_types';

export default {
    change: (data) => ({
        type: CHANGE,
        params: {
            data,
        },
    }),
};