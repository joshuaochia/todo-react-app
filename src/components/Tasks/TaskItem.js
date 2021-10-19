import "./TaskItem.css";

const TaskItem = (props) => {
  const month = props.item.when.date.toLocaleString("en-US", { month: "long" });
  const day = props.item.when.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.item.when.date.getFullYear();
  const time = props.item.when.time;
  const meridiem = props.item.when.meridiem;

  return (
    <div>
      <div className="task-item">
        <div className="task-item__header">
          <h4>{props.item.title}</h4>
          <p>
            {month} {day}, {year} : {time} {meridiem}
          </p>
        </div>
        <div className="task_item__body">
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
