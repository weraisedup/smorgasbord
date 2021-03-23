import React from 'react'
import classes from './Collum.module.css'

import Task from './Task/Task'

const collum = (props) => {
  let taskList = props.tasksArray
    .map(task => {
      return  <Task task={task}/>
    })

  return (
    <div className={classes.Collum}>
    <h1> Listy </h1>
      {taskList}
    </div>
  )
}

export default collum
