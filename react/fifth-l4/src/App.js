import React from "react";
import "./App.css";
import { Fragment } from "react";
import { connect } from "react-redux";

import List from "./Components/List";

class App extends React.Component {
  state = {
    todo: "",
    date: ""
  };

  handletemp(todo) {
    this.setState({
      todo
    });
  }
  handleDate(date) {
    this.setState({
      date
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            onChange={event => {
              this.handletemp(event.target.value);
            }}
            value={this.state.todo}
          />
          <input
            type="date"
            value={this.state.date}
            onChange={event => {
              this.handleDate(event.target.value);
            }}
          />
          <button
            onClick={() => {
              this.props.dispatch({
                type: "change",
                payload: this.state
              });
              this.setState({ todo: "", date: "" });
            }}
            disabled={!this.state.temp && !this.state.date ? true : false}
          >
            Submit
          </button>
          <List />
        </div>
      </Fragment>
    );
  }
}
const fromStore = state => {
  return {
    todos: state.todos
  };
};

export default connect(fromStore)(App);
