import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Column from "../../components/Column/Column";
import InitData from "./InitData";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 10px;
  margin-top: calc(10px + 8vh);
  height: 100%;
`;

class TaskBuilder extends Component {
  state = InitData;

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder
      }
      this.setState(newState)
      return
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // across collums
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  // TO DO: Set a timeout after moves to update the current state back to DB

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="Board-Columns" direction="horizontal" type="column">
          { provided => (
                    <Container
                    {...provided.droppableProps}
                    ref = {provided.innerRef}
                    >

{this.state.columnOrder.map((columnId, index ) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(
            taskId => this.state.tasks[taskId],
          );

          return (
              <Column key={column.id} column={column} tasks={tasks} index={index} />
          );
        })}
        {provided.placeholder}
                    </Container>
          )}
                    </Droppable>
      </DragDropContext>
    );
  }
}

export default TaskBuilder;
