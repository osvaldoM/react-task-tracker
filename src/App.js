import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import {addTask, fetchTasks} from "./actions/taskActions";

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {

    const [showAddTask, setShowAddTask] = useState(false);

    const tasks  = useSelector(state => state.tasks.items);

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchTasks());
    }, []);

  return (
          <Router>
              <div className='p-4 border border-green-600 m-4'>
                  <Header onAdd={() => setShowAddTask( !showAddTask)} showAdd={showAddTask}/>

                  <Route path='/' exact render={(props) => (
                    <>
                        { showAddTask && <AddTask onAdd={ (task) => dispatch(addTask(task)) }/> }
                        {
                            tasks.length > 0 ? <Tasks tasks={tasks} /> : 'Nothing to see here.'
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
