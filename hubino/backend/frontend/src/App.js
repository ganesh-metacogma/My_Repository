import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Insert from "./Components/Insert";
import List from "./Components/List";
import axios from "axios";
import { connect } from "react-redux";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    axios
      .get("/customer")
      .then((res) => {
        this.props.dispatch({ type: "list", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid pt-3" style={{ height: "100vh" }}>
          <BrowserRouter>
            <div className="pb-3">
              <Link to="/add">
                <button id="send">Add customer</button>
              </Link>{" "}
              <Link to="/">
                <button id="send" className="ml-3">
                  List
                </button>
              </Link>{" "}
            </div>
            <Switch>
              <Route exact path="/" component={List} />
              <Route path="/add" component={Insert} />
            </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
    );
  }
}

const fromState = (state) => {
  return state;
};

export default connect(fromState)(App);
