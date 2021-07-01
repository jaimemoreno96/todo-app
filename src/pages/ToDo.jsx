import React, { useContext, useEffect } from 'react';
import { Divider, Grid, List, makeStyles, Paper } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ToDoContext from '../context/todo/ToDoContext';
import '@fontsource/josefin-sans';

import ToDoTitle from '../layouts/ToDoTitle';
import ToDoItem from '../layouts/ToDoItem';
import BgContainer from '../layouts/BgContainer';
import ToDoInput from '../components/ToDoInput';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            width: '85%',
            marginTop: theme.spacing(3)
        },
        [theme.breakpoints.up('sm')]: {
            width: '38%',
            marginTop: theme.spacing(7)
        },
    },
    todoItem: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
    },
}));

const ToDo = () => {
    const classes = useStyles();
    const { todos, getTodos, reorderTodos } = useContext(ToDoContext);

    useEffect(() => {
        if (!todos.length) {
            getTodos();
        }
    }, [getTodos, todos]);

    const handleOnDragEnd = (drop) => {
        const indexSource = drop.source.index;
        const indexDestination = drop.destination.index;
        reorderTodos(indexSource, indexDestination);
    }

    return (
        <BgContainer>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <div
                    className={classes.root}
                >
                    <ToDoTitle />
                    <ToDoInput />
                    <Paper elevation={3}>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="todos">
                                {providedDroppable => (
                                    <div
                                        ref={providedDroppable.innerRef}
                                        {...providedDroppable.droppableProps}
                                    >
                                        <Grid item sm={12} md={12} lg={12}>
                                            <List aria-label="main mailbox folders">
                                                {todos.map((todo, index) => (
                                                    <Draggable
                                                        key={todo._id}
                                                        draggableId={(todo._id).toString()}
                                                        index={index}
                                                    >
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <ToDoItem todo={todo} />
                                                                <Divider />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </List>
                                        </Grid>
                                        {providedDroppable.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </Paper>
                </div>
            </Grid>
        </BgContainer>
    );
}

export default ToDo;