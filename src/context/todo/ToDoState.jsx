import React, { useReducer } from 'react';
import ToDoReducer from './ToDoReducer';
import ToDoContext from './ToDoContext';

import api from '../../config/axios';
import types from '../../types';


const ToDoState = props => {

    const initialState = {
        todos: [],
        darkmode: false,
        loaded: false
    }

    const [state, dispatch] = useReducer(ToDoReducer, initialState);

    const getTodos = async () => {
        try {
            const response = await api.get('/todos');

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
            });

            dispatch({
                type: types.addTodo,
                payload: response.data
            });

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


    const reorderTodos = async (indexSource, indexDestination) => {
        try {
            let orderedTodos = [...state.todos];
            const [todo] = orderedTodos.splice(indexSource, 1);
            orderedTodos.splice(indexDestination, 0, todo);

            await api.patch(
                `/todos/${todo._id}`, {
                position: indexDestination
            }
            )

            dispatch({
                type: types.reorderTodos,
                payload: orderedTodos
            });
        } catch (error) {
            console.log(error);
        }
    }

    const filterTodos = async name => {
        try {
            const response = await api.get('/todos');

            const mapping = {
                "active": (response.data.todos).filter(todo => !todo.completed),
                "completed": (response.data.todos).filter(todo => todo.completed)
            }

            const filteredTodos = mapping[name] || response.data.todos;

            dispatch({
                type: types.reorderTodos,
                payload: filteredTodos
            });

        } catch (error) {
            console.log(error);
        }
    }

    const deleteCompletedTodos = async () => {
        try {
            await api.delete('/todos/');

            const todos = [...state.todos].filter(todo => !todo.completed);

            dispatch({
                type: types.reorderTodos,
                payload: todos
            });

        } catch (error) {
            console.log(error);
        }
    }
    


    return (
        <ToDoContext.Provider
            value={{
                todos: state.todos,
                loaded: state.loaded,
                getTodos,
                addTodo,
                updateTodo,
                deleteTodo,
                reorderTodos,
                filterTodos,
                deleteCompletedTodos
            }}
        >
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoState;