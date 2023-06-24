import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    //dummy data
    initialState: [
        { id: 1, title: 'Debug your code', completed: false },
        { id: 2, title: 'Find the bug', completed: false },
        { id: 3, title: 'Commit your code', completed: false },
        { id: 4, title: 'Make coffee', completed: false },
        { id: 5, title: 'Clean your code', completed: false },
    ],
    //responds to the action, takes the current state, handles the action similar to database tables
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        updateTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].title = action.payload.title;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});


export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;