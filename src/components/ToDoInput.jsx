import React, { useContext } from 'react';
import { FormControl, makeStyles, OutlinedInput, Paper } from '@material-ui/core';
import ToDoContext from '../context/todo/ToDoContext';
import { DarkModeContext } from '../context/darkmode/DarkModeContext';
import { useForm } from 'react-hook-form';

import ToDoCheckInput from './ToDoCheck/ToDoCheckInput';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        backgroundColor: darkmode => darkmode ? 'hsl(235, 24%, 19%)' : theme.palette.common.white,
    },
    fontStyle: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
        fontSize: '18px',
        color: darkmode => darkmode ? 'hsl(234, 39%, 85%)' : theme.palette.common.black,
    }
}));


const ToDoInput = () => {
    const { darkmode } = useContext(DarkModeContext);
    const classes = useStyles(darkmode);
    const { register, handleSubmit } = useForm();
    const { addTodo } = useContext(ToDoContext);


    const onSubmit = async values => {
        const { title } = values;
        addTodo(title);
    }


    return (
        <Paper className={classes.inputStyle} elevation={3}>
            <FormControl fullWidth variant="outlined" component="form" onSubmit={handleSubmit(onSubmit)}>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    placeholder="Create a new todo..."
                    startAdornment={<ToDoCheckInput darkmode={darkmode} />}
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