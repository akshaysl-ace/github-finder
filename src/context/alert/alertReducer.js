import { REMOVE_ALERT, SET_ALERT } from "../types";

export default (state, action) => {
    const { type, payload } = action;
    let alert, msg;
    if (payload) {
        const { alertType, message } = payload;
        alert = alertType;
        msg = message;
    };

    switch (type) {
        case SET_ALERT:
            return {
                alert, msg
            }

        case REMOVE_ALERT:
            return null;

        default:
            return state;
    }
}