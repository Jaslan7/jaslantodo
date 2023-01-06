import {createSlice} from "@reduxjs/toolkit";

const TODOS_KEY = 'rfk'
const initialState = {
    count: 0,
    todos: JSON.parse(localStorage.getItem(TODOS_KEY) ?? '[]'),
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: 1,
                text: action.payload,
            };
            state.todos.push(todo);
            state.count += 1;
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count -= 1;
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.todos))
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;