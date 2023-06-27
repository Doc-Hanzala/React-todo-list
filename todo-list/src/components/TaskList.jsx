import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TaskList = ({ taskList, setTaskList }) => {
  const handleDelete = () => {
    setTaskList([]);
  };
  return (
    <div className="task-list">
      <div className="taskList-header">
        <h3>todo {taskList.length} </h3>
        <button onClick={handleDelete} className="clear-btn">
          clear all
        </button>
      </div>
      <div className="tasks">
        {taskList.map((task) => {
          return (
            <div className="task">
              <div className="task-header">
                <h3>{task.name}</h3>
                <div className="icons">
                  <AiFillDelete className="delete" />
                  <AiFillEdit className="edit" />
                </div>
              </div>
              <p>{task.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
