import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import TaskBuilder from './containers/TaskBuilder/TaskBuilder'

class App extends Component {
  
render() {
  let boardName = 'My Project'

  return (
    <div>
    <Layout BoardName={boardName}>
    <TaskBuilder />
    </Layout>

    </div>
  );
}
}

export default App;
