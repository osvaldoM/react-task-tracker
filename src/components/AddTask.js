import { useState} from 'react';


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const submitTask = (event) => {
        event.preventDefault();

        if(!text) {
            alert('please Add a task');
            return;
        }
        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder('');
    }

    return (
        <form className={''} onSubmit={submitTask}>
            <div className='form-control'>
                <label>
                    Task
                    <input className='block' type='text' name='' placeholder='Add Name' value={text} onChange={ event => setText(event.target.value)}/>
                </label>
            </div>
            <div className='form-control'>
                <label>
                    Day & Time
                    <input type='text' name='' placeholder='Add Day & Time' value={day} onChange={ event => setDay(event.target.value)}/>
                </label>
            </div>
            <div className='form-control'>
                <label>
                    Set reminder
                    <input type='checkbox' name='reminder' value={reminder} checked={reminder} onChange={ event => setReminder(event.currentTarget.checked)}/>
                </label>
            </div>
            <input className='p-2 rounded-md w-full bg-gray-900 text-white' type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask;
