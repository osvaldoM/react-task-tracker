import {DELETE_TASK, FETCH_TASKS, NEW_TASK, TOGGLE_TASK} from "../actions/types";

export function fetchTasks() {
    return async (dispatch, getState) => {
        try {
            const  res = await fetch(`${process.env.REACT_APP_API_URL}tasks`);
            const data = await res.json();
            dispatch({
                type: FETCH_TASKS,
                payload: data
            });
            return getState().tasks;
        } catch (error) {
            console.log('there was an error')
        }
    }
}

export const addTask = (task) => {
    return async (dispatch, getState) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}tasks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const newTask = await res.json();
        dispatch({
            type: NEW_TASK,
            payload: newTask
        });
        return newTask;
    }
};

export const deleteTask = (taskId) => {
    return async (dispatch, getState) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}tasks/${taskId}`, {
            method: 'DELETE'
        });
        if(res) {
            dispatch({
                type: DELETE_TASK,
                payload: taskId
            })
        } else {
            throw new Error('failed to delete task');
        }
    }
}

export const toggleTask = (task) => {
    return async (dispatch, getState) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({...task, reminder: !task.reminder})
        });
        const toggledTask = await res.json();
        return dispatch({
            type: TOGGLE_TASK,
            payload: toggledTask
        });
    }
}
