import React, { useState } from 'react';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import iconCheck from '../assets/images/icon-check.svg';
import iconCross from '../assets/images/icon-cross.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: '100%',
        maxWidth: '40vw',
        minWidth: 360,
        backgroundColor: theme.palette.common.white,
    },
    todoTtemContainer: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    todoItem: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
        fontSize: '18px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    containerIconTheme: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        background: 'hsl(0, 0%, 98%)',
        "&:hover": {
            background: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
            cursor: "pointer"
        }
    },
    iconTheme: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        backgroundColor: theme.palette.common.white,
        "&:hover": {
            cursor: "pointer"
        }
        // margin: theme.spacing(1),
        // "&:hover": {
        //     borderRadius: '50%',
        //     border: '1px solid transparent',
        //     borderWidth: '10px',
        //     "&:before": {
        //         content: '',
        //         borderImage: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) 10% round',
        //         zIndex: '-1'
        //     }


        // },
    }
}));

const ToDoItem = ({ todo }) => {
    const classes = useStyles();
    const { id, title, completed } = todo;

    const [toggle, setToggle] = useState(false);

    const deleteBtn = toggle ?
        <ListItemSecondaryAction
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
        >
            <IconButton edge="end" aria-label="delete">
                <img src={iconCross} alt="icon-cross" />
            </IconButton>
        </ListItemSecondaryAction>
        : null;

    return (
        <ListItem
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
        >
            <ListItemAvatar>
                <Avatar className={classes.containerIconTheme}>
                    <Avatar className={classes.iconTheme}>
                        <img src={iconCheck} alt="icon-check" />
                    </Avatar>
                </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.todoItem} disableTypography primary={title} />
            {deleteBtn}
        </ListItem >
    );
}

export default ToDoItem;