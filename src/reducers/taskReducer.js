import {FETCH_TASKS, NEW_TASK} from "../actions/types";


const inititalState = {
    items: [],
    item: {}
}

export default function (state = inititalState, action) {
    switch (action.type) {
        case FETCH_TASKS: {
            return {
                ...state,
                items: action.payload
            }
        }
        default:
            return state;
    }
}
