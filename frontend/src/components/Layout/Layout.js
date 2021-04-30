import React from "react";

import classes from "./Layout.module.css";
import NavBar from "../UI/Nav/Nav";

const layout = (props) => (
  <div>
    <NavBar title={props.BoardName} />
    <main className={classes.Content}>{props.children}</main>
  </div>
);

export default layout;
