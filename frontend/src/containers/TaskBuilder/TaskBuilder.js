import React, { Component } from 'react'

import Column from '../../components/Column/Column'
import classes from './TaskBuilder.module.css'

class TaskBuilder extends Component {

  state = {
    tasks: [
      "one",
      "two",
      "boogers",
      "sniffles"
    ],
    basks:  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
  }

  // tasks = () => this.state.basks.map( task => {
  //   return task.title
  // })

  render () {
    return (
      <div className={classes.Container}>

      <Column tasksArray={this.state.tasks} />

      </div>
    )
  }
}

export default TaskBuilder
