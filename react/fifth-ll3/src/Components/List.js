import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.todos.map((todo, index) => {
          return (
            <div key={index}>
              <h3>{todo}</h3>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

const fromApp = state => {
  return {
    todos: state.todos
  };
};

export default connect(fromApp)(List);
