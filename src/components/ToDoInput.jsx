import { FormControl, makeStyles, OutlinedInput, Paper } from '@material-ui/core';
import React from 'react';
import ToDoCheck from './ToDoCheck';

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

    return (
        <Paper className={classes.inputStyle} elevation={3}>
            <FormControl fullWidth variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    placeholder="Create a new todo..."
                    startAdornment={<ToDoCheck />}
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    aria-describedby="outlined-todo-helper-text"
                    inputProps={{
                        'aria-label': 'todo',
                    }}
                    labelWidth={0}
                    className={classes.fontStyle}
                />
            </FormControl>
        </Paper>
    );
}

export default ToDoInput;