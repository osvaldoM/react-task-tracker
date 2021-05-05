import {FETCH_TASKS, NEW_TASK} from "../actions/types";

export function fetchTasks() {
    return async (dispatch, getState) => {
        try {
            const  res = await fetch('http://localhost:5000/tasks');
            const data = await res.json();
            dispatch({
                type: FETCH_TASKS,
                payload: data
            });
        } catch (error) {
            console.log('there was an error')
        }
    }
}
