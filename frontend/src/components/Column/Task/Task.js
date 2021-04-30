import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.li`
margin: 0px;
box-sizing: border-box;
text-align: center;
padding: 10px;

list-style-type: none;
  margin-top: 10px;
  margin-bottom: 5px;
padding: 1rem 2rem;
color: blue;
background-color: salmon;
border: 4px #762509 solid;
border-top: #FFBE69 2px solid;
border-left: #FFA569 3px solid;

`;

// Some sort of dropshadow when dragging
// (isdragging ? classes.movingtaskcard : null)
// Make a handle component that restricts {...provided.dragHandleProps} to a certain area of card

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
