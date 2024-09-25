import React, { useState, useEffect, useCallback } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";
import CategoryFilter from "./components/CategoryFilter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  // const [theme, setTheme] = useState("light");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const sortTasksByDeadline = () => {
    const sortedTasks = [...tasks].sort(
      (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );
    setTasks(sortedTasks);
  };

  const sortTasksByStatus = () => {
    const sortedTasks = [...tasks].sort((a, b) =>
      a.status.localeCompare(b.status)
    );
    setTasks(sortedTasks);
  };

  const filterTasks = useCallback(
    (category) => {
      setFilterCategory(category);
      if (category === "") {
        setFilteredTasks(tasks);
      } else {
        setFilteredTasks(tasks.filter((task) => task.category === category));
      }
    },
    [tasks]
  );

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  useEffect(() => {
    filterTasks(filterCategory);
  }, [tasks, filterCategory, filterTasks]);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {/* <button onClick={toggleTheme}>
        {theme === "light" ? "Night" : "Day"}
      </button> */}
      <TaskForm onAddTask={addTask} />
      <CategoryFilter onFilter={filterTasks} />

      <div className="sorting-buttons">
        <button onClick={sortTasksByDeadline}>Sort by Deadline</button>
        <button onClick={sortTasksByStatus}>Sort by Status</button>
      </div>

      <ProgressTracker tasks={tasks} />
      <TaskList
        tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onUpdateStatus={updateTaskStatus}
      />
    </div>
  );
}

export default App;
