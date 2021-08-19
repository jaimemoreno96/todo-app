import React, { useContext } from 'react';
import ToDoContext from '../context/todo/ToDoContext';
import { DarkModeContext } from '../context/darkmode/DarkModeContext';

import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import ToDoCheckItem from '../components/ToDoCheck/ToDoCheckItem';
import iconCross from '../assets/images/icon-cross.svg';

const useStyles = makeStyles((theme) => ({
    todoItem: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
        fontSize: '18px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        color: darkmode => darkmode ? 'hsl(234, 39%, 85%)' : theme.palette.common.black,
    },
    listItem: {
        "&:hover > *": {
            visibility: 'visible'
        },
    },
    deleteBtn: {
        [theme.breakpoints.up('md')]: {
            visibility: 'hidden'
        },
    }
}));

const ToDoItem = ({ todo }) => {
    const { darkmode } = useContext(DarkModeContext);
    const classes = useStyles(darkmode);
    const { _id, title, completed } = todo;
    const { deleteTodo } = useContext(ToDoContext)

    const handleClick = (_id, completed) => {
        deleteTodo(_id, completed)
    }


    return (
        <ListItem classes={{ container: classes.listItem }} >
            <ToDoCheckItem todo={todo} darkmode={darkmode} />
            <ListItemText className={classes.todoItem} disableTypography primary={title} />
            <ListItemSecondaryAction className={classes.deleteBtn} >
                <IconButton edge="end" aria-label="delete" onClick={() => handleClick(_id, completed)}>
                    <img src={iconCross} alt="icon-cross" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem >
    );
}

export default ToDoItem;