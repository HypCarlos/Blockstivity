import "./App.css";
import React, { useEffect, useState } from "react";

// COMPONENT IMPORTS
import ListHeader from "./components/listheader/ListHeader";
import ListItem from "./components/listitem/ListItem";

const App = () => {
  const userEmail = "carlitosway9989@yahoo.com";
  // UPDATES TODO LIST TASKS
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getData, []);

  console.log(tasks);

  const sortedTodos = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app-container">
      <ListHeader listName={"🤾🏿‍♂️ To Do List"} getData={getData} />
      {sortedTodos?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
};

export default App;
