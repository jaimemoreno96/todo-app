import React, { useContext } from 'react';
import ToDoContext from '../context/todo/ToDoContext';

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
    },
    listItem: {
        "&:hover > *": {
            visibility: 'visible'
        }
    },
    deleteBtn: {
        visibility: 'hidden'
    }
}));

const ToDoItem = ({ todo }) => {
    const classes = useStyles();
    const { _id, title } = todo;
    const { deleteTodo } = useContext(ToDoContext)

    const handleClick = (_id) => {
        deleteTodo(_id)
    }


    return (
        <ListItem classes={{ container: classes.listItem }} >
            <ToDoCheckItem todo={todo} />
            <ListItemText className={classes.todoItem} disableTypography primary={title} />
            <ListItemSecondaryAction className={classes.deleteBtn} >
                <IconButton edge="end" aria-label="delete" onClick={() => handleClick(_id)}>
                    <img src={iconCross} alt="icon-cross" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem >
    );
}

export default ToDoItem;