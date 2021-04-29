import React from "react";
import classes from "./Column.module.css";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task/Task";

const Column = (props) => {

  return (
    <div className={classes.Column}>
      <h1> {props.column.title} </h1>

      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <ul {...provided.droppableProps} 
          ref={provided.innerRef}
          isdraggingover={snapshot.isDraggingOver}
          className={classes.Column}
          >
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
