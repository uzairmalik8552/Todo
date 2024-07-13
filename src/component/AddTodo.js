import React, { Component } from "react";
import Todolist from "./Todolist";

class AddTodo extends Component {
  state = { todo: this.props.currentTodo ? this.props.currentTodo.text : "" };

  componentDidUpdate(prevProps) {
    if (prevProps.currentTodo !== this.props.currentTodo) {
      this.setState({
        todo: this.props.currentTodo ? this.props.currentTodo.text : "",
      });
    }
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.todo === "") {
      alert("All fields have to be filled");
      return;
    }
    this.props.addHandler(this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <div className="TodoWrapper">
        <form className="TodoForm" onSubmit={this.add}>
          <div>
            <input
              type="text"
              placeholder="What is the task today"
              className="todo-input"
              value={this.state.todo}
              onChange={(e) => this.setState({ todo: e.target.value })}
            />
            <button type="submit" className="todo-btn">
              {this.props.currentTodo ? "Update task" : "Add task"}
            </button>
          </div>
        </form>
        <Todolist
          todo={this.props.todo}
          deleteHandler={this.props.deleteHandler}
          editHandler={this.props.editHandler}
        />
      </div>
    );
  }
}

export default AddTodo;
