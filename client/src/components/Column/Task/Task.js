import React from 'react'
import classes from './Task.module.css'

const task = (props) => {

  return (
    <div className={classes.taskcard}>
<p> {props.task} </p>
    </div>
  )
}

export default task
