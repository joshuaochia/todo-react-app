import NewTaskForm from "./NewTaskForm";
import "./NewTask.css";

const NewTask = (props) => {
  const onSubmitFormHandler = (task) => {
    props.NewTask(task);
  };
  return <NewTaskForm onSubmitFormHandler={onSubmitFormHandler}></NewTaskForm>;
};

export default NewTask;
