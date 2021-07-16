import types from "../../types";

const ToDoReducer = (state, action) => {
    const { loadTodos, addTodo, deleteTodo, updateTodo, reorderTodos } = types;

    const mapping = {
        [loadTodos]: {
            ...state,
            todos: action.payload,
            loaded: true
        },
        [addTodo]: {
            ...state,
            todos: [
                action.payload,
                ...state.todos
            ]
        },
        [updateTodo]: {
            ...state,
            todos: [...state.todos].map(
                todo => (todo._id === action.payload._id) ? action.payload : todo
            )
        },
        [deleteTodo]: {
            ...state,
            todos: [...state.todos].filter(
                todo => (todo._id !== action.payload)
            )
        },
        [reorderTodos]: {
            ...state,
            todos: action.payload
        }
    };

    return mapping[action.type] || state;
}
export default ToDoReducer;