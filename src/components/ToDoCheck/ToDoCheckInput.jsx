import React from 'react'
import { Avatar, ListItemAvatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerIcon: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        background: 'hsl(0, 0%, 98%)',
    },
    iconTheme: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        background: theme.palette.common.white,
        color: theme.palette.common.white
    }
}));

const ToDoCheckInput = () => {
    const classes = useStyles();

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