import React, { useContext, useState } from 'react';
import ToDoContext from '../../context/todo/ToDoContext';
import { Box, Button, Typography } from '@material-ui/core';

const ToDoOptions = () => {
    const { filterTodos } = useContext(ToDoContext);

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
            >
                <Typography variant="caption" display="block" gutterBottom>
                    All
                </Typography>
            </Button>
            <Button
                size="small"
                onClick={() => handleClick("active", active)}
                disabled={active}
            >
                <Typography variant="caption" display="block" gutterBottom>
                    Active
                </Typography>
            </Button>
            <Button
                size="small"
                onClick={() => handleClick("completed", completed)}
                disabled={completed}
            >
                <Typography classes={{ label: }} variant="caption" display="block" gutterBottom>
                    Completed
                </Typography>
            </Button>
        </Box>
    );
}

export default ToDoOptions;