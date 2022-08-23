import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1230,
    name: "Initial Todo",
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(todo) {
        console.log(todo);
        return {
          payload: {
            id: nanoid(),
            name: todo,
            isCompleted: false,
          },
        };
      },
    },
    markAsCompleted: {
      reducer(state, action) {
        return state.filter((item) => item.id !== action.payload);
      },
    },
  },
});

export const getAllTodo = (state) => state.todo;

export const { addTodo, markAsCompleted } = todoSlice.actions;

export default todoSlice.reducer;
