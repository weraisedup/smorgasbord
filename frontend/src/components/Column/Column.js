import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from 'styled-components';

import Task from "./Task/Task";
import { Wrapper, List } from './ColumnStyle'

const Column = (props) => {

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
          {provided => (
        <Wrapper
        {...provided.draggableProps}
        ref={provided.innerRef}>

          <h1  {...provided.dragHandleProps}> {props.column.title} </h1>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <List {...provided.droppableProps} 
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </Wrapper>
      )}
  </Draggable>
  );
};

export default Column;
