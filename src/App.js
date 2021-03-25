import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const tasks = [
    {
        id:1,
        text:'Doctors appointment',
        day:'4 March at 3:30pm',
        reminder: true
    },
    {
        id:2,
        text:'Grocery shopping',
        day:'5 March at 5:30pm',
        reminder: false
    },
    {
        id:3,
        text:'Meeting at School',
        day:'6 March at 11:00am',
        reminder: true
    }];
    
const App = () => {
  const [tasksList, setTasksList] = useState(tasks)

  return (
    <div className="container">
        <Header title = "Task Tracker App"/>
        <Tasks tasks={tasksList}></Tasks>
    </div>
  );
}

export default App;
  