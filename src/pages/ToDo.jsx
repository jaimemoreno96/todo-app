import React, { useContext } from 'react';
import { Divider, Grid, List, makeStyles, Paper } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ToDoContext } from '../context/ToDoContext';
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

        // backgroundColor: theme.palette.common.white,
        [theme.breakpoints.down('xs')]: {
            width: '85%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '40%',
        },

        // maxWidth: '100%',
        // minWidth: '40vw',
    },
    todoItem: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
    },
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
                                        <List component="nav" aria-label="main mailbox folders">
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