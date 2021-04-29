import React from 'react';
import { Avatar, ListItemAvatar, makeStyles } from '@material-ui/core';
import iconCheck from '../../assets/images/icon-check.svg';


const useStyles = makeStyles((theme, completed) => ({
    containerIcon: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        background: completed ? 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'hsl(0, 0%, 98%)',
        "&:hover": {
            background: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
            cursor: "pointer"
        }
    },
    iconTheme: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        background: completed ? 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : theme.palette.common.white,
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

const ToDoCheckItem = ({ completed }) => {
    const classes = useStyles(completed);

    return (
        <ListItemAvatar>
            <Avatar className={classes.containerIcon}>
                <Avatar className={classes.iconTheme}>
                    <img src={iconCheck} alt="icon-check" />
                </Avatar>
            </Avatar>
        </ListItemAvatar>
    );
}

export default ToDoCheckItem;