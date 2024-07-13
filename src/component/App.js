import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import AddTodo from "./AddTodo";

function App() {
  const LOCAL_STORAGE_KEY = "todos";

  const [todos, setTodos] = useState(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      return storedTodos || [];
    } catch (error) {
      console.error("Failed to retrieve todos from localStorage:", error);
      return [];
    }
  });

  const [currentTodo, setCurrentTodo] = useState(null);

  const addHandler = (todoText) => {
    if (currentTodo) {
      updateHandler(currentTodo.id, todoText);
    } else {
      setTodos([...todos, { id: uuidv4(), text: todoText }]);
    }
  };

  const deleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (todo) => {
    setCurrentTodo(todo);
  };

  const updateHandler = (id, updatedText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setCurrentTodo(null); // Clear the currentTodo state after updating
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <AddTodo
        todo={todos}
        addHandler={addHandler}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        currentTodo={currentTodo}
      />
    </div>
  );
}

export default App;
