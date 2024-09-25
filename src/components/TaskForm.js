import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, category, deadline, status: "Pending" };
    onAddTask(newTask);
    setName('');
    setCategory('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
