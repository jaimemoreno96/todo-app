import React, { useContext, useState } from 'react';
import ToDoContext from '../../context/todo/ToDoContext';
import { DarkModeContext } from '../../context/darkmode/DarkModeContext';
import { Box, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btnStyle: {
        color: darkmode => darkmode ? 'hsl(234, 11%, 52%)' : 'hsl(236, 9%, 61%)'
    }
}));

const ToDoOptions = () => {
    const { darkmode } = useContext(DarkModeContext);
    const classes = useStyles(darkmode);
    const { filterTodos } = useContext(ToDoContext);

    const btnStyle = {
        color: darkmode ? 'hsl(234, 11%, 52%)' : 'hsl(236, 9%, 61%)'
    }

    const [filters, setFilters] = useState({
        all: true,
        active: false,
        completed: false,
    });

    const { all, active, completed } = filters;

    const handleClick = (name, status) => {
        let newFilter = {};

        for (const filter of Object.keys(filters)) {
            newFilter[filter] = filter === name ? !status : false;
        }

        setFilters(newFilter)
        filterTodos(name)
    }

    return (
        <Box display="flex" justifyContent="center">
            <Button
                size="small"
                onClick={() => handleClick("all", all)}
                disabled={all}
                color="inherit"

            >
                All
                {/* <Typography style={btnStyle} variant="caption" display="block" gutterBottom>
                    All
                </Typography> */}
            </Button>
            <Button
                size="small"
                onClick={() => handleClick("active", active)}
                disabled={active}
                color="inherit"
            >
                Active
                {/* <Typography style={btnStyle} variant="caption" display="block" gutterBottom>
                    Active
                </Typography> */}
            </Button>
            <Button
                size="small"
                onClick={() => handleClick("completed", completed)}
                disabled={completed}
                color="inherit"

            >
                Completed
                {/* <Typography style={btnStyle} variant="caption" display="block" gutterBottom>
                Completed
            </Typography> */}
            </Button>
        </Box>
    );
}

export default ToDoOptions;