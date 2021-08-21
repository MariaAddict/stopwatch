import { CHANGE_INTERVAL } from "./actions";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case CHANGE_INTERVAL:
            //условие для корректного интервала
            return (state + action.payload) > 0 ? state + action.payload : state;
        default:
            return state
    }
}

export default reducer;