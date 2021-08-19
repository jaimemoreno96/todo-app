import React, { useContext } from 'react';
import ToDoContext from '../../context/todo/ToDoContext';

import { Avatar, ListItemAvatar, makeStyles } from '@material-ui/core';
import iconCheck from '../../assets/images/icon-check.svg';


const useStyles = makeStyles((theme) => ({
    containerIcon: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        background: (props) => props.completed ? 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : (props.darkmode ? 'hsl(237, 14%, 26%)' : 'hsl(0, 0%, 98%)'),
        "&:hover": {
            background: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
            cursor: "pointer"
        }
    },
    iconTheme: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        background: (props) => (props.completed ? 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : (props.darkmode ? 'hsl(235, 24%, 19%)' : theme.palette.common.white)),
        "&:hover": {
            cursor: "pointer"
        },
    },
    iconColor: {
        visibility: props => props.completed ? 'visible' : 'hidden'
    }
}));

const ToDoCheckItem = ({ todo, darkmode }) => {
    const { completed } = todo;
    const classes = useStyles({ darkmode, completed });
    const { updateTodo } = useContext(ToDoContext)

    const handleClick = () => {
        updateTodo(todo)
    }


    return (
        <ListItemAvatar onClick={() => handleClick()}>
            <Avatar className={classes.containerIcon}>
                <Avatar className={classes.iconTheme}>
                    <img className={classes.iconColor} src={iconCheck} alt="icon-check" />
                </Avatar>
            </Avatar>
        </ListItemAvatar>
    );
}

export default ToDoCheckItem;