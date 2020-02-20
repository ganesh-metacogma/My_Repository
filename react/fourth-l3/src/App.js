import React from "react";
import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";

import { Fragment } from "react";

class App extends React.Component {
  state = {
    users: ["Ganesh", "Jack", "John", "Rock"],
    todos: [],
    filter: ""
  };

  handleTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  handlefilter = e => {
    let { value } = e.target;
    let temp = this.state.todos.filter(todo => {
      return todo.user === value;
    });

    this.setState({
      todos: temp
    });
  };
  render() {
    return (
      <Fragment>
        <div className="container text-center w-50">
          <Input
            users={this.state.users}
            fromInput={todo => {
              this.handleTodo(todo);
            }}
          />
          <select className="mb-3" onChange={this.handlefilter}>
            {this.state.users.map((user, index) => {
              return (
                <option key={index} selected={index === 0 ? true : false}>
                  {user}
                </option>
              );
            })}
          </select>
          <List todos={this.state.todos} />
        </div>
      </Fragment>
    );
  }
}

export default App;
