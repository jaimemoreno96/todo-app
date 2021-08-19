import React, { useContext } from 'react';
import { Box, Button, Grid, Hidden, Typography } from '@material-ui/core';
import ToDoContext from '../../context/todo/ToDoContext';
import ToDoOptions from './ToDoOptions';

const ToDoFilters = () => {
    const { quantity, deleteCompletedTodos } = useContext(ToDoContext);

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
        >
            <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box display="flex" justifyContent="center">
                    <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                        {quantity} items left
                    </Typography>
                </Box>
            </Grid>
            <Hidden smDown implementation="js">
                <Grid item md={6} lg={6}>
                    <ToDoOptions />
                </Grid>
            </Hidden>
            <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box display="flex" justifyContent="center">
                    <Button
                        size="small"
                        onClick={() => deleteCompletedTodos()}
                        variant="text"
                    >
                        <Typography variant="caption" display="block" gutterBottom>
                            Clear completed
                        </Typography>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ToDoFilters;
