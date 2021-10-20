import "./Tasks.css";
import Card from "../UI/Card";
import TaskItem from "./TaskItem";
import NewTask from "../NewTasks/NewTask";
import { useState } from "react";

const Tasks = (props) => {
  /// Setting up the tasks state
  const [tasksEntered, setTasks] = useState(props.tasks);

  /// Creating new task
  const NewTaskHandler = (task) => {
    setTasks((prevState) => {
      return [task, ...prevState];
    });
  };

  /////// Deleting specific Task
  const deleteTaskItem = (id) => {
    setTasks((prevState) => {
      return [...prevState.filter((item) => +item.id !== id)];
    });
  };

  // ADDING BTN AND CANCELING
  const [isAdding, setIsAdding] = useState(false);
  const addTaskHandler = () => {
    setIsAdding(true);
  };
  const cancelNewTaskBTN = () => setIsAdding(false);

  const allTasks = tasksEntered.map((task) => (
    <TaskItem deleteTask={deleteTaskItem} key={task.id} item={task} />
  ));

  return (
    <Card>
      <div className="header">
        <img
          src="https://lh6.ggpht.com/aiY9J8YK8Lzr7hMC7nZWlZGiBn8TF_PY7NVNy5U1i5g4zG8yEPzEZTJK2WwbWJUogg"
          className="logo"
          alt="TO-DO APP"
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
