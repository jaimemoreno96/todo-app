import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { ToDoContext } from '../context/ToDoContext';

const useToDo = () => {
    // const [todo, setTodo] = useState(null);
    const [title, setTitle] = useState('');
    const { todos, setTodos } = useContext(ToDoContext);

    const createTodo = useCallback(
        async () => {
            try {
                const response = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/todos`, {
                    title: title
                })

                console.log(response.data);
                setTodos([
                    response.data,
                    ...todos
                ]);

            } catch (error) {
                console.log(error);
            }
        },
        [title, todos, setTodos],
    )

    useEffect(() => {
        if (title) {
            createTodo();
            setTitle('');
        }

    }, [createTodo, title])

    return [setTitle];
}

export default useToDo;