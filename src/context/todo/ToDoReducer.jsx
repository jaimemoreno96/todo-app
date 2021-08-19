import types from "../../types";

const ToDoReducer = (state, action) => {
    const { loadTodos, addTodo, deleteTodo, updateTodo, reorderTodos } = types;

    const mapping = {
        [loadTodos]: {
            ...state,
            todos: action.payload.todos,
            loaded: true,
            quantity: action.payload.quantity
        },
        [addTodo]: {
            ...state,
            todos: [
                action.payload,
                ...state.todos
            ],
            quantity: state.quantity + 1
        },
        [updateTodo]: {
            ...state,
            todos: [...state.todos].map(
                todo => (todo._id === action.payload._id) ? action.payload : todo
            ),
            quantity: action.payload.completed ? state.quantity - 1 : state.quantity + 1
        },
        [deleteTodo]: {
            ...state,
            todos: [...state.todos].filter(
                todo => (todo._id !== action.payload.id)
            ),
            quantity: action.payload.completed ? state.quantity : state.quantity - 1
        },
        [reorderTodos]: {
            ...state,
            todos: action.payload
        }
    };

    return mapping[action.type] || state;
}
export default ToDoReducer;