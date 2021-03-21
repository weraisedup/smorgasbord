import React, { Component } from 'react'

import Collum from '../../components/Collum/Collum'

class TaskBuilder extends Component {

  state = {
    tasks: {
      salad: 2,
      bacon: 1,
      cheese: 2,
      meat: 1
    }
  }

  render () {
    return (
      <div>

      <Collum ingredients={this.state.tasks} />

      </div>
    )
  }
}

export default TaskBuilder
