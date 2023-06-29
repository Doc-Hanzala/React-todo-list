import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TaskList = ({ taskList, setTaskList }) => {
  const handleDelete = () => {
    setTaskList([]);
  };

  const handleDeleteSingle = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
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
            <div key={task.id} className="task">
              <div className="task-header">
                <h3>{task.name}</h3>
                <div className="icons">
                  <AiFillDelete
                    onClick={() => handleDeleteSingle(task.id)}
                    className="delete"
                  />
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
