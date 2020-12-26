import { LOGIN } from './action_types'

export default {
    loggedIn: (data) => ({
        type: LOGIN,
        params: {
            data,
        },
    }),
};