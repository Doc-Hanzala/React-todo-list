import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <section>
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </section>
  );
}

export default App;
