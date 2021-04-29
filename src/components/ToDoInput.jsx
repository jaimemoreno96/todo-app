import React, { useContext, useState } from 'react';
import { FormControl, makeStyles, OutlinedInput, Paper } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import ToDoCheckInput from './ToDoCheck/ToDoCheckInput';
import useToDo from '../hooks/useToDo';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
        marginBottom: theme.spacing(3),
    },
    fontStyle: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
        fontSize: '18px'
    }
}));


const ToDoInput = () => {
    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [setTitle, todo] = useToDo();
    

    const onSubmit = async values => {
        const { title } = values;
        console.log(title);
        setTitle(title);
        // setTodos([
        //     [...todos],
        //     todo
        // ]);
    }


    return (
        <Paper className={classes.inputStyle} elevation={3}>
            <FormControl fullWidth variant="outlined" component="form" onSubmit={handleSubmit(onSubmit)}>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    placeholder="Create a new todo..."
                    startAdornment={<ToDoCheckInput />}
                    // value={todo}
                    // onChange={() => updTodo(todo)}
                    {...register("title", { required: true })}
                    aria-describedby="outlined-todo-helper-text"
                    inputProps={{
                        'aria-label': 'title',
                    }}
                    labelWidth={0}
                    className={classes.fontStyle}
                />
            </FormControl>
        </Paper>
    );
}

export default ToDoInput;