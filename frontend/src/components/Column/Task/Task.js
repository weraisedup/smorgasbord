import React from "react";
import classes from "./Task.module.css";
import { Draggable } from "react-beautiful-dnd";

const task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {provided => (
      <li {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className={classes.taskcard}
      >
        {props.task.content}
        </li>
      )}
    </Draggable>
  );
};

export default task;
