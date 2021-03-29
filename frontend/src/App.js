import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import TaskBuilder from './containers/TaskBuilder/TaskBuilder'

class App extends Component {
render() {
  return (
    <div>
    <Layout>
    <TaskBuilder />
    </Layout>

    </div>
  );
}
}

export default App;
