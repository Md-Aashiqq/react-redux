import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  getAllTodo,
  markAsCompleted,
} from "../StateManger/Features/todoSlice";

function TODO() {
  const todo = useSelector(getAllTodo);
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const addTodoHandler = () => {
    if (todoValue !== "") {
      dispatch(addTodo(todoValue));
    }
  };

  const onCompleteHandler = (id) => {
    dispatch(markAsCompleted(id));
  };

  return (
    <div className="todo__container">
      <div className="todo_input">
        <input
          type="text"
          placeholder="Enter the TODO Here"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button className="todo_add_btn" onClick={addTodoHandler}>
          Add
        </button>
      </div>
      <div className="todo_list">
        {todo?.map((item, idx) => {
          return (
            !item.isCompleted && (
              <div className="todo" key={idx}>
                <h1>{item.name}</h1>
                <button
                  className="todo_cancel_btn"
                  onClick={() => onCompleteHandler(item.id)}
                >
                  x
                </button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default TODO;
