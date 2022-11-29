import React from "react";
import "./ToDoFrom.css";

const ToDoFrom = (props) => {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="display-4">To-Do List App</h1>
      </div>
      <div className="form-group">
        <input
          value={props.value}
          type="text"
          className="form-control"
          placeholder="Enter To-Do"
          onChange={(e) => {
            {
              props.handleInput(e);
            }
          }}
        />
      </div>

      <button
        className="btn btn-dark"
        onClick={() => {
          props.handleBtn();
        }}
      >
        Add ToDo
      </button>

      <button
        className="btn btn-dark"
        onClick={() => {
          props.clearBtn();
        }}
      >
        Clear ToDo
      </button>
    </div>
  );
};

export default ToDoFrom;
