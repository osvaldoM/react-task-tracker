

const Task = ({task}) => {

    return (
        <div className='bg-gray-200 my-1 p-2'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;
