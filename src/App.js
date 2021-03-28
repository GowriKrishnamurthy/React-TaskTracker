import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [
    {
      id: 1,
      text: "Doctors appointment",
      day: "4 March at 3:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Grocery shopping",
      day: "5 March at 5:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Meeting at School",
      day: "6 March at 11:00am",
      reminder: true,
    },
  ]
  );
  
  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()  * 10000) + 1
    console.log(id);
    
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>
    task.id!==id))
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>
    task.id === id? 
    {...task, reminder :!task.reminder}
    :
    task))
  };
  
  return (
    <div className="container">
      <Header title="Task Tracker App" 
      onAdd = {()=>setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} /> }
      
      {tasks.length >0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
      : 'No tasks to display!'}      
    </div>
  );
};

export default App;