import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home";
import Verify from "./Component/Verify";
import Result from "./Component/Result";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/verify" component={Verify} />
          <Route exact path="/result" component={Result} />
        </Router>
      </Fragment>
    );
  }
}

const fromStore = (state) => {
  return state;
};

export default connect(fromStore)(App);
