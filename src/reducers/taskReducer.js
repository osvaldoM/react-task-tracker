import {DELETE_TASK, FETCH_TASKS, NEW_TASK, TOGGLE_TASK} from "../actions/types";


const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TASKS: {
            return {
                ...state,
                items: action.payload
            }
        }
        case NEW_TASK: {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                items: state.items.filter(task => task.id !== action.payload)
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                items: state.items.filter(task => task.id !== action.payload)
            }
        }
        case TOGGLE_TASK: {
            return {
                ...state,
                items: state.items.map( task =>  task.id === action.payload.id ? {...task, reminder: action.payload.reminder} : task)
            }
        }
        default:
            return state;
    }
}
