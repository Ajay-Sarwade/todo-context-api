import { createContext, useState } from "react";
import React from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodos] = useState([]);

  function addTodo(item) {
    setTodos([...todo, item]);
  }
  function removeTodo(id) {
    let todos = todo;
    todos = todo.filter((item) => item.id != id);
    setTodos((prev) => todos);
  }

  return (
    <TodoContext.Provider value={{ todo, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
