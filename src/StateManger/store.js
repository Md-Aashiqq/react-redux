import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import counterReducer from "./Features/counterSlice";
import todoReducer from "./Features/todoSlice";

const logger = createLogger({});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
