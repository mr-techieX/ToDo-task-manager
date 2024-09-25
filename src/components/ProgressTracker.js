function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter(task => task.status === "Completed").length;
  const totalTasks = tasks.length;

  return (
    <div className="progress-tracker">
      <h2>Progress</h2>
      <p>{completedTasks} out of {totalTasks} tasks completed</p>
    </div>
  );
}

export default ProgressTracker;
