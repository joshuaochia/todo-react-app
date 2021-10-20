import NewTaskForm from "./NewTaskForm";
import "./NewTask.css";

const NewTask = (props) => {
  const onSubmitFormHandler = (task) => {
    props.NewTask(task);
  };
  return (
    <NewTaskForm
      cancelNewTask={props.cancelNewTask}
      onSubmitFormHandler={onSubmitFormHandler}
    ></NewTaskForm>
  );
};

export default NewTask;
