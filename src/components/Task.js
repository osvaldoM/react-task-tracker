import {FaTimes} from "react-icons/fa";
import {deleteTask, toggleTask} from "../actions/taskActions";
import {useDispatch} from "react-redux";

const Task = ({task}) => {
    const dispatch = useDispatch()

    return (
        <div className={`bg-gray-200 my-1 p-2 ${task.reminder ? 'border-l-4 border-solid border-green-600' : ''}`}
             onDoubleClick={() => dispatch(toggleTask(task))}>
            <h3 className='flex justify-between items-start'>
                {task.text}
                <FaTimes className='text-red-500 cursor-pointer' onClick={() => dispatch(deleteTask(task.id))}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;
