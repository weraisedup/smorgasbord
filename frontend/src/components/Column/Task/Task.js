import React from "react";
import { Draggable } from 'react-beautiful-dnd';

import { Card } from './TaskStyle'

// Some sort of dropshadow when dragging
// (isdragging ? classes.movingtaskcard : null)
// Make a handle component that restricts {...provided.dragHandleProps} to a certain area of card
// ^^  like a cutout?

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {props.task.content}
        </Card>
      )}
    </Draggable>
    );
  };

export default Task;
