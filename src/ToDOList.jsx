import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => setNewTask(e.target.value);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updated = [...tasks];
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
      setTasks(updated);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updated = [...tasks];
      [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
      setTasks(updated);
    }
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <div>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
