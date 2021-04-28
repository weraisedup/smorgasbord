import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../../components/Column/Column'
import classes from './TaskBuilder.module.css'
import InitData from './InitData'

class TaskBuilder extends Component {

  state = InitData;

  onDragEnd = result => {

  }

  // onDragStart
  // onDragUpdate


  render () {
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
      {this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId]
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

        return (
          <div className={classes.Container}>

        <Column key={column.id} column={column} tasks={tasks} />

        </div>      
          )
    })}
    </DragDropContext>
    )
  }
}

export default TaskBuilder
