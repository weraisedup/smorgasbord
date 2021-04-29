import React from "react";
import classes from "./Task.module.css";
import { Draggable } from "react-beautiful-dnd";

// Some sort of dropshadow when dragging
// (isdragging ? classes.movingtaskcard : null)
// Make a handle component that restricts {...provided.dragHandleProps} to a certain area of card


const task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
      <li {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      isdragging={snapshot.isDragging}
      className={classes.taskcard}
      >
        {props.task.content}
        </li>
      )}
    </Draggable>
  );
};

export default task;
