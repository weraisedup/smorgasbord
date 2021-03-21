import React from 'react'

import classes from './Layout.module.css'

const layout = ( props ) => (
  <div>

  <nav> toolbar, sidebar, backdrop </nav>
  <main className={classes.Content}>
  <h1> This is the CONTENT </h1>
  { props.children }
  </main>

  </div>
)

export default layout;
