import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import "@fontsource/josefin-sans/700.css"
import iconSun from '../assets/images/icon-sun.svg';
import iconMoon from '../assets/images/icon-moon.svg';

const useStyles = makeStyles((theme) => ({
    todoTitle: {
        fontFamily: 'Josefin Sans',
        fontWeight: 700,
    }
}));

const ToDoTitle = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            // justify="flex-start"
        >
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <h1 className={classes.todoTitle}>TODO</h1>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <img src={iconSun} alt="icon-sun" />
            </Grid>
        </Grid>
    );
}

export default ToDoTitle;