const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().getMilliseconds();
    const newTask = {
      id: date,
      name: e.target.task.value,
      time: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} `,
    };
    setTaskList([...taskList, newTask]);
    e.target.task.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add task" name="task" />
      <button type="submit" className="add-btn">
        add
      </button>
    </form>
  );
};

export default AddTask;
