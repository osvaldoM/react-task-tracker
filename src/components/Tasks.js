import Task from "./Task";

const Tasks = ({tasks, onDelete}) => {
    return (
        <div className='tasks'>
            {tasks.map( (task) => (
                <Task key={task.id} task={task} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Tasks;
