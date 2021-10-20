import "./Tasks.css";
import Card from "../UI/Card";
import TaskItem from "./TaskItem";
import NewTask from "../NewTasks/NewTask";
import { useState } from "react";

const Tasks = (props) => {
  const [tasksEntered, setTasks] = useState(props.tasks);
  const NewTaskHandler = (task) => {
    setTasks((prevState) => {
      return [task, ...prevState];
    });
  };
  const allTasks = tasksEntered.map((task) => (
    <TaskItem key={task.id} item={task} />
  ));

  const [isAdding, setIsAdding] = useState(false);

  const addTaskHandler = () => {
    setIsAdding(true);
  };

  const cancelNewTaskBTN = () => setIsAdding(false);

  return (
    <Card>
      <div className="header">
        <img
          src="https://lh6.ggpht.com/aiY9J8YK8Lzr7hMC7nZWlZGiBn8TF_PY7NVNy5U1i5g4zG8yEPzEZTJK2WwbWJUogg"
          className="logo"
        />
        {!isAdding && (
          <button onClick={addTaskHandler} className="add-task">
            New Task &#65291;
          </button>
        )}
      </div>

      {isAdding && (
        <NewTask cancelNewTask={cancelNewTaskBTN} NewTask={NewTaskHandler} />
      )}
      <div className="tasks">{allTasks}</div>
    </Card>
  );
};

export default Tasks;
