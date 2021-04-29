import {FaTimes} from "react-icons/fa";

const Task = ({task, onDelete}) => {

    return (
        <div className='bg-gray-200 my-1 p-2'>
            <h3 className='flex justify-between items-start'>
                {task.text}
                <FaTimes className='text-red-500 cursor-pointer' onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;
