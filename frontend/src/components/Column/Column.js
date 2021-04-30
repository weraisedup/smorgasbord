import React from "react";
import classes from "./Column.module.css";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task/Task";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
min-height: 100px;
`;

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
              className={classes.Column}
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
