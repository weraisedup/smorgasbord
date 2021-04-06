import React from 'react'
import classes from './Column.module.css'

import Task from './Task/Task'

const Column = (props) => {

  let tasksList = props.tasksArray.map(task => {
      return <li><Task title={task}/></li>
  })

  return (
    <div className={classes.Column}>
    <h1> Listy </h1>
    <ul>
    {tasksList}
    </ul>
    </div>
  )
}

export default Column
