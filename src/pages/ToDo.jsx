import React, { useContext } from 'react';
import { Divider, Grid, List, ListItem, ListItemText, makeStyles, Paper } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ToDoTitle from '../layouts/ToDoTitle';
import '@fontsource/josefin-sans';
import { ToDoContext } from '../context/ToDoContext';
import ToDoItem from '../layouts/ToDoItem';

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
    todoItem: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
    }
}));

const ToDo = () => {
    const classes = useStyles();

    const { todos, setTodos } = useContext(ToDoContext);

    const handleOnDragEnd = (drop) => {
        let orderedTodos = [...todos];
        const itemIndex = drop.source.index;
        const [todo] = orderedTodos.splice(itemIndex, 1);

        orderedTodos.splice(drop.destination.index, 0, todo);
        setTodos(orderedTodos);
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <ToDoTitle />
            <Paper elevation={3}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="todos">
                        {providedDroppable => (
                            <div
                                className={classes.root}
                                ref={providedDroppable.innerRef}
                                {...providedDroppable.droppableProps}
                            >
                                <Grid item sm={12} md={12} lg={12}>
                                    <List component="nav" aria-label="main mailbox folders">
                                        {todos.map((todo, index) => (
                                            <Draggable
                                                key={todo.id}
                                                draggableId={(todo.id).toString()}
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
        </Grid>
    );
}

export default ToDo;