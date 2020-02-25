import React from "react";
import "./App.css";
import { Fragment } from "react";
import { connect } from "react-redux";

import List from "./Components/List";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={event => {
              this.props.dispatch({
                type: "change",
                payload: event.target.value
              });
            }}
          />
          <List />
        </div>
      </Fragment>
    );
  }
}
const fromStore = state => {
  return {
    searchTerm: state.searchTerm
  };
};

export default connect(fromStore)(App);
