import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 0, text: "Hello World!" }] };
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {},
    updateTodo: (state, action) => {},
  },
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
