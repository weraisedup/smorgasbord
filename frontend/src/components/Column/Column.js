import React from 'react'
import classes from './Column.module.css'

import Task from './Task/Task'

const Column = (props) => {
  let taskList = props.tasksArray
    .map(task => {
      return  <Task task={task}/>
    })

  return (
    <div className={classes.Column}>
    <h1> Listy </h1>
      {taskList}
    </div>
  )
}

export default Column
