import React from 'react'
import { Avatar, ListItemAvatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerIcon: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        background: props => props.darkmode ? 'hsl(237, 14%, 26%)' : 'hsl(0, 0%, 98%)',
    },
    iconTheme: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        background: props => props.darkmode ? 'hsl(235, 24%, 19%)' : theme.palette.common.white,
        color: props => props.darkmode ? 'hsl(235, 24%, 19%)' : theme.palette.common.white
    }
}));

const ToDoCheckInput = ({ darkmode }) => {
    const classes = useStyles({ darkmode });

    return (
        <ListItemAvatar>
            <Avatar className={classes.containerIcon}>
                <Avatar className={classes.iconTheme}>
                    A
                </Avatar>
            </Avatar>
        </ListItemAvatar>
    );
}

export default ToDoCheckInput;