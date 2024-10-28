import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [period, setPeriod] = useState("AM");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && date) {
      const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${period}`;
      addTask({ task, date, time });
      setTask("");
      setDate("");
      setHours(12);
      setMinutes(0);
      setPeriod("AM");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl mb-2">Add a New Task</h2>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="border p-2 mb-2 w-full"
      />
      <div className="flex mb-2">
        <select value={hours} onChange={(e) => setHours(e.target.value)} className="border p-2 mr-2">
          {[...Array(12).keys()].map((n) => (
            <option key={n} value={n + 1}>{n + 1}</option>
          ))}
        </select>
        <select value={minutes} onChange={(e) => setMinutes(e.target.value)} className="border p-2 mr-2">
          {[...Array(60).keys()].map((n) => (
            <option key={n} value={n}>{n < 10 ? `0${n}` : n}</option>
          ))}
        </select>
        <select value={period} onChange={(e) => setPeriod(e.target.value)} className="border p-2">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
