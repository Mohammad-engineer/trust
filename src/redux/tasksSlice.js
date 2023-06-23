import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const unique_id = uuid();
            const newTask = {
                id: unique_id,
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;