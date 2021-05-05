import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import { fetchTasks } from "./actions/taskActions";

import {FETCH_TASKS} from "./actions/types";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {

    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    const storeTasks  = useSelector(state => state.tasks.items);

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchTasks());
    }, []);


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
          <Router>
              <div className='p-4 border border-green-600 m-4'>
                  <Header title='Hello' onAdd={() => setShowAddTask( !showAddTask)} showAdd={showAddTask}/>

                  <Route path='/' exact render={(props) => (
                    <>
                        { showAddTask && <AddTask onAdd={addTask}/> }
                        {
                            storeTasks.length > 0 ? <Tasks tasks={storeTasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Nothing to see here.'
                        }

                    </>
                  )} />
                  <Route path='/about' component={About} />
                  <Footer />
              </div>
          </Router>
  );
}

export default App;
