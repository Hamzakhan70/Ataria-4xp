// src/components/TodoforRedux.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todo/todoSlice";

const TodoforRedux = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <input
        className="bg-red-300 border-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.id}: {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoforRedux;
