import React, { useContext } from 'react';
import ToDoContext from '../../context/todo/ToDoContext';
import { Avatar, ListItemAvatar, makeStyles } from '@material-ui/core';
import iconCheck from '../../assets/images/icon-check.svg';


const useStyles = makeStyles(theme => ({
    containerIcon: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        background: completed => completed ? 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : 'hsl(0, 0%, 98%)',
        "&:hover": {
            background: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
            cursor: "pointer"
        }
    },
    iconTheme: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        background: completed => completed ? 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : theme.palette.common.white,
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

const ToDoCheckItem = ({ todo }) => {
    const { completed } = todo;
    const classes = useStyles(completed);

    const { updateTodo } = useContext(ToDoContext)

    const handleClick = () => {
        updateTodo(todo)
    }


    return (
        <ListItemAvatar onClick={() => handleClick()}>
            <Avatar className={classes.containerIcon}>
                <Avatar className={classes.iconTheme}>
                    <img src={iconCheck} alt="icon-check" />
                </Avatar>
            </Avatar>
        </ListItemAvatar>
    );
}

export default ToDoCheckItem;