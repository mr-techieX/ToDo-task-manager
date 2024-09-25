import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEditTask, onDeleteTask, onUpdateStatus }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </ul>
  );
}

export default TaskList;