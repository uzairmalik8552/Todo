import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoCard = (props) => {
  const { todo } = props;

  return (
    <div className="Todo">
      <div>
        <p>{todo.text}</p>
        <div>
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => props.editHandler(todo)}
          />
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrash}
            onClick={() => props.deleteHandler(todo.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
