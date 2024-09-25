import React, { useState } from "react";

function TaskItem({ task, onEditTask, onDeleteTask, onUpdateStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTask.name && editedTask.category && editedTask.deadline) {
      onEditTask(task.id, editedTask);
      setIsEditing(false);
    } else {
      alert("All fields must be filled out!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleStatusChange = (e) => {
    onUpdateStatus(task.id, e.target.value);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input
            name="name"
            type="text"
            value={editedTask.name}
            onChange={handleChange}
            placeholder="Task Name"
          />
          <input
            name="category"
            type="text"
            value={editedTask.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <input
            name="deadline"
            type="date"
            value={editedTask.deadline}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>Category: {task.category}</p>
          <p>Deadline: {task.deadline}</p>
          <p>
            Status:
            <select value={task.status} onChange={handleStatusChange}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
