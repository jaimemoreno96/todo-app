import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ToDoContext = createContext();

const ToDoProvider = (props) => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/todos` //'https://jsonplaceholder.typicode.com/users/1/todos';

            const response = await axios(url);

            console.log(response.data.todos);
            
            setTodos(response.data.todos);    
        } catch (error) {
            console.log(error);
        }
        

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