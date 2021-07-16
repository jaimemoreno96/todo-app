import React, { useContext, useEffect } from 'react';
import { Box, Divider, Grid, List, makeStyles, Paper, Typography } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ToDoContext from '../context/todo/ToDoContext';
import '@fontsource/josefin-sans';

import ToDoTitle from '../layouts/ToDoTitle';
import ToDoItem from '../layouts/ToDoItem';
import BgContainer from '../layouts/BgContainer';
import ToDoInput from '../components/ToDoInput';
import ToDoFilters from '../components/ToDoFilters/ToDoFilters';
import ToDoFiltersMobile from '../components/ToDoFilters/ToDoFiltersMobile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            width: '85%',
            marginTop: theme.spacing(3)
        },
        [theme.breakpoints.up('md')]: {
            width: '38%',
            marginTop: theme.spacing(7)
        },
    },
    todoCaptionContainer: {
        marginTop: theme.spacing(5)
    },
    todoCaption: {
        fontFamily: 'Josefin Sans',
    },
}));

const ToDo = () => {
    const classes = useStyles();
    const { todos, loaded, getTodos, reorderTodos } = useContext(ToDoContext);

    useEffect(() => {
        if (!loaded) {
            getTodos();
        }
    }, [getTodos, loaded]);

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
                        <ToDoFilters />
                    </Paper>
                    <ToDoFiltersMobile />
                    <Box
                        className={classes.todoCaptionContainer}
                        fontWeight="fontWeightLight"
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography className={classes.todoCaption} variant="caption" display="block" gutterBottom>
                            Drag and drop to reorder list
                        </Typography>
                    </Box>
                </div>
            </Grid>
        </BgContainer>
    );
}

export default ToDo;