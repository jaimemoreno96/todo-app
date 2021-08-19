import React from 'react';
import { Hidden, makeStyles, Paper } from '@material-ui/core';

import ToDoOptions from './ToDoOptions';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    }
}));

const ToDoFiltersMobile = () => {
    const classes = useStyles();

    return (
        <Hidden mdUp implementation="js">
            <Paper className={classes.root} elevation={3}>
                <ToDoOptions />
            </Paper>
        </Hidden>
    );
}

export default ToDoFiltersMobile;
