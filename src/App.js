import { useState, useEffect} from 'react';

import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    useEffect( () => {

        const  getTasks = async () => {
            const  tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, []);

    const fetchTasks = async () => {
        const  res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
            body: JSON.stringify(task)
        })

        const newTask = await res.json();

        setTasks([...tasks, newTask]);
    };

    const deleteTask = async  (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        });
        setTasks( tasks.filter(task => task.id !== id))
    }

    const toggleReminder = async (task) => {

        const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({...task, reminder: !task.reminder})
        })

        const data = await res.json();
        setTasks(tasks.map( task =>  task.id === data.id ? {...task, reminder: data.reminder} : task))
    }

  return (
      <div className='p-4 border border-green-600 m-4'>
          <Header title='Hello' onAdd={() => setShowAddTask( !showAddTask)} showAdd={showAddTask}/>
          { showAddTask && <AddTask onAdd={addTask}/> }
          {
              tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Nothing to see here.'
          }
      </div>
  );
}

export default App;
