import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        filter: 'all',
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ id: Date.now(), content: action.payload, completed: false });
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            // 먼저 id를 찾아서 그 id의 complete(상태값)를 바꾼다
            const todo = state.items.find((item) => item.id === action.payload);
            todo.completed = !todo.completed;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
})

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;