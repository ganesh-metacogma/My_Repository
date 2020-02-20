import React, { Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.isLoggedIn ? (
          <div>You are Looged In</div>
        ) : (
          <div>
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button>Submit </button>
          </div>
        )}
      </Fragment>
    );
  }
}

const fromStore = state => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(fromStore)(App);
