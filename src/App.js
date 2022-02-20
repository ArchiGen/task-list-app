import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Birthday Party",
      day: "Feb 6th at 19:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Calling John",
      day: "Feb 8th at 12:30pm",
      reminder: false,
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((eachTask) => eachTask.id !== id));
  };

  //Toggle reminder
  const reminder = (id) => {
    setTasks(
      tasks.map((eachTask) =>
        eachTask.id === id
          ? { ...eachTask, reminder: !eachTask.reminder }
          : eachTask
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
      ) : (
        "You have no tasks"
      )}
    </div>
  );
}

export default App;
