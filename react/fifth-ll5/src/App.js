import React from "react";
import "./App.css";
import { connect } from "react-redux";

import { Fragment } from "react";

class App extends React.Component {
  render() {
    callApi();
    return (
      <Fragment>
        {!this.props.todos ? (
          <div>
            <span>Loding</span>
          </div>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Todo</td>
                </tr>
              </thead>
              <tbody>
                {this.props.todos.map((todo, index) => {
                  return (
                    <tr>
                      <td>
                        {todo.id}
                        {todo.title}
                      </td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Fragment>
    );

    async function callApi() {
      let todosRes = await fetch("https://jsonplaceholder.typicode.com/todos");
      let aTodos = await todosRes.json();
      this.props.dispatch({ type: "add", payload: aTodos });
    }
  }
}

const fromStore = state => {
  return {
    todos: state.todos
  };
};

export default connect(fromStore)(App);
