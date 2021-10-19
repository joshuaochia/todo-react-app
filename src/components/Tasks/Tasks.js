import "./Tasks.css";
import Card from "../UI/Card";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  const allTasks = props.tasks.map((task) => <TaskItem item={task} />);
  return (
    <Card>
      <div className="header">
        <img
          src="https://lh6.ggpht.com/aiY9J8YK8Lzr7hMC7nZWlZGiBn8TF_PY7NVNy5U1i5g4zG8yEPzEZTJK2WwbWJUogg"
          className="logo"
        />
        <button className="add-task">New Task &#65291;</button>
      </div>
      <div className="tasks">{allTasks}</div>
    </Card>
  );
};

export default Tasks;
