import React, { useReducer } from 'react';
import ToDoReducer from './ToDoReducer';
import ToDoContext from './ToDoContext';

import api from '../../config/axios';
import types from '../../types';


const ToDoState = props => {

    const initialState = {
        todos: [],
        darkmode: false
    }

    const [state, dispatch] = useReducer(ToDoReducer, initialState);

    const getTodos = async () => {
        try {
            const response = await api.get('/todos');

            console.log(response.data.todos);

            // setTodos(response.data.todos);
            dispatch({
                type: types.loadTodos,
                payload: response.data.todos
            })
        } catch (error) {
            console.log(error);
        }


    }

    const addTodo = async todo => {
        try {
            const response = await api.post(
                '/todos', {
                title: todo
            })

            console.log(response.data);

            dispatch({
                type: types.addTodo,
                payload: response.data
            })
            // setTodos([
            //     response.data,
            //     ...todos
            // ]);

        } catch (error) {
            console.log(error);
        }
    }

    const updateTodo = async todo => {
        try {
            const { _id, completed } = todo;
            const response = await api.put(
                `/todos/${_id}`, {
                completed: !completed
            });

            dispatch({
                type: types.updateTodo,
                payload: response.data.todo
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async _id => {
        try {
            await api.delete(`/todos/${_id}`);

            dispatch({
                type: types.deleteTodo,
                payload: _id
            });

        } catch (error) {
            console.log(error);
        }
    }


    const reorderTodos = (indexSource, indexDestination) => {
        try {
            let orderedTodos = [...state.todos];
            const [todo] = orderedTodos.splice(indexSource, 1);
            orderedTodos.splice(indexDestination, 0, todo);

            dispatch({
                type: types.reorderTodos,
                payload: orderedTodos
            });
        } catch (error) {
            console.log(error);
        }


    }



    return (
        <ToDoContext.Provider
            value={{
                todos: state.todos,
                getTodos,
                addTodo,
                updateTodo,
                deleteTodo,
                reorderTodos
            }}
        >
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoState;