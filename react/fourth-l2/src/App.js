import React from "react";
import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";

import { Fragment } from "react";

class App extends React.Component {
  state = {
    users: ["Ganesh", "Jack", "John", "Rock"],
    todos: []
  };

  handleTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }
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
          <List todos={this.state.todos} />
        </div>
      </Fragment>
    );
  }
}

export default App;
