import "./NewTaskForm.css";
import { useState } from "react";

const NewTaskForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredTime, setTime] = useState("");
  const [enteredDescrip, setDescrip] = useState("");

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const DateHandler = (e) => {
    setDate(e.target.value);
  };
  const TimeHandler = (e) => {
    setTime(e.target.value);
  };
  const DescriptionHandler = (e) => {
    setDescrip(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: enteredTitle,
      when: {
        date: new Date(enteredDate),
        time: enteredTime,
      },
      description: enteredDescrip,
    };

    if (task.description.length < 5) {
      alert("Minimum of 5 Character");
      return;
    }

    props.onSubmitFormHandler(task);
  };
  return (
    <form onSubmit={formHandler}>
      <div className="new-form__controls">
        <div className="new-form__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={TitleHandler}
            type="text"
            required
          ></input>
        </div>
        <div className="new-form__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={DateHandler}
            type="date"
            required
          ></input>
        </div>
        <div className="new-form__control">
          <label>Time</label>
          <input
            value={enteredTime}
            onChange={TimeHandler}
            type="time"
            required
          ></input>
        </div>

        <div className="new-form__control">
          <label>Description</label>
          <textarea
            value={enteredDescrip}
            onChange={DescriptionHandler}
            rows="2"
            cols="50"
            required
          ></textarea>
        </div>
      </div>
      <div className="new-form__actions">
        <button onClick={props.cancelNewTask} value="add" className="cancel">
          Cancel
        </button>
        <button className="add" type="submit" value="add">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;
