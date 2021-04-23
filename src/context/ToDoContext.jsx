import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ToDoContext = createContext();

const ToDoProvider = (props) => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const url = 'http://localhost:4000/api/todos' //'https://jsonplaceholder.typicode.com/users/1/todos';

        const response = await axios(url);
        
        setTodos(response.data.todos);

    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <ToDoContext.Provider
            value={{
                todos,
                setTodos
            }}
        >
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoProvider;