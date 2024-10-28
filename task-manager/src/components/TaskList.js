import React from "react";

function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-2">Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="border-b py-2 flex justify-between items-center">
              <span className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</span>
              <span className="text-gray-500"> - {task.date} at {task.time}</span>
              <div>
                <button onClick={() => onToggleComplete(task.id)} className="text-blue-500 mx-2">
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
