import { useState} from 'react';


const AddTask = ({onAdd}) => {
    const text = useFormInput('');
    const day = useFormInput('');
    const reminder = useFormInput('', 'checkbox');

    function useFormInput(initialValue, type= 'text'){
        const [value, setValue] = useState(initialValue);

        function handleChange(event) {
            setValue(type === 'checkbox' ? event.currentTarget.checked : event.target.value);
        }
        return {
            value,
            checked: value,
            onChange: handleChange
        }

    }

    const submitTask = (event) => {
        event.preventDefault();

        if(!text) {
            alert('please Add a task');
            return;
        }
        onAdd({text: text.value, day: day.value, reminder});

        event.target.reset();
    }

    return (
        <form className={''} onSubmit={submitTask}>
            <div className='form-control'>
                <label>
                    Task
                    <input className='block' type='text' placeholder='Add Name' {...text}/>
                </label>
            </div>
            <div className='form-control'>
                <label>
                    Day & Time
                    <input type='text' placeholder='Add Day & Time' {...day}/>
                </label>
            </div>
            <div className='form-control'>
                <label>
                    Set reminder
                    <input type='checkbox' {...reminder}/>
                </label>
            </div>
            <input className='p-2 rounded-md w-full bg-gray-900 text-white' type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask;
