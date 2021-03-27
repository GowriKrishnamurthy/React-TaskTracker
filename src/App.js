import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const tasks = [
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
];

const App = () => {
  const [tasksList, setTasksList] = useState(tasks);
  
  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()  * 10000) + 1
    console.log(id);
    
    const newTask = { id, ...task}
    setTasksList([...tasksList, newTask])
  };
  // Delete task
  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task)=>
    task.id!==id))
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasksList(tasksList.map((task)=>
    task.id === id? 
    {...task, reminder :!task.reminder}
    :
    task))
  };
  
  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <AddTask onAdd={addTask}></AddTask>
      {tasksList.length >0 ?
      <Tasks tasks={tasksList} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
      : 'No tasks to display!'}
    </div>
  );
};

export default App;