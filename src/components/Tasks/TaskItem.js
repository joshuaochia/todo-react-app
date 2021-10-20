import "./TaskItem.css";

const TaskItem = (props) => {
  const month = props.item.when.date.toLocaleString("en-US", { month: "long" });
  const day = props.item.when.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.item.when.date.getFullYear();
  const time = props.item.when.time;

  const deleteHandler = (e) => {
    const taskItem = e.target.closest(".task-item").dataset.id;

    props.deleteTask(taskItem);
  };

  return (
    <div>
      <div data-id={props.item.id} className="task-item">
        <div className="task-item__header">
          <h4>{props.item.title}</h4>
          <p>
            {month} {day}, {year} | {time}
          </p>
          <button onClick={deleteHandler} className="delete-item">
            Delete
          </button>
        </div>
        <div className="task_item__body">
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
