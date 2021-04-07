import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core';
import "@fontsource/josefin-sans/700.css"

const useStyles = makeStyles((theme) => ({
    todoTitle: {
        fontFamily: 'Josefin Sans',
        fontWeight: 700,
    }
}));

const ToDoTitle = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <h1 className={classes.todoTitle}>TODO</h1>
        </Fragment>
    );
}

export default ToDoTitle;