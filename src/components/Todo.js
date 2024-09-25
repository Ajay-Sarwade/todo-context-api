import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = () => {
  const { todo, addTodo, removeTodo } = useContext(TodoContext);
  const [userInput, setInput] = useState("");

  function addItem() {
    let obj = {};
    obj.name = userInput;
    obj.id = todo.length;
    addTodo(obj);
  }

  function deleteItem(id) {
    removeTodo(id);
  }

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          addItem();
        }}
      >
        add todo
      </button>

      {todo.length > 0 &&
        todo.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
