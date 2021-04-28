import React from 'react'
import classes from './Nav.module.css'

const NavBar = (props) => {

    return (<nav className={classes.navOptions}>
        <h1>{props.title}</h1>
        <ul>
        <li>My Projects</li>
        <li>New Project</li>
        <li>Settings</li>
        </ul>
    </nav>
)}

export default NavBar