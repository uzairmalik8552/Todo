import React from "react";
import TodoCard from "./TodoCard";

const Todolist = (props) => {
  const render = props.todo.map((todo) => (
    <div key={todo.id}>
      <TodoCard
        todo={todo}
        deleteHandler={props.deleteHandler}
        editHandler={props.editHandler}
      />
    </div>
  ));

  return <div>{render}</div>;
};

export default Todolist;
