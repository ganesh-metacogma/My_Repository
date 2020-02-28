import React, { Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import List from "./Components/List";

class App extends React.Component {
  state = {
    todo: ""
  };

  handleTodo = e => {
    let { value } = e.target;
    this.setState({
      todo: value
    });
  };
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.todo} onChange={this.handleTodo} />
          <button
            onClick={() => {
              this.props.dispatch({
                type: "change",
                payload: this.state.todo
              });
              this.setState({ todo: "" });
            }}
            disabled={!this.state.todo ? true : false}
          >
            Submit
          </button>
          <div>
            <List />
          </div>
        </div>
      </Fragment>
    );
  }
}

const fromApp = state => {
  return state;
};

const toApp = dispatch => {
  return {
    dispatch: dispatch
  };
};
export default connect(fromApp, toApp)(App);
