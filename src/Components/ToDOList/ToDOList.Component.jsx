import React from "react";
import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <>
      <h1 className="display-4">{props.tittle}</h1>
      <ul className="list-group">
        {props.list.map((item, index) => {
          return (
            <li className="list-group-item list-group-item-action" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
