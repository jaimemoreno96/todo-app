import React, { useContext } from 'react'
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import { DarkModeContext } from '../context/darkmode/DarkModeContext';
import "@fontsource/josefin-sans/700.css"

import iconSun from '../assets/images/icon-sun.svg';
import iconMoon from '../assets/images/icon-moon.svg';

const useStyles = makeStyles((theme) => ({
    todoTitle: {
        color: theme.palette.common.white,
        letterSpacing: theme.spacing(1.5),
        fontFamily: 'Josefin Sans',
        fontWeight: 700,
    },
    btnDarkMode: {
        textAlign: 'end'
    }
}));

const ToDoTitle = () => {
    const classes = useStyles();
    const { darkmode, setDarkMode } = useContext(DarkModeContext);

    const handleOnClick = () => {
        setDarkMode(!darkmode)
    }


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
            <Grid className={classes.btnDarkMode} item xs={6} sm={6} md={6} lg={6}>
                <IconButton edge="end" aria-label="dark-mode" onClick={handleOnClick}>
                    <img src={darkmode ? iconSun : iconMoon} alt="icon-sun" />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default ToDoTitle;