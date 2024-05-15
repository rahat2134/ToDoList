import React, { useState } from 'react'
import './ToDoList.css'; // Import the CSS file

function ToDoList() {
const [toDoS, setToDoS] = useState(['Add Your Tasks']);

// Function to delete the list.
const deleteFromLast = () => {
  // delete from the list <li>
  setToDoS(currentToDoS => {
    // create a copy of current toDos
    const newToDoS = [...currentToDoS];
    newToDoS.pop();
    return newToDoS;
  })
}

const [newTask, setNewTask] = useState('');
// Function to add a manual task.
const addInList = () => {
  if(newTask.trim() !== '') {
    setToDoS(currentToDoS => [...currentToDoS, newTask])
  }
  else {
    alert('Please fill something.');
  }
}

return (
  <div>
    <h1>To Do List</h1>
    <ul>

      {/* <li>{toDoS[0]}</li>
      <li>{toDoS[1]}</li>
      <li>{toDoS[2]}</li> */}

      {/* Now we will fill the list with help of map. */}

      {toDoS.map((todo, idx) => (
      <li key={idx}>{todo}</li>
      ))}
    </ul>

    {/*Now Adding list from input bar.*/}
    <input
     type="text"
     placeholder='Add Your List Here'
     onChange={e => setNewTask(e.target.value)}
    />

    <button onClick={addInList}>Add Task</button>
    <button onClick={deleteFromLast}>Delete</button>
  </div>
)
}
export default ToDoList;