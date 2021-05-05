import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import TaskBuilder from './containers/TaskBuilder/TaskBuilder'
import styled from 'styled-components';

const Page = styled.div`
background-color: #BAB29C;
height: 100vh;
width: 100vw;
`;

class App extends Component {
  
render() {
  let boardName = 'My Project'

  return (
    <Page>
    <Layout BoardName={boardName}>
    <TaskBuilder />
    </Layout>

    </Page>
  );
}
}

export default App;
